import React, { FC } from "react";
import { css } from "@emotion/core";

import InputTextarea from "../../../atoms/inputTextarea/inputTextarea";

interface Props {
  value?: string;
  onChange: (value: string) => void;
}

const TweetFormInput: FC<Props> = ({ value, onChange }) => (
  <div css={styles.root}>
    <InputTextarea
      value={value}
      placeholder="いまどうしてる？"
      onChange={onChange}
    />
  </div>
);

const styles = {
  root: css`
    height: 100%;
  `
};

export default TweetFormInput;
