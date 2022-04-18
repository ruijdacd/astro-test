import { Component } from 'solid-js';

import { composeClasses } from '../utils/classes';

import * as styles from './header.css';

export const Header: Component = () => {
  return (
    <header class={composeClasses(styles.header())}>
      <a href="/">Logo</a>

      <nav>
        <ul class={composeClasses(styles.nav())}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/thoughts">Thoughts</a>
          </li>
          <li>
            <a href="/cooking">Cooking</a>
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
