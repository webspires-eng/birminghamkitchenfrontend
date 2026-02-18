import styled, { themeGet, devices } from "@styled";

export const MobileNav = styled.nav`
  padding: 30px 20px;
  flex: 1;
  overflow-y: auto;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 5px;
      border-bottom: 1px solid ${themeGet('colors.offWhiteLight')};

      &:last-child {
        border-bottom: none;
      }

      a {
        display: flex;
        font-size: 16px;
        align-items: center;
        padding: 15px 0;
        text-transform: capitalize;
        justify-content: space-between;
        color: ${themeGet('colors.heading')};
        font-weight: 500;
        font-family: ${themeGet('fonts.heading')};
        transition: all 0.3s ease;
        text-decoration: none;

        &:hover {
          color: ${themeGet('colors.primary')};
          padding-left: 5px;
        }

        svg {
          font-size: 18px;
          color: ${themeGet('colors.primary')};
          transition: transform 0.3s ease;

          &.minus {
            display: none;
          }
        }

        &.mm-next-level {
          & ~ ul {
            display: none;
            padding-bottom: 15px;
          }

          &.menu-expand {
            color: ${themeGet('colors.primary')};
            
            svg {
              &.minus {
                display: block;
              }

              &.plus {
                display: none;
              }
            }
          }
        }
      }

      ul {
        padding-left: 20px;
        background-color: ${themeGet('colors.offWhiteLight')};
        border-radius: 8px;
        margin-top: -5px;
        margin-bottom: 15px;

        li {
          border-bottom: none;
          margin-bottom: 0;

          a {
            padding: 10px 0;
            font-size: 14px;
            font-weight: 400;
            text-transform: capitalize;
            color: ${themeGet('colors.text')};
            opacity: 0.8;

            &:hover {
              opacity: 1;
              color: ${themeGet('colors.primary')};
            }
          }
        }
      }
    }
  }
`;

export const MobileNavContact = styled.div`
  padding: 30px 20px;
  border-top: 1px solid ${themeGet('colors.borderLight')};
  background-color: ${themeGet('colors.offWhiteLight')};

  h4 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
    color: ${themeGet('colors.primary')};
    font-weight: 700;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: ${themeGet('colors.text')};
    font-size: 14px;
    text-decoration: none;

    svg {
      margin-right: 12px;
      font-size: 18px;
      color: ${themeGet('colors.primary')};
    }

    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }
`;

export const MobileSocial = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  a {
    width: 36px;
    height: 36px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeGet('colors.heading')};
    font-size: 18px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    transition: all 0.3s ease;

    &:hover {
      background: ${themeGet('colors.primary')};
      color: white;
      transform: translateY(-3px);
    }
  }
`;