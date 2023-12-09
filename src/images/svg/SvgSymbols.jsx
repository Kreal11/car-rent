import React from 'react';

export const SvgSymbols = () => {
  return (
    <div>
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <symbol id="icon-chevron-down" viewBox="0 0 32 32">
            <path
              fill="none"
              stroke="#fff"
              style={{ stroke: 'var(--color1, #fff)' }}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3.2"
              d="m8 12 8 8 8-8"
            />
          </symbol>
          <symbol id="icon-normal" viewBox="0 0 32 32">
            <path
              fill="none"
              stroke="#fff"
              style={{ stroke: 'var(--color1, #fff)' }}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.667"
              d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"
            />
          </symbol>
          <symbol id="icon-active" viewBox="0 0 32 32">
            <path
              fill="#3470ff"
              style={{
                fill: 'var(--color2, #3470ff)',
                stroke: 'var(--color2, #3470ff)',
              }}
              stroke="#3470ff"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.778"
              d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"
            />
          </symbol>
          <symbol id="icon-x" viewBox="0 0 34 34">
            <path
              fill="none"
              stroke="black"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              d="M24 8 8 24M8 8l16 16"
            />
          </symbol>
        </defs>
      </svg>
    </div>
  );
};
