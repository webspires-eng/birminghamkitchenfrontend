import styled, { devices, themeGet, keyframes } from "@styled";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const CatName = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;

  ${devices.xs} {
    font-size: 16px;
  }
`

export const CatSubtext = styled.span`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 6px;
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(10px);
`;

export const CatItemInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
    transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
    filter: brightness(0.95);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.55) 100%
    );
    transition: all 0.4s ease;
    z-index: 1;
  }
`

export const CategoryItem = styled.a`
  display: block;
  width: 100%;
  height: 340px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);

  ${devices.sm} {
    height: 260px;
  }

  ${devices.xs} {
    height: 220px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

    ${CatItemInner} {
      img {
        transform: scale(1.12);
        filter: brightness(1.05);
      }
      &::after {
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
      }
    }

    ${CatName} {
      transform: translateY(-4px);
    }

    ${CatSubtext} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`