import style from './Calculator.module.scss';
import React, { useEffect, useState } from 'react';

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;
type InputEvent = React.KeyboardEvent<HTMLInputElement>;

export function Calculator() {
  const [age, setAge] = useState(0);
  const [initial, setInitial] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (age > 60) return setTotal(0);
    setTotal(initial * 1.1 ** (60 - age));
  });

  return (
    <main className={style.Calculator}>
      <h1>How much will your money grow in a Roth IRA?</h1>
      <form>
        <div>
          <p>Initial amount:</p> <input onInput={update(setInitial)} type="number" defaultValue="0" />
        </div>
        <div>
          <p>Current age:</p> <input onInput={update(setAge)} type="number" defaultValue="0" />
        </div>
        <p className={style.result}>${parseUSD(total)}</p>
      </form>
    </main>
  );
}

const update = (set: Setter<number>) => (e: InputEvent) => set(+(e.target as HTMLInputElement).value);
const parseUSD = (x: number) => new Intl.NumberFormat('en-US', { currency: 'usd' }).format(+x.toFixed(2));
