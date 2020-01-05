import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

import IconButton from "../iconButton/iconButton";

interface Props {
  placeholder?: string;
}

const InputSearch: FC<Props> = props => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const { placeholder } = props;

  const handleOnChange = (value: string) => {
    setInputValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // enter
    if (event.keyCode === 13) {
      router.push(`/search?q=${inputValue}`);
    }
  };

  return (
    <div css={styles.root}>
      <span css={styles.icon}>
        <IconButton icon="search" size="sm" color={`${colors.gray}`} />
      </span>
      <input
        css={styles.input}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange(event.target.value)
        }
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(event)
        }
      />
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: ${colors.lightNavy};
  `,

  icon: css`
    position: relative;
    left: 5px;
  `,

  input: css`
    display: block;
    width: 100%;
    padding: 8px;
    border: none;
    font-size: 1.5rem;
    color: ${colors.white};
    background-color: transparent;

    &::placeholder {
      color: ${colors.gray};
    }
  `
};

export default InputSearch;
