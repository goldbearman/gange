import {Range} from 'react-range';
import React, {useState} from 'react';

export default function SuperSimple() {
    const [value, setValue] = useState([0]);

    return (
        <Range
            values={value}
            onChange={values => setValue(values)}
            step={1}
            min={0}
            max={100}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '100%'
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: '#CCCCCC',
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '42px',
                        width: '42px',
                        borderRadius: '4px',
                        backgroundColor: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA'
                    }}
                >
                    <div
                        style={{
                            height: '16px',
                            width: '5px',
                            backgroundColor: isDragged ? '#548BF4' : '#CCC'
                        }}
                    />
                </div>
            )}
        />
    )
}