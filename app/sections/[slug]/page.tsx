import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getSectionMetadata from "../../../components/getSectionMetadata";

const getSectionContent = (slug: string) => {
  const folder = "sections/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getSectionMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Section = (props: any) => {
  const slug = props.params.slug;
  const post = getSectionContent(slug);
  return (
    <article className="prose dark:prose-invert m-4 max-w-none font-mono prose-h1:mb-1">
      <Markdown>{post.content}</Markdown>
    </article>
  );
};

export default Section;
