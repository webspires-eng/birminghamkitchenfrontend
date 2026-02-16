import styled, { space, color, themeGet, devices, keyframes } from "@styled";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-family: ${themeGet('fonts.body')};
  line-height: 26px;
  
  .company-name {
      color: rgba(255, 255, 255, 0.85);
      font-weight: ${themeGet('fontWeights.heading')};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
          color: ${themeGet('colors.primary')};
      }
  }
  
  svg{
      margin: 0 2px;
      vertical-align: middle;
      color: ${themeGet('colors.primary')};
      font-size: ${themeGet('fontSizes.standard')};
  }
`

export const FooterBottomWrapper = styled.div`
  ${color}
  ${space}
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`

export const WidgetWrapper = styled.div`
  ${space};
  ${color};
  
  .widget-title {
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    margin-bottom: 28px;
    position: relative;
    padding-bottom: 16px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: ${themeGet('colors.primary')};
    }
  }
  
  .about-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
    line-height: 1.8;
    max-width: 320px;
  }

  .widget-list {
    li {
      margin-bottom: 12px;
      
      a {
        color: rgba(255, 255, 255, 0.55);
        font-size: 14px;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        
        &:hover {
          color: #fff;
          transform: translateX(4px);
        }
      }
    }
  }
`

export const FooterWrap = styled.footer`
  ${space};
  ${color};
  background: #0f0f0f;
`

export const SocialIcons = styled.ul`
  ${space};
  display: flex;
  gap: 8px;

  li {
    a {
      color: rgba(255, 255, 255, 0.5);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 10px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      font-size: 16px;

      &:hover {
        background-color: ${themeGet('colors.primary')};
        color: #fff;
        transform: translateY(-3px);
      }
    }
  }
`

export const NewsletterWrap = styled.div`
  .newsletter-desc {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 20px;
  }
`