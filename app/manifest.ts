import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MATOS GYM",
    short_name: "MATOS GYM",
    description: "Gimnasio en Saladas, Corrientes, con entrenamiento grupal y personalizado.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    lang: "es-AR",
    categories: ["fitness", "health", "sports"],
    icons: [
      {
        src: "/assets/optimized/matos-logo.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any"
      },
      {
        src: "/assets/optimized/matos-logo.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable"
      }
    ]
  };
}
