import styled, { space, themeGet } from "@styled";

export const Input = styled.input`
  display: inline-block;
  vertical-align: top;
  line-height: 48px;
  height: 48px;
  color: #fff;
  font-size: 14px;
  width: 100%;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  text-align: left;
  box-shadow: none;
  padding-left: 16px;
  padding-right: 10px;
  transition: all 0.3s ease;
  
  &::placeholder {
      color: rgba(255, 255, 255, 0.35);
  }
  &:focus {
    border-color: ${themeGet('colors.primary')};
    background: rgba(255, 255, 255, 0.05);
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
    border-radius: 4px;
    padding: 12px 24px;
    svg {
      font-size: ${themeGet('fontSizes.body')};
      margin-right: 4px;
      vertical-align: text-top;
    }
  }
`