import styled, { space, themeGet } from "@styled";

export const Input = styled.input`
  display: inline-block;
  vertical-align: top;
  line-height: 48px;
  height: 48px;
  color: #333;
  font-size: 14px;
  width: 100%;
  background: #f8f8f8;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  text-align: left;
  box-shadow: none;
  padding-left: 16px;
  padding-right: 10px;
  transition: all 0.3s ease;
  
  &::placeholder {
      color: #aaa;
  }
  &:focus {
    border-color: #005DAA;
    background: #fff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 93, 170, 0.08);
  }
`

export const FormNewsletter = styled.div`
  position: relative;
  ${space};
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  
  button {
    font-size: 12px;
    font-weight: 700;
    border: 0;
    margin-top: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 13px 24px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(212, 5, 17, 0.3);
    }
    
    svg {
      font-size: ${themeGet('fontSizes.body')};
      margin-right: 4px;
      vertical-align: text-top;
    }
  }
`