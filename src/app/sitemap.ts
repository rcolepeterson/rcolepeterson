import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rcolepeterson.com",
      lastModified: new Date(),
    },
    {
      url: "https://rcolepeterson.com/proto",
      lastModified: new Date(),
    },
  ];
}
