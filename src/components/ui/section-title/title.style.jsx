import styled, { css, devices, space, themeGet } from "@styled";

export const SectionText = styled.p`
  max-width: 500px;
  font-size: 16px;
  line-height: 1.6;
  color: #666;

  ${devices.sm} {
    max-width: 100%;
    font-size: 15px;
  }
`

export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 25px;
  font-weight: 800;
  color: #191919;
  position: relative;
  display: inline-block;
  padding-bottom: 0;
  line-height: 1.15;
  letter-spacing: -0.5px;

  /* Removing the underline for a cleaner look, or making it subtle/ different */
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: ${props => props.align === 'center' ? '50%' : '0'};
    transform: ${props => props.align === 'center' ? 'translateX(-50%)' : 'none'};
    width: 40px;
    height: 4px;
    background: ${themeGet('colors.primary')};
    border-radius: 2px;
  }

  ${devices.md} {
    font-size: 34px;
    margin-bottom: 20px;
  }

  ${devices.xs} {
    font-size: 28px;
  }
`

export const SectionTitleWrap = styled.div`
  ${space};
  text-align: ${props => props.align ? props.align : 'center'};
  margin-bottom: 60px;
  position: relative;
  
  ${devices.md} {
    margin-bottom: 45px;
  }

  ${SectionText} {
    margin-top: 15px; /* Spacing between title and text */

    ${props => props.align === "center" && css`
      margin-left: auto;
      margin-right: auto;
    `}

    ${props => props.align === "right" && css`
      margin-left: auto;
    `}
  }
`