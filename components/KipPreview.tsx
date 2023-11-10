import Link from "next/link";
import { KipMetadata } from "./KipMetadata";

const PostPreview = (props: KipMetadata) => {
  return (
    <div className="m-4 border-2 border-dotted border-black dark:border-white p-2 pl-4 text-black dark:text-white">
      <Link href={`/kips/${props.slug}`}>
        <h2 className="font-mono hover:underline">
          KIP-{props.kip}: {props.title}
        </h2>
      </Link>
      <div className="font-thin">
        Status: {props.status}
        {props.snapshot && (
          <p>
            Vote: <Link href={`${props.snapshot}`} className="hover:underline">Snapshot</Link>
          </p>
        )}
      </div>
      <div className="font-thin">
      {props.sponsor && (
          <p>
            Sponsor: {props.sponsor}
          </p>
      )}
      </div>
    </div>
  );
};

export default PostPreview;
