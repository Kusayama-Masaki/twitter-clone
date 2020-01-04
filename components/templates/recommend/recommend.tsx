import React, { FC } from "react";
import { css } from "@emotion/core";

import RecommendTrends from "../../organisms/recommendTrends/recommendTrends";
import RecommendUser from "../../organisms/recommendUser/recommendUser";

interface Props {
  trends: any[];
}

const Recommend: FC<Props> = ({ trends }) => (
  <div css={styles.root}>
    <RecommendTrends trends={trends} />
    <RecommendUser />
  </div>
);

const styles = {
  root: css`
    margin-top: 15px;
  `
};

export default Recommend;
