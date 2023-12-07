import './styles.css';
import { useState } from "react";

export const CustomRange = () => {

  const defaultValue = 100000;

  const [value, setValue] = useState(defaultValue);
  console.log(value);

  return (
    <div className="RangeContainer">
      <h5 className="RangeContainer__title">Сумма при открытии счета</h5>
      <div className="RangeContainer__value">
        <input type="text" value={value}/>
      </div>
      <div className="RangeContainer__range">
        <input type="range" value={value} onChange={event=>setValue(event.target.value)}
               step={1000} min={15000} max={500000}/>
        <div className="RangeContainer__MinMaxValues">
          <div className="value left">15000</div>
          <div className="value right">500000</div>
        </div>
      </div>
    </div>
  )
}