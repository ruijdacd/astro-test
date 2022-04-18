import { Component, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { composeClasses } from '../utils/classes';

import * as styles from './heading.css';

export type HeadingProps = {
  as: keyof JSX.IntrinsicElements;
};

export const Heading: Component = ({ children, ...props }) => {
  return (
    <Dynamic
      component={props.as}
      class={composeClasses(
        styles.heading({
          size: 'large',
        })
      )}
    >
      {children}
    </Dynamic>
  );
};
