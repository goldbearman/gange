import './App.css';

import RangeSimple from "./RangeSimple";
import { useCallback, useState } from "react";
import SuperSimple from "./SuperSimple";
import { SliderEditInput } from "./SliderEditInput/SliderEditInput";
import { CustomRange } from "./CustomRange";


function App() {

  const percentages = {
    3: 15,
    9: 13.5,
  }

  const [sum, setSum] = useState(100000);
  const [term, setTerm] = useState(3);

  //Расчеты
  const amountEnd = Math.round(sum * (1 + percentages[term] / 100))
  const income = sum * percentages[term] / 100

  const onInputChangeSum = useCallback((event) => {
    setSum(event.target.value)
  }, []);

  const onInputChangeTerm = useCallback((event) => {
    setTerm(event.target.value)
  }, []);


  return (
    <div className="App">
      Калькулятор
      <CustomRange onChange={onInputChangeSum} value={sum}
                   min={15000} max={500000} step={1000}
      />
      <CustomRange onChange={onInputChangeTerm} value={term} min={3} max={9} step={6} defaultValue={3}
                   onlyRead={false}/>

      <div>Сумма в конце срока: {amountEnd.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</div>
      <div>Доход: {income.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</div>
      <div>Ставка %годовых: {percentages[term]}</div>
    </div>
  );
}

export default App;
