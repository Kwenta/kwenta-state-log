import Link from "next/link";
import { KipMetadata } from "./KipMetadata";

const PostPreview = (props: KipMetadata) => {
  return (
    <div className="m-4 border-2 border-dotted border-black p-2 pl-4 text-black">
      <Link href={`/kips/${props.slug}`}>
        <h2 className="font-mono hover:underline">
          KIP-{props.kip}: {props.title}
        </h2>
      </Link>
      <p className="font-thin">Status: {props.status}</p>
    </div>
  );
};

export default PostPreview;
