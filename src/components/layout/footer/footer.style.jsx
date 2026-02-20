import styled, { space, color, themeGet, devices, keyframes } from "@styled";

export const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
  font-family: ${themeGet('fonts.body')};
  line-height: 26px;
  margin: 0;
  
  .company-name {
      color: rgba(255, 255, 255, 0.9);
      font-weight: ${themeGet('fontWeights.heading')};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
          color: #fff;
      }
  }
  
  svg {
      margin: 0 2px;
      vertical-align: middle;
      color: #D40511;
      font-size: ${themeGet('fontSizes.standard')};
  }
`

export const FooterBottomWrapper = styled.div`
  ${color}
  ${space}
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const WidgetWrapper = styled.div`
  ${space};
  ${color};
  
  .widget-title {
    font-size: 14px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    margin-bottom: 24px;
    position: relative;
    padding-bottom: 14px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 28px;
      height: 2px;
      background: #D40511;
      border-radius: 1px;
    }
  }
  
  .about-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 1.75;
    max-width: 320px;
  }

  .widget-list {
    li {
      margin-bottom: 10px;
      
      a, span {
        color: rgba(255, 255, 255, 0.55);
        font-size: 14px;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        
        &:hover {
          color: #fff;
          transform: translateX(3px);
        }
      }
      
      span {
        cursor: default;
        &:hover {
          transform: none;
        }
      }
    }
  }
`

export const FooterWrap = styled.footer`
  ${space};
  ${color};
  background: #005DAA;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 15% 85%, rgba(0, 40, 80, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 85% 20%, rgba(0, 70, 130, 0.3) 0%, transparent 40%);
    pointer-events: none;
  }
`

export const SocialIcons = styled.ul`
  ${space};
  display: flex;
  gap: 8px;

  li {
    a {
      color: rgba(255, 255, 255, 0.6);
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      font-size: 15px;

      &:hover {
        background-color: #D40511;
        border-color: #D40511;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 5, 17, 0.3);
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

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  
  .contact-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    flex-shrink: 0;
  }
  
  .contact-text {
    a, span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      text-decoration: none;
      transition: color 0.2s;
      line-height: 1.5;
      
      &:hover {
        color: #fff;
      }
    }
    
    span {
      display: block;
      cursor: default;
    }
  }
`