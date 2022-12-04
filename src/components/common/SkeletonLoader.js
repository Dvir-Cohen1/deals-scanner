import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import {styles} from '../../assets/css/style'

const skeletonCard = [
  {
    component: (
      <div className="flex gap-5 flex-col flex-wrap">
        <Skeleton
          variant="circular"
          sx={{ bgcolor: styles.skeletonsBackground }}
          width={40}
          height={40}
        />
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: styles.skeletonsBackground }}
          width={210}
          height={60}
        />
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: styles.skeletonsBackground }}
          width={210}
          height={60}
        />
      </div>
    ),
  },
];

function generateSkeletonCards(number) {
  const SkeletonCards = [];
  if (!number) return
  for (let index = 0; index < number; index++) {
    SkeletonCards.push(...skeletonCard);
  }
  return SkeletonCards;
}

const SkeletonLoader = () => {
  const SkeletonCards = generateSkeletonCards(10);
  return (
    <Stack spacing={2}>
      <Skeleton variant="text" sx={{ fontSize: "1rem", bgcolor: "#0d121f", marginTop:'10px' }} />
      <div className="flex flex-wrap justify-between flex-row gap-7">
        {SkeletonCards.map((item, indexId) => {
          return <span key={indexId}>{item.component}</span>;
        })}
      </div>
    </Stack>
  );
};

export default SkeletonLoader;
