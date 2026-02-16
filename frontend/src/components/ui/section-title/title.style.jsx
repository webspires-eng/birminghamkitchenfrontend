import styled, { css, devices, space, themeGet } from "@styled";

export const SectionText = styled.p`
  max-width: 465px;

  ${devices.sm} {
    max-width: 100%;
  }
`

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #191919;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => props.align === 'center' ? '50%' : '0'};
    transform: ${props => props.align === 'center' ? 'translateX(-50%)' : 'none'};
    width: 60px;
    height: 3px;
    background: ${themeGet('colors.primary')};
  }

  ${devices.md} {
    font-size: 30px;
  }
`

export const SectionTitleWrap = styled.div`
  ${space};
  text-align: ${props => props.align ? props.align : 'center'};
  margin-bottom: 50px;

  ${SectionText} {
    ${props => props.align === "center" && css`
      margin: auto;
    `}

    ${props => props.align === "right" && css`
      margin-left: auto;
    `}
  }
}
`