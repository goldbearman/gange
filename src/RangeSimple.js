import {Range} from 'react-range';
import React, {useState} from 'react';

export default function RangeSimple(props) {
    const {value,step,min,max,onChange} = props;
    // const [value, setValue] = useState([15000]);

    console.log(props);
    console.log(value);
    return (
        <Range
            step={step}
            min={min}
            max={max}
            values={[value]}
            onChange={([el]) => onChange(el)}
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '6px',
                        width: '100%',
                        backgroundColor: '#ccc'
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({ props }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '42px',
                        width: '42px',
                        backgroundColor: '#999'
                    }}
                />
            )}
        />
    );
}