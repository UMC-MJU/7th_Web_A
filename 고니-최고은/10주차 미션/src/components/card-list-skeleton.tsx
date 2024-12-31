import React from "react";
import CardSkeleton from "./card-skeleton";

// Props 타입 정의
interface CardListSkeletonProps {
  number: number; // number prop의 타입 정의
}

// CardListSkeleton 컴포넌트 정의
export const CardListSkeleton: React.FC<CardListSkeletonProps> = ({
  number,
}) => {
  return (
    <>
      {new Array(number).fill(0).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </>
  );
};

export default CardListSkeleton;
