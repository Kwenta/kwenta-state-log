import fs from "fs";
import matter from "gray-matter";
import { KipMetadata } from "./KipMetadata";

const getKipMetadata = (): KipMetadata[] => {
  const folder = "kips/";
  const files = fs.readdirSync(folder);
  const markdownKips = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownKips.map((fileName) => {
    const fileContents = fs.readFileSync(`kips/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      kip: matterResult.data.kip,
      status: matterResult.data.status,
      created: matterResult.data.created,
      slug: fileName.replace(".md", ""),
      snapshot: matterResult.data.snapshot,
      sponsor: matterResult.data.sponsor
    };
  });

  return posts;
};

export default getKipMetadata;
