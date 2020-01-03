import React, { FC, MouseEvent } from "react";
import { css } from "@emotion/core";

import BaseList from "../../atoms/baseList/baseList";
import SectionBox from "../../molecules/sectionBox/sectionBox";
import UserItem from "./userItem/userItem";

const userList: User[] = [
  {
    id: "user-1",
    name: "ユーザー1",
    image: "http://placehold.jp/100x100.png",
    isFollowed: false
  },
  {
    id: "user-2",
    name: "ユーザー2",
    image: "http://placehold.jp/100x100.png",
    isFollowed: false
  },
  {
    id: "user-3",
    name: "ユーザー3",
    image: "http://placehold.jp/100x100.png",
    isFollowed: true
  }
];

const RecommendUser: FC = () => {
  const handleClickItem = (id: string) => {
    console.log(id);
  };

  const handleClickMore = () => {
    console.log("more");
  };

  const handleClickFollow = (
    event: MouseEvent,
    id: string,
    isFollowed: boolean
  ) => {
    event.stopPropagation();
    console.log(`${isFollowed ? "unfollow" : "follow"}: ${id}`);
  };

  return (
    <SectionBox title="おすすめユーザー">
      <BaseList hasMore={true} clickMore={handleClickMore}>
        {userList.map((item: User) => (
          <UserItem
            key={item.id}
            item={item}
            clickItem={handleClickItem}
            clickFollow={handleClickFollow}
          />
        ))}
      </BaseList>
    </SectionBox>
  );
};

const styles = {
  root: css``
};

export default RecommendUser;
