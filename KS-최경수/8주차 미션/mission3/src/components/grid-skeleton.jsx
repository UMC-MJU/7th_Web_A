import * as S from "../styles/grid-skeleton.style";

const GridSkeleton = () => {
  return (
    <S.GridSkeletonContainer>
      <S.GridMain/>
      <S.TextWrapper>
        <S.TitleBox/>
        <S.Description/>
      </S.TextWrapper>
    </S.GridSkeletonContainer>
  );
};

export default GridSkeleton; 