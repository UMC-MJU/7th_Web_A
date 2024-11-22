import React from 'react'
import Skeleton from './skeleton'

const CardListSkeleton = ({number}) => {
  return (
    new Array(number).fill(0).map((_,idx)=><Skeleton key={idx}/>)
  )
}

export default CardListSkeleton
