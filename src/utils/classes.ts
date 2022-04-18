import clsx from 'clsx';

import type { CssComponent } from '@stitches/core/types/styled-component';

type Class =
  | string
  | CssComponent
  | Record<string, boolean>
  | (string | CssComponent)[];

export function composeClasses(...args: Class[]) {
  const normalizedArgs = [...args].map((arg) => {
    if (typeof arg === 'object' && !Array.isArray(arg) && 'className' in arg) {
      return arg.className;
    }

    return arg;
  });

  return clsx(...normalizedArgs);
}
