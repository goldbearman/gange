import './styles.css';
import {  useRef, useState } from "react";
import { ReactComponent as ActiveIcon } from '../static/images/icon/form/icon-edit-active.svg'


export const CustomRange = ({onChange,value,min,max,step,onlyRead=true}) => {

  const input1 = useRef(null);

  const [type, setType] = useState("text");
  const [isActiveIcon, setIsActiveIcon] = useState(true);

  const onFocus = () => {
    console.log(isActiveIcon)
  }
  const onBlur = () => {
    setIsActiveIcon(true)
    setType("text");
  }

  const handleClick1 = () => {
    setIsActiveIcon(false);
    setType("number");
    input1.current.focus();
  }

  //Значение на выходе
  let finalValue = (type) => {
    if (type === "text") return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    if (type === "number") return value
  }

  console.log(type);

  return (
    <div className="RangeContainer">
      <div className="RangeContainer__title">Сумма при открытии счета</div>
      <div className="RangeContainer__value">
        <input type={type} ref={input1}
               readOnly={isActiveIcon}
               onFocus={onFocus} onBlur={onBlur}
               min={min} max={max}
               value={finalValue(type)} onChange={onChange}/>
        {onlyRead && isActiveIcon &&
          <div disabled={!isActiveIcon} onClick={handleClick1}>

            <ActiveIcon/>

          </div>}
      </div>
      <div className="RangeContainer__range">
        <input type="range" value={value === '' ? 15000 : value} onChange={event =>onChange(event)}
               // onChange={event => setValue(event.target.value)}
               step={step} min={min} max={max}/>
        <div className="RangeContainer__minMaxValues">
          <div className="value_left">{min}</div>
          <div className="value_right">{max}</div>

        </div>
      </div>
    </div>
  );
}