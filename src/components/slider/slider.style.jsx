import styled, { devices, themeGet, css, typography, keyframes } from "@styled";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
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
      transition: transform 8s ease;
    }
  }
`

export const SlideSubTitle = styled.h4`
  font-size: 14px;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;

  ${devices.sm} {
    font-size: 12px;
    letter-spacing: 3px;
  }
`

export const SlideTitle = styled.h2`
  font-size: 62px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1px;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  ${devices.md} {
    font-size: 46px;
  }

  ${devices.sm} {
    font-size: 34px;
    letter-spacing: 0;
  }

  ${devices.xs} {
    font-size: 28px;
  }
`

export const SlideContent = styled.div`
  z-index: 1;
  position: relative;
  ${typography};

  & > p {
    max-width: 520px;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    animation: ${fadeInUp} 0.8s ease forwards;
    animation-delay: 0.6s;
    opacity: 0;

    ${props => props.textAlign === "center" && css`
      margin: auto;
    `}

    ${devices.sm} {
      font-size: 15px;
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
  bottom: 80px; /* Moved up to avoid overlap */
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${pulse} 2s ease infinite;

  ${devices.sm} {
    display: none;
  }

  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.5);
    margin-top: 8px;
  }

  span {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const SlideItem = styled.div`
  height: 85vh;
  min-height: 550px;
  max-height: 900px;
  display: flex;
  background-color: #111;
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
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.15) 40%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 0;
  }

  ${devices.md} {
    height: 70vh;
    min-height: 450px;
  }

  ${devices.sm} {
    height: 60vh;
    min-height: 400px;
  }

  & > div {
    align-self: center;
  }
`