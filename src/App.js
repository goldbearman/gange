
import './App.css';

import RangeSimple from "./RangeSimple";
import {useState} from "react";
import SuperSimple from "./SuperSimple";


function App() {

    //Проценты
    // const percent = props.percent || 13.5;  Eslint мозг делает
    const percent = 13.5;

    const sumData = {
        step:1000,
        min:15000,
        max:500000
    }

    const termData = {
        step:6,
        min:3,
        max:9
    }

    const [sum, setSum] = useState(15000);
    const [term, setTerm] = useState(3);

    //Расчеты
    const amountEnd = sum*(1+percent/100)
    const income = sum*percent/100

    return (
        <div className="App">
            Hello World
            <input type="text" value={sum} onChange={(event)=>setSum(event.target.value)}/>
            <RangeSimple value={sum} onChange={(val)=>setSum(val)} step={sumData.step} min={sumData.min} max={sumData.max}/>
            <div style={{height: "100px"}}>промежуток</div>
            <RangeSimple value={term} onChange={(val)=>setTerm(val)} step={termData.step} min={termData.min} max={termData.max}/>
            <input type={"text"} value={term} onChange={(event)=>setTerm(event.target.value)}/>
            <div style={{height: "100px"}}>промежуток</div>
            <div>Сумма в конце срока: {amountEnd}</div>
            <div>Доход: {income}</div>
            <div>Ставка %годовых: {percent}</div>


        </div>
    );
}

export default App;
