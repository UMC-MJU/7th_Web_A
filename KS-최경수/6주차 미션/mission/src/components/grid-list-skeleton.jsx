import React from 'react'
import GridSkeleton from './grid-skeleton'

const GridListSkeleton = ({number}) => {
  return (
    new Array(number).fill(0).map((_, idx) => <GridSkeleton/>)
  );
}

export default GridListSkeleton
