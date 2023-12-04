import './App.css';

import RangeSimple from "./RangeSimple";
import { useState } from "react";
import SuperSimple from "./SuperSimple";


function App() {

  //Проценты
  // const percent = props.percent || 13.5;  Eslint мозг делает
  const percent = 13.5;

  const sumData = {
    step: 1000,
    min: 15000,
    max: 500000
  }

  const termData = {
    step: 6,
    min: 3,
    max: 9
  }

  const [sum, setSum] = useState(15000);
  const [term, setTerm] = useState(3);

  //Расчеты
  const amountEnd = sum * (1 + percent / 100)
  const income = sum * percent / 100

  console.log(sum);
  console.log(typeof sum);

  function checkInput(event) {
    console.log(event.target.value);
    console.log(typeof event.target.value);
    console.log(Number(event.target.value.replace(/\s/g, "")));
    if (isNaN(Number(event.target.value.replace(/\s/g, "")))) {
      console.log('не число')
      return sum;
    } else Number(event.target.value.replace(/\s/g, ""))
  }

  function checkInput2(event) {
    console.log(event.target.value)
    // return event.target.value.replace(/[^0-9]/, '');
    // event.target.value = event.target.value.replace(/[^0-9 \,]/, '');
    event.target.value =event.target.value.replace(/\s/g, "")
    console.log(event.target.value)
    event.target.value = event.target.value.replace(/[^0-9]/, '');
    console.log(event.target.value)
    console.log(typeof event.target.value)
    if(+event.target.value>300000000){
      event.target.value='300000000'
    }
  }

  // function maxNumber(event){
  //   +(event.target.value.replace(/\s/g, ""))
  // }


  return (
    <div className="App">
      Hello World
      <input type="text" maxLength={11} autofocus
             value={sum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}
             onInput={event =>checkInput2(event)}
             onChange={(event) => setSum(+(event.target.value.replace(/\s/g, "")))}/>

      <input className="form-control  text-center"
             onInput={event =>checkInput2(event)}
             type="text" id="telefonlar" name="telefonlar" required
      />

      {/*<input type="text" required*/}
      {/*       value={sum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}*/}
      {/*       onChange={(event) => setSum(checkInput(event))}/>*/}

      <RangeSimple value={sum} onChange={(val) => setSum(val)} step={sumData.step} min={sumData.min} max={sumData.max}/>
      <div style={{ height: "100px" }}>промежуток</div>
      <RangeSimple value={term} onChange={(val) => setTerm(val)} step={termData.step} min={termData.min}
                   max={termData.max}/>
      <input type={"text"} value={term} onChange={(event) => setTerm(event.target.value)}/>
      <div style={{ height: "100px" }}>промежуток</div>
      <div>Сумма в конце срока: {amountEnd.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</div>
      <div>Доход: {income.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</div>
      <div>Ставка %годовых: {percent}</div>
    </div>
  );
}

export default App;
