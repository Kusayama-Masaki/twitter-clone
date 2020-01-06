import React, { FC } from "react";
import { css } from "@emotion/core";
import { mq } from "../../assets//styles/mixins";
import { colors } from "../../assets/styles/variables";

import UserIcon from "../../atoms/userIcon/userIcon";
import TweetFormInput from "./tweetFormInput/tweetFormInput";

interface Props {
  user: any;
}

const TweetForm: FC<Props> = ({ user }) => {
  const handleChangeInput = (value: string) => {
    console.log(value);
  };

  return (
    <div css={styles.root}>
      <div css={styles.user}>
        <UserIcon user={user} />
      </div>
      <div css={styles.inner}>
        <TweetFormInput onChange={handleChangeInput} />
      </div>
    </div>
  );
};

const styles = {
  root: css`
    display: none;
    margin-bottom: 10px;
    padding: 10px 15px;
    background-color: ${colors.navy};
    ${[mq("md")]} {
      display: flex;
    }
  `,

  user: css`
    min-width: 39px;
    min-height: 39px;
    margin-right: 10px;

    ${[mq("xs")]} {
      min-width: 46px;
      min-height: 46px;
    }
  `,

  inner: css`
    flex-grow: 1;
  `
};

export default TweetForm;
