import styled, { devices, themeGet } from "@styled";

export const CatName = styled.h4`
  margin: 0;
  color: ${themeGet('colors.white')};
  transition: ${themeGet('transition')};
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;

  ${devices.xs} {
    font-size: 16px;
  }
`

export const CatItemInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    transition: transform 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: background 0.3s ease;
    z-index: 1;
  }
`

export const CategoryItem = styled.a`
  display: block;
  width: 100%;
  height: 280px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-decoration: none !important;

  ${devices.sm} {
    height: 220px;
  }

  &:hover {
    ${CatItemInner} {
      img {
        transform: scale(1.1);
      }
      &::after {
        background: rgba(0, 0, 0, 0.5);
      }
    }
    
    ${CatName} {
      transform: scale(1.05);
    }
  }
`