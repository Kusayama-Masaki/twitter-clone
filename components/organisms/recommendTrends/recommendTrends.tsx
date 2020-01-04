import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/core";

import BaseList from "../../atoms/baseList/baseList";
import SectionBox from "../../molecules/sectionBox/sectionBox";
import TrendItem from "./trendItem/trendItem";

interface Props {
  trends: any[];
}

const SHOW_MAX_COUNT = 10;

const RecommendTrends: FC<Props> = ({ trends }) => {
  const [showCount, setShowCount] = useState(5);
  const router = useRouter();

  const handleClickItem = (name: string) => {
    console.log(name);
  };

  const handleClickMore = () => {
    console.log("more");
    if (showCount < SHOW_MAX_COUNT) {
      setShowCount(showCount + 5);
    } else {
      router.push("/search");
    }
  };

  return (
    <SectionBox title="おすすめトレンド" icon="cog">
      <BaseList hasMore={true} clickMore={handleClickMore}>
        {trends.slice(0, showCount).map((trend: any) => (
          <TrendItem
            key={trend.name}
            trend={trend}
            clickItem={handleClickItem}
          />
        ))}
      </BaseList>
    </SectionBox>
  );
};

const styles = {
  root: css``
};

export default RecommendTrends;
