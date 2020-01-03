import React, { FC } from "react";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

import SectionHeader from "../../molecules/sectionHeader/sectionHeader";
import Timeline from "../../organisms/timeline/timeline";

interface Props {
  tweets: any[];
}

const Home: FC<Props> = ({ tweets }) => (
  <section css={styles.root}>
    <SectionHeader title="ホーム" icon="star-of-life" isSticky={true} />
    <Timeline tweets={tweets} />
  </section>
);

const styles = {
  root: css`
    height: 100%;
    border-right: 1px solid ${colors.lightBlack};
    border-left: 1px solid ${colors.lightBlack};
  `
};

export default Home;
