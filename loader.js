"use client";

export default function myImageLoader({ src, width = 800, quality = 75 }) {
  return `https://shwet.tech/${encodeURIComponent(src)}?w=${width}&q=${quality}`;
}
