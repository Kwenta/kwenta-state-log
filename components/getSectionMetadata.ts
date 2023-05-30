import fs from "fs";
import matter from "gray-matter";
import { SectionMetadata } from "./SectionMetadata";

const getSectionMetadata = (): SectionMetadata[] => {
  const folder = "sections/";
  const files = fs.readdirSync(folder);
  const markdownSection = files.filter((file) => file.endsWith(".md"));

  const posts = markdownSection.map((fileName) => {
    const fileContents = fs.readFileSync(`sections/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getSectionMetadata;
