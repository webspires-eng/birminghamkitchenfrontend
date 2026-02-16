import styled, { css, devices, space, themeGet } from "@styled";

export const SectionText = styled.p`
  max-width: 600px;
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-top: 15px;
  
  ${devices.sm} {
    max-width: 100%;
    font-size: 15px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 0;
  font-weight: 700;
  color: #191919;
  position: relative;
  display: inline-block;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-transform: capitalize;

  ${devices.md} {
    font-size: 28px;
  }

  ${devices.xs} {
    font-size: 24px;
  }
`

export const SectionTitleWrap = styled.div`
  ${space};
  text-align: ${props => props.align ? props.align : 'center'};
  margin-bottom: 50px;
  position: relative;
  width: 100%;
  
  ${devices.md} {
    margin-bottom: 40px;
  }

  ${SectionText} {
    ${props => props.align === "center" && css`
      margin-left: auto;
      margin-right: auto;
    `}

    ${props => props.align === "right" && css`
      margin-left: auto;
    `}
  }
`