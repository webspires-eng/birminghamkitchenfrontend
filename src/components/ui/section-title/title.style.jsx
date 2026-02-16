import styled, { css, devices, space, themeGet, keyframes } from "@styled";

const lineExpand = keyframes`
  from { width: 0; }
  to { width: 50px; }
`;

export const SectionText = styled.p`
  max-width: 560px;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
  margin-top: 16px;
  font-weight: 400;
  
  ${devices.sm} {
    max-width: 100%;
    font-size: 15px;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 0;
  font-weight: 700;
  color: #111;
  position: relative;
  display: inline-block;
  line-height: 1.15;
  letter-spacing: -1px;
  text-transform: none;

  ${devices.md} {
    font-size: 32px;
    letter-spacing: -0.5px;
  }

  ${devices.xs} {
    font-size: 26px;
    letter-spacing: 0;
  }
`

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${themeGet('colors.primary')};
  margin-bottom: 16px;

  &::before {
    content: '';
    width: 30px;
    height: 2px;
    background: ${themeGet('colors.primary')};
  }
`

export const SectionTitleWrap = styled.div`
  ${space};
  text-align: ${props => props.align ? props.align : 'center'};
  margin-bottom: 56px;
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

  ${SectionLabel} {
    ${props => props.align === "center" && css`
      justify-content: center;
    `}
  }
`