import React, { FC } from "react";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

interface Props {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const InputTextarea: FC<Props> = ({ value, placeholder, onChange }) => (
  <textarea
    css={styles.root}
    placeholder={placeholder}
    defaultValue={value}
    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
      onChange(event.target.value)
    }
  />
);

const styles = {
  root: css`
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px;
    border: none;
    font-size: 1.9rem;
    color: ${colors.white};
    background-color: transparent;
    resize: none;
  `
};

export default InputTextarea;
