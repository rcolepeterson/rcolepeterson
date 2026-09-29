import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.rcolepeterson.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.rcolepeterson.com/proto",
      lastModified: new Date(),
    },
    {
      url: "https://www.rcolepeterson.com/independent/the-lost-matches",
      lastModified: new Date(),
    },
  ];
}
