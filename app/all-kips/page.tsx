import getKipMetadata from "../../components/getKipMetadata";
import KipPreview from "../../components/KipPreview";

const AllKips = () => {
  const sectionMetadata = getKipMetadata();
  const kipPreviews = sectionMetadata.map((post) => (
    <KipPreview key={post.slug} {...post} />
  ));

  return <div>{kipPreviews}</div>;
};

export default AllKips;
