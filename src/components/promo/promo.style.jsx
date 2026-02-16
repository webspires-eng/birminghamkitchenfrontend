import styled, { css, devices, themeGet } from "@styled";

export const PromoTitle = styled.h3`
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 15px;
  color: #191919;
  font-weight: 700;

  ${devices.xs} {
    font-size: 24px;
  }
`
export const PromoContent = styled.div`
  align-self: center;
  z-index: 2;
  position: relative;
`

export const PromoInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 50px;
  justify-content: flex-start;

  ${devices.xs} {
    padding: 30px;
  }

  ${props => props.align === 'right' && css`
    justify-content: flex-end;
    text-align: right;
  `}

  ${props => props.align === 'center' && css`
    justify-content: center;
    text-align: center;
  `}
`

export const PromoItem = styled.a`
  display: block;
  overflow: hidden;
  position: relative;
  margin-top: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
  }

  &:hover {
    box-shadow: 0 15px 30px rgba(0,0,0,0.12);
    transform: translateY(-5px);

    &::after {
      background: rgba(255, 255, 255, 0);
    }

    img {
      transform: scale(1.08);
    }
  }

  img {
    width: 100%;
    transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
  }
`