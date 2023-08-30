import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getKipMetadata from "../../../components/getKipMetadata";

const getKipContent = (slug: string) => {
  const folder = "kips/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getKipMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const KipDraft = (props: any) => {
  const slug = props.params.slug;
  const post = getKipContent(slug);
  return (
    <div>
      <meta property="og:title" content={`KIP-${post.data.kip}: ${post.data.title}`}/>
			<meta property="og:description" content={post.content.split("## Abstract")[0].split("##")[1]} />
      <article className="prose dark:prose-invert max-w-none font-mono prose-code:text-yellow-800 prose-pre:bg-gray-100 dark:prose-code:text-yellow-800 dark:prose-pre:bg-gray-900">
        <h1 className="pt-4">
          KIP-{post.data.kip}: {post.data.title}
        </h1>
        <Markdown>
          {post.content}
        </Markdown>
      </article>
    </div>
  );
};

export default KipDraft;
