import { Component } from "solid-js";

import * as styles from "./header.css";

export const Header: Component = () => {
  return (
    <header class={styles.root}>
      <a href="/">Logo</a>

      <nav>
        <ul class={styles.nav}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/thoughts">Thoughts</a>
          </li>
          <li>
            <a href="/cookings">Cookings</a>
          </li>
          <li>
            <a href="/eco-life">Eco life</a>
          </li>
          <li>
            <a href="/trips">Trips</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
