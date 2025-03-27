"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://shwet.tech/${src}?w=${width}&q=${quality || 75}`;
}
