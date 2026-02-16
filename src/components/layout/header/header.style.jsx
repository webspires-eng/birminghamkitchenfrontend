import styled, { color, themeGet, devices, css } from "@styled";

export const CartItemCount = styled.span`
  font-size: 10px;
  font-weight: ${themeGet('fontWeights.body')};
  line-height: 17px;
  position: absolute;
  z-index: 2;
  top: -3px;
  right: -4px;
  height: 17px;
  width: 17px;
  text-align: center;
  color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.circle')};
  background-color: ${themeGet('colors.primary')};
`

const HeaderBtnStyle = css`
  padding: 0;
  line-height: 1;
  position: relative;
  text-decoration: none;
  background-color: transparent;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    color: ${themeGet('colors.primary')};
    transform: translateY(-2px);
  }

  svg {
    font-size: 26px;
    line-height: 1;
  }
`

export const HeaderActionBtn = styled.button`
  ${HeaderBtnStyle}
`

export const HeaderActionAnchor = styled.a`
  ${HeaderBtnStyle}
`

export const ActionItem = styled.div`
  position: relative;
  line-height: 1;

  button {
    padding-left: 0;
    padding-right: 0;
  }
`

export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  & > * {
    margin: 0 !important;
    padding: 0 !important;
    
    &:before {
      display: none !important;
    }
  }
`

export const HeaderBottomWrap = styled.div`
  padding: 10px 0;
  position: relative;
  
  .header-content-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderNavigation = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 991px) {
    display: none;
  }
`

export const HeaderTopSetLanCurr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-family: ${themeGet('fonts.heading')};

  ${devices.sm} {
    justify-content: center;
  }
`

export const HeaderTopMessage = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;
  font-style: italic;
  color: ${themeGet("colors.white")};
  font-family: ${themeGet("fonts.heading")};
  ${({ center }) => center && css`
    text-align: center;
  `}
`

export const HeaderTopWrap = styled.div`
  ${color};

  padding: 8px 0;
  background-color: #005DAA;
`

export const HeaderArea = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  ${devices.md} {
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    position: fixed;
    background-color: ${themeGet('colors.white')};
    border-bottom: 1px solid ${themeGet('colors.borderLight')};
    
    svg {
      font-size: 22px;
    }
  }
`