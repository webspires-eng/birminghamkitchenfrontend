import styled, { themeGet, css, devices } from "@styled";

export const ProductPrice = styled.div`
  font-size: 16px;
  line-height: 1;
  font-family: ${themeGet('fonts.montserrat')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.heading')};
  font-weight: 700;
  margin-top: 10px;

  ${devices.sm} {
    justify-content: center;
    font-size: 14px;
    margin-top: 5px;
  }

  .price {
    &.old {
      margin-right: 10px;
      color: #bbb;
      text-decoration: line-through;
      font-weight: 400;
      font-size: 14px;
      
      ${devices.sm} {
        font-size: 12px;
      }
    }
    &.new {
      color: #111;
    }
  }
`;

export const ProductTitle = styled.h2`
  font-size: 15px;
  font-family: ${themeGet('fonts.body')};
  font-weight: 600;
  margin-bottom: 4px;
  line-height: 1.4;
  letter-spacing: 0;
  text-align: center;

  ${devices.sm} {
    font-size: 13px;
    margin-bottom: 2px;
  }

  a {
    text-decoration: none;
    color: #222;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }
`;

export const ProductMeta = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 18px 0 0;
  text-align: center;
  transition: ${themeGet('transition')};
  background-color: transparent;

  ${devices.sm} {
    padding-top: 14px;
    padding-bottom: 12px;
  }
`

const buttonStyle = css`
  border: 0;
  width: calc(100% - 24px);
  z-index: 11;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: ${themeGet('colors.white')};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: ${themeGet('fonts.heading')};
  background-color: #111;
  border-radius: 6px;
  margin: 0 auto;
  
  svg {
    margin-right: 6px;
    font-size: 16px;
  }

  &:hover {
    background-color: ${themeGet('colors.primary')};
    color: ${themeGet('colors.white')};
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.65 !important;
  `}
`

export const AddToCartButton = styled.button`
  ${buttonStyle}
  position: absolute;
  bottom: 12px;
  left: 12px;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;

  ${devices.md} {
    display: none;
  }
`;

export const SelectOptionButton = styled.span`
  ${buttonStyle}
  position: absolute;
  bottom: 12px;
  left: 12px;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
  cursor: pointer;

  ${devices.md} {
    display: none;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #333;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  svg {
    font-size: 17px;
  }

  &:not(.wishlist) {
    transform: translateX(10px);
    opacity: 0;
  }

  ${({ isActive }) => isActive && css`
    color: ${themeGet('colors.primary')};
  `}
  
  &:hover {
    background-color: ${themeGet('colors.primary')};
    color: #fff;
  }

  ${devices.sm} {
    width: 32px;
    height: 32px;
    
    svg {
      font-size: 14px;
    }
  }
`;

export const ProductActions = styled.div`
  position: absolute;
  z-index: 9;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${devices.sm} {
    top: 8px;
    right: 8px;
    gap: 5px;
  }
`;

export const ProductActionsMobile = styled.div`
  display: none;

  ${devices.sm} {
    display: none;
  }

  ${ActionButton} {
    transform: none;
    opacity: 1;
    box-shadow: none;
    background: #f5f5f5;
    
    &:hover {
      background: ${themeGet('colors.primary')};
      color: #fff;
    }
  }
`

export const Badge = styled.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 5px 12px;
  border-radius: 4px;
  color: #fff;

  & + span {
    margin-top: 6px;
  }

  ${devices.sm} {
    font-size: 9px;
    padding: 3px 8px;
  }

  ${props => props.type === 'new' && css`
    background-color: ${themeGet('colors.green')};
  `}

  ${props => props.type === 'sale' && css`
    background-color: ${themeGet('colors.primary')};
  `}

  ${props => props.type === 'winter' && css`
    background-color: #6a1b9a;
  `}

  ${props => props.type === 'featured' && css`
    background-color: #333;
  `}
`

export const ProductBadges = styled.div`
  position: absolute;
  z-index: 8;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ProductImage = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;

  .thumb {
    z-index: 1;
    width: 100%;

    img {
      width: 100% !important;
      height: auto !important;
    }

    &.hover-image {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
`

export const ProductThumb = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: 12px;
  background-color: #f5f5f5;
  
  img {
    width: 100% !important;
    height: auto !important;
    display: block;
    mix-blend-mode: multiply;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hover-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
    mix-blend-mode: multiply;
  }
`

export const Product = styled.div`
  position: relative;
  margin-bottom: 30px; 

  &:hover {
    ${ProductThumb} {
      img {
        transform: scale(1.06);
      }

      .hover-image {
        opacity: 1;
      }
    }

    ${AddToCartButton}, ${SelectOptionButton} {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    ${ActionButton} {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
