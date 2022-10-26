import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as styles from "./heading.css";

export type HeadingProps = {
  as: keyof JSX.IntrinsicElements;
  size: keyof typeof styles.size;
};

export const Heading: Component<HeadingProps> = (props) => {
  return (
    <Dynamic
      component={props.as}
      class={[styles.root, styles.size[props.size]].join(" ")}
    >
      {props.children}
    </Dynamic>
  );
};
