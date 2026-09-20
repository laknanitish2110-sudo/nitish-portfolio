export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

// ─────────────────────────────────────────────────────────
// DROP YOUR MEDIA HERE
// Place files in ./src/media/ and reference them below.
//
// Examples:
//   { type: "image", src: "photo1.jpg", caption: "That one time..." }
//   { type: "video", src: "clip1.mp4", caption: "Legendary moment" }
//
// The video will auto-generate scenes for each item.
// ─────────────────────────────────────────────────────────

export const MEDIA_ITEMS: MediaItem[] = [
  // ADD YOUR MEDIA FILES HERE — images and video clips
  // { type: "image", src: "photo1.jpg", caption: "Best memories" },
  // { type: "video", src: "clip1.mp4", caption: "The vibes" },
];

export const FRIEND_NAME = "Mani";
