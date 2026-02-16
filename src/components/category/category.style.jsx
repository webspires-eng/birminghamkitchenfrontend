import styled, { devices, themeGet, keyframes } from "@styled";

const reveal = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const CatName = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.3px;
  position: relative;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);

  ${devices.xs} {
    font-size: 18px;
  }
`

export const CatSubtext = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 12px;
  position: relative;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(12px);

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
  justify-content: flex-end;
  padding: 0 24px 32px;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Gradient Overlay */
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
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.65) 100%
    );
    transition: all 0.5s ease;
    z-index: 1;
  }
`

export const CategoryItem = styled.a`
  display: block;
  width: 100%;
  height: 420px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  background: #f0f0f0;

  ${devices.sm} {
    height: 340px;
  }

  ${devices.xs} {
    height: 280px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);

    ${CatItemInner} {
      img {
        transform: scale(1.1);
      }
      &::after {
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.15) 35%,
          rgba(0, 0, 0, 0.8) 100%
        );
      }
    }

    ${CatName} {
      transform: translateY(-6px);
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