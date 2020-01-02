import React, { FC } from "react";
import { css } from "@emotion/core";

import Trend from "../../organisms/trend/trend";

const Recommend: FC = () => (
  <div css={styles.root}>
    <Trend />
  </div>
);

const styles = {
  root: css``
};

export default Recommend;
