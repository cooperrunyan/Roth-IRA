import style from './Container.module.scss';
import type { ReactChild } from 'react';

export function Container({ children }: { children: ReactChild }) {
  return <div className={style.Container}>{children}</div>;
}
