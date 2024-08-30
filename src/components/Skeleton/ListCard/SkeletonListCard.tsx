import React from "react";
import { ListCardProps } from "../../../types.ts";

const SkeletonListCard: React.FC<ListCardProps> = ({ children }) => {
  return (
    <ul
      className="grid gap-6 justify-evenly mt-6"
      style={{
        gridTemplateColumns: "repeat(auto-fill, 320px)",
      }}
    >
      {children}
    </ul>
  );
};

export default SkeletonListCard;
