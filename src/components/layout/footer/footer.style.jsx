import styled, { space, color, themeGet, devices } from "@styled";

export const CopyrightText = styled.p`
  color: #111;
  font-size: 13px;
  font-weight: 500;
  font-family: ${themeGet('fonts.body')};
  line-height: 26px;
  margin: 0;
  
  .company-name {
      color: #333;
      font-weight: ${themeGet('fontWeights.heading')};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
          color: ${themeGet('colors.primary')};
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
  border-top: 1px solid #eee;
`

export const WidgetWrapper = styled.div`
  ${space};
  ${color};
  
  /* Override widget title for light backgrounds */
  .widget-title,
  h4 {
    font-size: 14px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 700;
    color: #1a1a1a !important;
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
    color: #555 !important;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.75;
    max-width: 320px;
  }

  p {
    color: #555 !important;
  }

  .widget-list {
    li {
      margin-bottom: 10px;
      
      a, span {
        color: #444 !important;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        
        &:hover {
          color: #D40511 !important;
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
  background: #fff;
  border-top: 1px solid #f0f0f0;
`

export const SocialIcons = styled.ul`
  ${space};
  display: flex;
  gap: 8px;

  li {
    a {
      color: #333;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
      border: 1px solid #eee;
      border-radius: 8px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      font-size: 15px;

      &:hover {
        background-color: #D40511;
        border-color: #D40511;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 5, 17, 0.25);
      }
    }
  }
`

export const NewsletterWrap = styled.div`
  .newsletter-desc {
    color: #888;
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
    background: #fef2f2;
    border-radius: 8px;
    color: #D40511;
    font-size: 16px;
    flex-shrink: 0;
  }
  
  .contact-text {
    a, span {
      color: #444 !important;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s;
      line-height: 1.5;
      
      &:hover {
        color: #D40511 !important;
      }
    }
    
    span {
      display: block;
      cursor: default;
    }
  }
`