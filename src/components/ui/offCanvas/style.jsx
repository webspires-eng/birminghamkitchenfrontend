import styled, { themeGet, css, layout } from "@styled";
import { devices } from "@styled";

export const OffCanvasCloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #eee;
  background: #f8f8f8;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  line-height: 1;

  &:hover {
      background: ${themeGet("colors.primary")};
      color: white;
      border-color: ${themeGet("colors.primary")};
      transform: rotate(90deg);
  }
`;

export const OffCanvasTitle = styled.h3`
  font-size: 22px;
  color: #111;
  font-family: ${themeGet("fonts.heading")};
  font-weight: 700;
  margin: 0;
`;

export const OffCanvasHead = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  background: white;
`;

export const OffCanvasContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const OffCanvasInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin-left: auto;
  position: relative;
  transform: translateX(100%);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: #fff;
  box-shadow: -10px 0 30px rgba(0,0,0,0.05);
  ${layout};

  ${devices.sm} {
    max-width: 320px;
  }
`;

export const OffCanvasOverlay = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const OffCanvasWrap = styled.aside`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  transition: ${themeGet("transition")};
  font-size: ${themeGet("fontSizes.standard")};
  font-weight: ${themeGet("fontWeights.body")};

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: visible;

      ${OffCanvasInner} {
        transform: translateX(0);
      }

      ${OffCanvasOverlay} {
        opacity: 1;
        visibility: visible;
        pointer-events: visible;
      }
    `}

  ${({ position }) =>
    position === "center" &&
    css`
      ${devices.sm} {
        padding: 0 15px;
      }
      ${OffCanvasInner} {
        top: 50%;
        margin: auto;
        height: auto;
        overflow-y: auto;
        max-height: 700px;
        transform: translateY(-50%);
      }
    `}
`;
