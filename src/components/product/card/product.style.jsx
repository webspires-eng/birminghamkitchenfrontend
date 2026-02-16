import styled, { themeGet, css, devices } from "@styled";

const hvrVisible = css`
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
`

export const ProductPrice = styled.div`
  font-size: 15px;
  line-height: 1;
  font-family: ${themeGet('fonts.montserrat')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.heading')};
  font-weight: 700;
  margin-top: 8px;

  .price {
    &.old {
      margin-right: 10px;
      color: #999;
      text-decoration: line-through;
      font-weight: 400;
      font-size: 14px;
    }
    &.new {
      color: ${themeGet('colors.primary')};
    }
  }
`

export const ProductTitle = styled.h2`
  font-size: 15px;
  font-family: ${themeGet('fonts.body')};
  font-weight: 500;
  margin-bottom: 5px;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: center;

  a {
    text-decoration: none;
    color: #191919;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    display: block;
    transition: color 0.2s ease;

    ${devices.sm} {
      font-size: 14px;
    }

    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }
`

export const ProductMeta = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 15px 0 0;
  text-align: center;
  transition: ${themeGet('transition')};
  background-color: transparent;

  ${devices.sm} {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

const buttonStyle = css`
  border: 0;
  width: calc(100% - 30px);
  z-index: 11;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${themeGet('colors.white')};
  transition: all 0.3s ease;
  font-family: ${themeGet('fonts.heading')};
  background-color: ${themeGet('colors.black')};
  border-radius: 4px;
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
  bottom: 15px;
  left: 15px;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;

  ${devices.md} {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    margin-top: 15px;
    width: 100%;
    margin-left: 0;
  }
`

export const SelectOptionButton = styled.span`
  ${buttonStyle}
  position: absolute;
  bottom: 15px;
  left: 15px;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
  cursor: pointer;

  ${devices.md} {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    margin-top: 15px;
    width: 100%;
    margin-left: 0;
  }
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #191919;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  svg {
    font-size: 18px;
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
`

export const ProductActions = styled.div`
  position: absolute;
  z-index: 9;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${devices.sm} {
    display: none;
  }
`

export const ProductActionsMobile = styled.div`
  display: none;

  ${devices.sm} {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 12px;
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
  background-color: ${themeGet('colors.black')};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  & + span {
    margin-top: 6px;
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
    background-color: ${themeGet('colors.secondary')};
  `}
`

export const ProductBadges = styled.div`
  position: absolute;
  z-index: 8;
  top: 15px;
  left: 15px;
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
    max-width: 100%;

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
  background-color: #f7f7f7;
  
  /* Aspect ratio fix via padding approach or assume consistent images */
  /* padding-bottom: 125%; */ /* Example vertical rect */ 
  
  img {
    width: 100%;
    height: auto;
    display: block;
    mix-blend-mode: multiply; /* Helps transparent PNG products look integrated */
    transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
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
  margin-bottom: 40px; /* More spacing */

  &:hover {
    ${ProductThumb} img {
      transform: scale(1.05); /* Slight zoom */
    }

    ${ProductThumb} .hover-image {
      opacity: 1;
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
