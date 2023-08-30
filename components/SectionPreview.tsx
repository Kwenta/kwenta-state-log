import Link from "next/link";
import { SectionMetadata } from "./SectionMetadata";

const SectionPreview = (props: SectionMetadata) => {
  return (
    <div className="m-4 text-black dark:text-white">
      <Link href={`/sections/${props.slug}`}>
        <h2 className="font-mono hover:underline">
          {props.slug}. {props.title}
        </h2>
      </Link>
    </div>
  );
};

export default SectionPreview;
