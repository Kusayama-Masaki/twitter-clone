import React, { FC } from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserIcon from "../../atoms/userIcon/userIcon";
import PageNavigation from "../../molecules/pageNavigation/pageNavigation";

// TODO: APIからユーザーデータ流し込み
const user = {
  name: "test",
  image: "http://placehold.jp/100x100.png"
};

const pageNavigation: PageNavigationItem[] = [
  {
    id: "logo",
    icon: <FontAwesomeIcon icon={["fab", "twitter"]} />
  },
  {
    id: "home",
    text: "ホーム",
    icon: <FontAwesomeIcon icon="home" />
  },
  {
    id: "hashtag",
    text: "話題を検索",
    icon: <FontAwesomeIcon icon="hashtag" />
  },
  {
    id: "notification",
    text: "通知",
    icon: <FontAwesomeIcon icon="bell" />
  },
  {
    id: "message",
    text: "メッセージ",
    icon: <FontAwesomeIcon icon="envelope" />
  },
  {
    id: "bookmark",
    text: "ブックマーク",
    icon: <FontAwesomeIcon icon="bookmark" />
  },
  {
    id: "list",
    text: "リスト",
    icon: <FontAwesomeIcon icon="list-alt" />
  },
  {
    id: "profile",
    text: "プロフィール",
    icon: <UserIcon user={user} size="xs" />
  },
  {
    id: "more",
    text: "もっと見る",
    icon: <FontAwesomeIcon icon="ellipsis-h" />
  }
];

const Navigation: FC = () => (
  <nav css={styles.root}>
    <PageNavigation items={pageNavigation} />
  </nav>
);

const styles = {
  root: css`
    display: flex;
    justify-content: center;
    width: 100%;
  `
};

export default Navigation;
