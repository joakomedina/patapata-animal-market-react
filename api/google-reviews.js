const CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
let cachedAt = 0;
let cachedPayload = null;

function normalizeReview(review) {
  const original = review?.originalText?.text || "";
  const localized = review?.text?.text || "";
  return {
    author: review?.authorAttribution?.displayName || "Cliente",
    rating: Number(review?.rating || 0),
    text: original || localized,
    relativeTime: review?.relativePublishTimeDescription || "",
  };
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const forceRefresh = req.query?.refresh === "1";
  const now = Date.now();
  if (!forceRefresh && cachedPayload && now - cachedAt < CACHE_TTL_MS) {
    return res.status(200).json({ ...cachedPayload, cached: true });
  }

  const apiKey = process.env.PLACES_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(200).json({
      source: "fallback",
      rating: null,
      userRatingCount: null,
      reviews: [],
      message: "Missing PLACES_API_KEY or PLACE_ID",
    });
  }

  try {
    const detailsUrl = `https://places.googleapis.com/v1/places/${placeId}?languageCode=es&regionCode=VE`;
    const upstream = await fetch(detailsUrl, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews.authorAttribution,reviews.rating,reviews.text,reviews.originalText,reviews.relativePublishTimeDescription",
      },
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      return res.status(502).json({
        error: "Google Places request failed",
        status: upstream.status,
        details: errorText,
      });
    }

    const data = await upstream.json();
    const payload = {
      source: "google",
      placeName: data?.displayName?.text || "",
      rating: typeof data?.rating === "number" ? data.rating : null,
      userRatingCount:
        typeof data?.userRatingCount === "number" ? data.userRatingCount : null,
      reviews: Array.isArray(data?.reviews)
        ? data.reviews.map(normalizeReview).filter((r) => r.text)
        : [],
    };

    cachedPayload = payload;
    cachedAt = now;
    return res.status(200).json({ ...payload, cached: false });
  } catch (error) {
    return res.status(500).json({
      error: "Internal error fetching reviews",
      details: error?.message || "Unknown error",
    });
  }
}
