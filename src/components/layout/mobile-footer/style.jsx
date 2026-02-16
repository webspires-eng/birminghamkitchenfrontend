import styled, { devices, themeGet } from "@styled";

export const FooterButtons = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin: 0;
    padding: 0;
    color: white;
    line-height: 1;
    font-size: 20px;
    text-align: center;
    transition: ${themeGet('transition')};
    font-family: ${themeGet('fonts.body')};

    span {
      display: block;
      font-size: 10px;
      margin-top: -2px;
    }

    &:hover {
      color: ${themeGet('colors.primary')};;
    }
  }
`

export const MobileFooterWrap = styled.div`
  display: none;
`