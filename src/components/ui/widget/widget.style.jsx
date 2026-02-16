import styled, { space, themeGet, devices } from "@styled";

export const WidgetBody = styled.div`
  ${space}
  .about-text {
    font-size: 15px;
    max-width: 320px;
    line-height: 1.8;
    color: rgba(255,255,255,0.55);

    ${devices.sm} {
      max-width: 454px;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.55);
  }

  .widget-list {
    margin-bottom: 0;
    
    li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        font-size: 14px;
        line-height: 24px;
        padding: 0;
        color: rgba(255, 255, 255, 0.55);
        transition: all 0.3s ease;

        &:hover {
          color: #fff;
          padding-left: 0;
          transform: translateX(4px);
          display: inline-block;
        }
      }
    }
  }
`

export const WidgetTitle = styled.h4`
  font-size: 13px;
  font-weight: 700;
  position: relative;
  margin-bottom: 24px;
  letter-spacing: 2px;
  color: #fff;
  padding-bottom: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 28px;
    height: 2px;
    background: ${themeGet('colors.primary')};
  }
`

export const WidgetItem = styled.div`
    ${space}
`