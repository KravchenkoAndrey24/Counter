import React, { useState } from 'react';
import s from './App.module.css'
import Counter from './components/counter';
import Settings from './components/Settings/Settings';

function App() {


  let [count, setCount] = useState<number>(0);

  let [values, setValues] = useState<string[]>(['0', '5']);

  let [error, setError] = useState<string>('');

  let [textValues, setTextValues] = useState<string>('');


  const onClickInc = () => {
    if (count < +values[1]) {
      setCount(count + 1)
    }
  }

  const onClickReset = () => {
    setCount(+values[0])
  }



  const onClickSet = (values: string[]) => {
    setValues(values)
    setCount(+values[0])
    setTextValues('')
  }


  return (
    <div className={s.App}>
      <Settings values={values} setValues={onClickSet} error={error} setError={setError} textValues={textValues} setTextValues={setTextValues} />

      <Counter count={count} maxValue={values[1]} minValue={values[0]} textError={error} textValues={textValues} onClickInc={onClickInc} onClickReset={onClickReset} />
    </div>
  )
}

export default App;
