export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export const MEDIA_ITEMS: MediaItem[] = [
  // Opening — together in ethnic wear
  { type: "image", src: "ash1.jpg", caption: "The look that says everything" },
  { type: "image", src: "ash2.jpg", caption: "Side by side, always" },

  // Heart hands together
  { type: "image", src: "ash3.jpg", caption: "Two hearts, one beat" },

  // Selfie vibes
  { type: "image", src: "ash4.jpg", caption: "Selfie game strong" },

  // Festival/tradition moment
  { type: "image", src: "ash5.jpg", caption: "Traditions hit different with you" },

  // Video clip
  { type: "video", src: "ash-clip1.webm" },

  // Solo Ash — the star
  { type: "image", src: "ash6.jpg", caption: "Glowing like the star you are" },
  { type: "image", src: "ash7.jpg", caption: "That smile though" },
  { type: "image", src: "ash8.jpg", caption: "Main character energy" },
];

export const FRIEND_NAME = "Ash";
