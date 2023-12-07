import React, { useState, useEffect, useRef } from 'react';

import EditIcon from '../static/images/icon/form/icon-edit.svg';
import EditActiveIcon from '../static/images/icon/form/icon-edit-active.svg';


import './styles.css';


export const SliderEditInput = (props) => {
  const { value, renderValue, inputSuffix, onInputChange, onFinalChange, ariaLabel } = props;
  console.log(value, renderValue, inputSuffix, onInputChange, onFinalChange, ariaLabel);
  const inputRef = useRef();

  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inputValue, setValue] = useState(value);

  useEffect(() => {
    if (!active) setValue(value);
  }, [active, value]);

  const onOver = () => setHovered(true);
  const onLeave = () => setHovered(false);
  const onFocus = () => {
    setActive(true);
    inputRef.current.value = value;
    inputRef.current.focus();
  };
  const onBlur = () => {
    setActive(false);
    if (onFinalChange) onFinalChange([inputValue]);
  };

  const onClick = () => {
    if (!active) onFocus();
  };

  const onChange = (value) => {
    const val = (value.match(/\d+/g) || []).join('');
    setValue(val);
    onInputChange(+val);
  };

  return (
    <div
      className="SliderEditInput"
      onClick={onClick}
      onMouseOver={onOver}
      onMouseLeave={onLeave}
    >
      <input
        readOnly={true}
        className="SliderEditInput__input"
        ref={inputRef}
        type="text"
        value={inputValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={e => onChange(e.target.value)}
        aria-label={ariaLabel}
      />
      {!active && (
        <div className="SliderEditInput__text"
             onClick={onClick}
             onMouseOver={onOver}
             onMouseLeave={onLeave}
        >
          <span>{renderValue}</span>
          {inputSuffix && <span className="SliderEditInput__text-sufix">{inputSuffix}</span>}
          <span className="SliderEditInput__text-icon">
           {/*{hovered ? <EditActiveIcon/> : <EditIcon/>}*/}
         </span>
        </div>)}
    </div>
  );
};


