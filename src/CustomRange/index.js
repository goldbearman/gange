import './styles.css';
import { useCallback, useLayoutEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { ReactComponent as YourSvg } from '../static/images/icon/form/icon-edit.svg'


export const CustomRange = () => {

  const defaultValue = 100000;

  const [value, setValue] = useState(defaultValue);
  console.log(value);

  const onInputChange = useCallback((event) => {
    console.log(typeof event.target.value)
     setValue(event.target.value);
  }, []);

  return (

    <div className="RangeContainer">
      <div className="RangeContainer__title">Сумма при открытии счета</div>
      <div className="RangeContainer__value">
        <input type="number" value={value} onChange={onInputChange}/>
        <div className="iconValue">
          <YourSvg/>
        </div>
      </div>
      <div className="RangeContainer__range">
        <input type="range" value={value===''?15000:value} onChange={event => setValue(event.target.value)}
               step={1000} min={15000} max={500000}/>
        <div className="RangeContainer__minMaxValues">
          <div className="value_left">15000</div>
          <div className="value_right">500000</div>

        </div>
      </div>
    </div>
  )
}