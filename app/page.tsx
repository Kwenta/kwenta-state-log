import getSectionMetadata from "../components/getSectionMetadata";
import SectionPreview from "../components/SectionPreview";

const StateLog = () => {
  const sectionMetadata = getSectionMetadata();
  const sectionList = sectionMetadata.map((post) => (
    <SectionPreview key={post.slug} {...post} />
  ));

  return <div>{sectionList}</div>;
};

export default StateLog;
