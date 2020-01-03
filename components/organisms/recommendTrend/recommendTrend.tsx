import React, { FC } from "react";
import { css } from "@emotion/core";

import BaseList from "../../atoms/baseList/baseList";
import SectionBox from "../../molecules/sectionBox/sectionBox";
import TrendItem from "./trendItem/trendItem";

const trendList: TrendItem[] = [
  {
    name: "トレンド1",
    count: 1000
  },
  {
    name: "トレンド2",
    count: 100
  },
  {
    name: "トレンド3",
    count: 10
  }
];

const RecommendTrend: FC = () => {
  const handleClickItem = (name: string) => {
    console.log(name);
  };

  const handleClickMore = () => {
    console.log("more");
  };

  return (
    <SectionBox title="おすすめトレンド" icon="cog">
      <BaseList hasMore={true} clickMore={handleClickMore}>
        {trendList.map((item: TrendItem, i: number) => (
          <TrendItem key={i} item={item} clickItem={handleClickItem} />
        ))}
      </BaseList>
    </SectionBox>
  );
};

const styles = {
  root: css``
};

export default RecommendTrend;
