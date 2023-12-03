
import './App.css';

import RangeSimple from "./RangeSimple";
import {useState} from "react";
import SuperSimple from "./SuperSimple";


function App() {

    const sumData = {
        step:1000,
        min:15000,
        max:300000000
    }

    const termData = {
        step:1,
        min:1,
        max:36
    }

    const [sum, setSum] = useState(15000);
    const [term, setTerm] = useState(1);

    console.log(sum);

    return (
        <div className="App">
            Hello World
            <RangeSimple value={sum} onChange={(val)=>setSum(val)} step={sumData.step} min={sumData.min} max={sumData.max}/>
            {/*<RangeSimple value={term} onChange={(event)=>setTerm(event.target.value)} step={termData.step} min={termData.min} max={termData.max}/>*/}
            {/*<input type={"range"} value={term} onChange={(event)=>setTerm(event.target.value)} step={termData.step} min={termData.min} max={termData.max}/>*/}
            {/*<input type={"text"} value={term} onChange={(event)=>setTerm(event.target.value)}/>*/}
            {/*<SuperSimple/>*/}
        </div>
    );
}

export default App;
