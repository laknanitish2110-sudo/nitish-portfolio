export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export const MEDIA_ITEMS: MediaItem[] = [
  // Opening — together shots
  { type: "image", src: "photo1.jpg", caption: "Twinning since day one" },
  { type: "video", src: "clip1.webm" },
  { type: "image", src: "photo2.jpg", caption: "The smiles that say it all" },

  // Solo Mani — she's the star
  { type: "image", src: "photo6.jpg", caption: "That laugh. That energy." },
  { type: "image", src: "photo7.jpg", caption: "A whole vibe" },
  { type: "video", src: "clip2.webm" },

  // Adventures together
  { type: "image", src: "photo11.jpg", caption: "Exploring the world together" },
  { type: "image", src: "photo4.jpg", caption: "Every step, side by side" },
  { type: "image", src: "photo15.jpg", caption: "This one's my favorite" },

  // More Mani magic
  { type: "image", src: "photo3.jpg", caption: "Main character energy" },
  { type: "image", src: "photo10.jpg", caption: "So effortlessly beautiful" },
  { type: "image", src: "photo5.jpg", caption: "The cutest human" },

  // More together + candids
  { type: "image", src: "photo13.jpg", caption: "My person" },
  { type: "image", src: "photo12.jpg", caption: "Lost in thought, found in beauty" },
  { type: "image", src: "photo8.jpg", caption: "Queen of every frame" },

  // Special ending
  { type: "image", src: "photo16.jpg", caption: "Drawn together, forever" },
  { type: "image", src: "photo14.jpg", caption: "Here's to many more adventures" },
];

export const FRIEND_NAME = "Mani";
