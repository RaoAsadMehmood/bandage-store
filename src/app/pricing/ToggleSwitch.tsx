import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="toggle-container">
        <input type="checkbox" className="toggle-input" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 142" className="toggle">
          <path d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z" className="toggle-background" />
          <rect rx={6} height={64} width={12} y={39} x={64} className="toggle-icon on" />
          <path d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z" fillRule="evenodd" className="toggle-icon off" />
          <g filter="url('#goo')">
            <rect fill="#fff" rx={29} height={58} width={116} y={42} x={13} className="toggle-circle-center" />
            <rect fill="#fff" rx={58} height={114} width={114} y={14} x={14} className="toggle-circle left" />
            <rect fill="#fff" rx={58} height={114} width={114} y={14} x={164} className="toggle-circle right" />
          </g>
          <filter id="goo">
            <feGaussianBlur stdDeviation={10} result="blur" in="SourceGraphic" />
            <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur" />
          </filter>
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle-container {
    --active-color: #1868e3;
    --inactive-color: #d3d3d6;
    position: relative;
    aspect-ratio: 292 / 142;
    height: 1.875em;
  }

  .toggle-input {
    appearance: none;
    margin: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .toggle {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .toggle-background {
    fill: var(--inactive-color);
    transition: fill .4s;
  }

  .toggle-input:checked + .toggle .toggle-background {
    fill: var(--active-color);
  }

  .toggle-circle-center {
    transform-origin: center;
    transition: transform .6s;
  }

  .toggle-input:checked + .toggle .toggle-circle-center {
    transform: translateX(150px);
  }

  .toggle-circle {
    transform-origin: center;
    transition: transform .45s;
    backface-visibility: hidden;
  }

  .toggle-circle.left {
    transform: scale(1);
  }

  .toggle-input:checked + .toggle .toggle-circle.left {
    transform: scale(0);
  }

  .toggle-circle.right {
    transform: scale(0);
  }

  .toggle-input:checked + .toggle .toggle-circle.right {
    transform: scale(1);
  }

  .toggle-icon {
    transition: fill .4s;
  }

  .toggle-icon.on {
    fill: var(--inactive-color);
  }

  .toggle-input:checked + .toggle .toggle-icon.on {
    fill: #fff;
  }

  .toggle-icon.off {
    fill: #eaeaec;
  }

  .toggle-input:checked + .toggle .toggle-icon.off {
    fill: var(--active-color);
  }`;

export default Switch;
