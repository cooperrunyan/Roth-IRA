import { Title } from '../Title';
import style from './Banner.module.scss';

export function Banner({ children: { title } }: { children: { title: string } }) {
  return (
    <div className={style.Header}>
      <Title>{title}</Title>
    </div>
  );
}
