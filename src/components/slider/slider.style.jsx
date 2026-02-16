import styled, { devices, themeGet, css, typography, keyframes } from "@styled";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

export const SliderThumb = styled.div`
  &.style-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    
    img {
      object-fit: cover;
      object-position: center;
      transition: transform 10s ease;
      filter: brightness(0.45);
    }
  }
`

export const SlideSubTitle = styled.h4`
  font-size: 13px;
  line-height: 1;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  margin-bottom: 24px;
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.3s;
  opacity: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 16px;

  &::before,
  &::after {
    content: '';
    width: 40px;
    height: 1px;
    background: rgba(255, 255, 255, 0.5);
  }

  ${devices.sm} {
    font-size: 11px;
    letter-spacing: 3px;
    &::before, &::after { width: 20px; }
  }
`

export const SlideTitle = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -2px;
  text-shadow: 0 4px 30px rgba(0,0,0,0.3);
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.5s;
  opacity: 0;

  ${devices.md} {
    font-size: 48px;
    letter-spacing: -1px;
  }

  ${devices.sm} {
    font-size: 36px;
    letter-spacing: -0.5px;
  }

  ${devices.xs} {
    font-size: 30px;
  }
`

export const SlideContent = styled.div`
  z-index: 1;
  position: relative;
  ${typography};

  & > p {
    max-width: 500px;
    font-size: 17px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0.7s;
    opacity: 0;

    ${props => props.textAlign === "center" && css`
      margin: auto;
    `}

    ${devices.sm} {
      font-size: 14px;
    }
  }

  ${props => props.mode === "light" && css`
    & > * {
      color: ${themeGet("colors.white")};
    }
  `}
`

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 2s;
  opacity: 0;

  ${devices.sm} {
    display: none;
  }

  span {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.3);
    animation: ${scrollBounce} 2s ease infinite;
  }
`;

export const SlideItem = styled.div`
  height: 92vh;
  min-height: 550px;
  max-height: 920px;
  display: flex;
  background-color: #000;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.45) 100%
    );
    z-index: 0;
  }

  ${devices.md} {
    height: 75vh;
    min-height: 450px;
  }

  ${devices.sm} {
    height: 65vh;
    min-height: 400px;
  }

  & > div {
    align-self: center;
  }
`