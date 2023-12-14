import './styles.css';
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import * as PropTypes from "prop-types";
import { ReactComponent as NotActiveIcon } from '../static/images/icon/form/icon-edit.svg'
import { ReactComponent as ActiveIcon } from '../static/images/icon/form/icon-edit-active.svg'


export const CustomRange = () => {

  const min = 15000;
  const max = 500000;


  const input1 = useRef(null);

  const defaultValue = 100000;

  const [type, setType] = useState("text");

  const [value, setValue] = useState(defaultValue);
  const [isActiveIcon, setIsActiveIcon] = useState(true);
  console.log(value);
  console.log(isActiveIcon);

  const onFocus = () => {
    console.log(isActiveIcon)
  }
  const onBlur = () => setIsActiveIcon(true)

  const onInputChange = useCallback((event) => {
    console.log(typeof event.target.value)
    if (event.target.value > max) {
      setValue(max)
    } else setValue(event.target.value);
  }, []);

  const handleClick1 = () => {
    setIsActiveIcon(false);
    setType("number");
    input1.current.focus();

  }

  //Значение на выходе
  let finalValue = (type)=>{
    console.log('finalValue')
    if(type==="text") return  value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    if(type==="number") return  value
  }

  console.log(value);
  console.log(typeof value);

  return (

    <div className="RangeContainer">
      <div className="RangeContainer__title">Сумма при открытии счета</div>
      <div className="RangeContainer__value">
        <input type={type} ref={input1}
          // onInput={checkInputNumber}
               readOnly={isActiveIcon}
               onFocus={onFocus} onBlur={onBlur}
               min={min} max={max}
               value={finalValue(type)} onChange={onInputChange}/>
        {isActiveIcon &&
          <div disabled={!isActiveIcon} onClick={handleClick1}>

            <ActiveIcon/>

          </div>}
      </div>
      <div className="RangeContainer__range">
        <input type="range" value={value === '' ? 15000 : value} onChange={event => setValue(event.target.value)}
               step={1000} min={min} max={max}/>
        <div className="RangeContainer__minMaxValues">
          <div className="value_left">15000</div>
          <div className="value_right">500000</div>

        </div>
      </div>
    </div>
  );
}