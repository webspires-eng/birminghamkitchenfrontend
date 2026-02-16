import styled, { devices, themeGet, keyframes } from "@styled";

export const CatName = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.3px;
  position: relative;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  text-shadow: 0 2px 12px rgba(0,0,0,0.5);

  ${devices.xs} {
    font-size: 18px;
  }
`

export const CatSubtext = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 10px;
  position: relative;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(10px);

  &::after {
    content: '→';
    font-size: 14px;
    transition: transform 0.3s ease;
  }
`;

export const CatItemInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  /* Next/Image with fill creates a span wrapper */
  > span, > img {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }

  img {
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  /* Dark gradient overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    transition: all 0.4s ease;
    z-index: 1;
  }
`

export const CategoryItem = styled.a`
  display: block;
  width: 100%;
  height: 320px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  background: #e0e0e0;

  ${devices.sm} {
    height: 220px;
  }

  ${devices.xs} {
    height: 180px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);

    ${CatItemInner} {
      img {
        transform: scale(1.08) !important;
      }
      &::after {
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.2) 40%,
          rgba(0, 0, 0, 0.8) 100%
        );
      }
    }

    ${CatName} {
      transform: translateY(-4px);
    }

    ${CatSubtext} {
      opacity: 1;
      transform: translateY(0);

      &::after {
        transform: translateX(4px);
      }
    }
  }
`