import React, { FC } from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { mq } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";

export interface Props {
  icon: IconProp;
  size?: SizeProp;
}

const IconButton: FC<Props> = ({ icon, size, children }) => (
  <div css={styles.root}>
    <span css={styles.icon} className="icon">
      <FontAwesomeIcon icon={icon} size={size} />
    </span>
    {children && <span css={styles.text}>{children}</span>}
  </div>
);

const styles = {
  root: css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      > .icon {
        background-color: ${colors.lightNavy};
      }
    }
  `,

  icon: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    text-align: center;
  `,

  text: css`
    margin-left: 3px;
  `
};

export default IconButton;
