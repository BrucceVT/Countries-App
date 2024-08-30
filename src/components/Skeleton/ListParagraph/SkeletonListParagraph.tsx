import React from "react";
import { ISkeletonParagraph } from "../../../types.ts";
import SkeletonParagraph from "../Paragraph/SkeletonParagraph.tsx";

const SkeletonListParagraph: React.FC<ISkeletonParagraph> = ({
  skeletonItems,
}) => {
  return (
    <>
      {skeletonItems.map(({ skeleton, width }) => (
        <SkeletonParagraph
          key={skeleton}
          skeletonClassName={`${width || ""}`}
        />
      ))}
    </>
  );
};

export default SkeletonListParagraph;
