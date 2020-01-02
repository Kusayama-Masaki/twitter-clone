import React, { FC, ReactElement } from "react";
import { css } from "@emotion/core";
import { mq } from "../../assets/styles/mixins";
import { contentWidth } from "../../assets/styles/variables";

import Navigation from "../../organisms/navigation/navigation";

interface Props {
  mainElement: ReactElement;
  subElement?: ReactElement;
}

const BaseLayout: FC<Props> = ({ mainElement, subElement }) => (
  <div css={styles.root}>
    <aside css={styles.nav}>
      <Navigation />
    </aside>
    <main css={styles.main}>{mainElement}</main>
    {subElement && <aside css={styles.sub}>{subElement}</aside>}
  </div>
);

const styles = {
  root: css`
    display: flex;
    width: 100%;
    max-width: ${contentWidth.sm}px;
    min-height: 100vh;
    margin: 0 auto;
    ${[mq("md")]} {
      max-width: ${contentWidth.md}px;
    }
    ${[mq("lg")]} {
      max-width: ${contentWidth.xl}px;
    }
  `,

  nav: css`
    display: flex;
    min-width: 68px;
    ${[mq("xl")]} {
      min-width: 275px;
    }
  `,

  main: css`
    flex-grow: 1;
  `,

  sub: css`
    display: none;
    min-width: 350px;
    margin-left: 25px;
    ${[mq("md")]} {
      display: block;
    }
  `
};

export default BaseLayout;
