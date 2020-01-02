import React, { FC, ReactElement } from "react";
import { css } from "@emotion/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { colors } from "../../assets/styles/variables";

import IconButton from "../../atoms/iconButton/iconButton";

/**
 * TODO: 動的tag生成の脱any
 */

export interface Props {
  title: string;
  icon?: IconProp;
  tag?: string;
  size?: string;
}

const SectionHeader: FC<Props> = props => {
  const { title, icon, tag, size } = props;
  const TagName: any = tag ? tag : "h1";

  return (
    <header css={styles.root} className={size ? size : ""}>
      <TagName css={styles.title}>{title}</TagName>
      {icon && <IconButton icon={icon} size="lg" />}
    </header>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    min-height: 53px;
    padding: 0 15px;
    border-bottom: 1px solid ${colors.lightBlack};

    &.sm {
      min-height: 45px;
    }
  `,

  title: css`
    flex-grow: 1;
    font-size: 1.9rem;
    font-weight: bold;
  `
};

export default SectionHeader;
