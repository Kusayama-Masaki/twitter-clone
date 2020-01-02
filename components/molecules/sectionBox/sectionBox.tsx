import React, { FC } from "react";
import { css } from "@emotion/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { colors } from "../../assets/styles/variables";

import SectionHeader from "../sectionHeader/sectionHeader";

interface Props {
  title: string;
  icon: IconProp;
}

const SectionBox: FC<Props> = props => {
  const { title, icon, children } = props;

  return (
    <section css={styles.root}>
      <SectionHeader title={title} icon={icon} tag="h2" size="sm" />
      <div>{children}</div>
    </section>
  );
};

const styles = {
  root: css`
    margin-top: 15px;
    border-radius: 10px;
    border: 1px solid ${colors.lightBlack};
  `
};

export default SectionBox;
