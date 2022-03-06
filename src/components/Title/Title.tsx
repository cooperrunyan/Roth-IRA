import { ReactChild } from 'react';
import style from './Title.module.scss';

export function Title({ children: title }: { children: ReactChild }) {
  return (
    <div className={style.Header}>
      <h1 className={style.Title}>{title}</h1>
    </div>
  );
}
