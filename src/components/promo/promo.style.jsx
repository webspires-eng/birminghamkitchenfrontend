import styled, { css, devices, themeGet } from "@styled";

export const PromoTitle = styled.h3`
  font-size: 38px;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #191919;
  font-weight: 800;
  letter-spacing: -0.5px;

  ${devices.md} {
    font-size: 32px;
  }

  ${devices.xs} {
    font-size: 26px;
  }
`

export const PromoContent = styled.div`
  align-self: center;
  z-index: 2;
  position: relative;
  max-width: 500px;
  
  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 25px;
    font-weight: 500;
  }
`

export const PromoInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 60px;
  justify-content: flex-start;

  ${devices.md} {
    padding: 40px;
  }

  ${devices.xs} {
    padding: 30px;
  }

  ${props => props.align === 'right' && css`
    justify-content: flex-end;
    text-align: right;
    
    ${PromoContent} {
      align-items: flex-end;
    }
  `}

  ${props => props.align === 'center' && css`
    justify-content: center;
    text-align: center;
    
    ${PromoContent} {
      align-items: center;
    }
  `}
`

export const PromoItem = styled.a`
  display: block;
  overflow: hidden;
  position: relative;
  margin-top: 30px;
  border-radius: 0; /* Removing border radius for stricter look or kept slight */
  border-radius: 12px;
  box-shadow: none;
  transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
  text-decoration: none !important;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: all 0.4s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);

    &::after {
      background: rgba(0,0,0,0.03); 
    }

    img {
      transform: scale(1.05);
    }
    
    /* Reveal button effect */
    .promo-btn {
      background-color: ${themeGet('colors.primary')};
      color: #fff;
      border-color: ${themeGet('colors.primary')};
    }
  }

  img {
    width: 100%;
    transition: transform 1.2s cubic-bezier(0.2, 0, 0.2, 1);
  }
`