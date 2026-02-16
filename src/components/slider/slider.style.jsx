import styled, { devices, themeGet, css, typography } from "@styled";

export const SliderThumb = styled.div`
  &:not(.style-2) {
    img {
      ${devices.md} {
        height: 250px;
      }

      ${devices.sm} {
        width: 300px;
        height: 250px;
        margin-bottom: 10px;
      }
    }
  }

  &.style-2 {
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      object-position: center;
      animation: none !important;
    }
  }
`

export const SlideSubTitle = styled.h4`
  font-size: 24px;
  line-height: 1;
  color: ${themeGet('colors.text')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const SlideTitle = styled.h2`
  font-size: 52px;
  margin-bottom: 15px;
  font-weight: ${themeGet('fontWeights.heading')};

  ${devices.md} {
    font-size: 42px;
  }

  ${devices.sm} {
    font-size: 32px;
  }
`

export const SlideContent = styled.div`
  z-index: 1;
  position: relative;
  ${typography};

  & > p {
    max-width: 470px;

    ${props => props.textAlign === "center" && css`
      margin: auto;
    `}
  }

  ${props => props.mode === "light" && css`
    & > * {
      color: ${themeGet("colors.white")};
    }
  `}
`

export const SlideItem = styled.div`
  height: 400px;
  display: flex;
  background-color: ${themeGet('colors.offWhite')};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: 0;
  }

  ${devices.md} {
    height: 400px;
  }

  ${devices.sm} {
    height: 400px;
  }

  ${devices.xs} {
    height: 400px;
  }

  & > div {
    align-self: center;
  }
`