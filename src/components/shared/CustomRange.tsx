import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { StyledRangeLine, StyledRangePointer } from 'src/theme/CommonStyle';

type Option = {
  step: number;
  min: number;
  max: number;
};

interface CustomRangeProps {
  value: number[];
  onChangeValue: React.Dispatch<React.SetStateAction<number[]>>;
  option: Option;
}

const CustomRange = ({ value, onChangeValue, option }: CustomRangeProps) => (
  <Range
    values={value}
    step={option.step}
    min={option.min}
    max={option.max}
    onChange={(data) => onChangeValue(data)}
    renderTrack={({ props, children }) => (
      <StyledRangeLine
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={{
          ...props.style,
        }}
      >
        <div
          ref={props.ref}
          style={{
            height: '4px',
            width: '100%',
            borderRadius: '2px',
            background: getTrackBackground({
              values: value,
              colors: ['#f5f5f5', '#3D00FC', '#f5f5f5'],
              min: option.min,
              max: option.max,
            }),
            alignSelf: 'center',
          }}
        >
          {children}
        </div>
      </StyledRangeLine>
    )}
    renderThumb={({ props }) => (
      <StyledRangePointer
        {...props}
        style={{
          ...props.style,
        }}
      >
        <div />
      </StyledRangePointer>
    )}
  />
);

export default CustomRange;
