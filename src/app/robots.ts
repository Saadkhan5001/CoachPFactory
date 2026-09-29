import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://coachpfactory.com/sitemap.xml",
    host: "https://coachpfactory.com",
  };
}
