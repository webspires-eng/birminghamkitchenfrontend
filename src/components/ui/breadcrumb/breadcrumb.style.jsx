import styled, { themeGet, space, devices } from "@styled";

export const BreadcrumbNavLink = styled.span`
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

export const BreadcrumbNavItem = styled.li`
  line-height: 1;
  overflow: hidden;
  max-width: 200px;
  letter-spacing: 1.5px;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);

  ${devices.sm} {
    font-size: 11px;
  }
`

export const BreadcrumbNav = styled.ul`
  margin-top: 14px;

  ${BreadcrumbNavItem} {
    & + ${BreadcrumbNavItem} {
      padding-left: 8px;

      &:before {
        float: left;
        content: "/";
        padding-right: 8px;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`

export const BreadcrumbTitle = styled.h1`
  margin: 0;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;
  letter-spacing: -2px;
  text-shadow: 0 4px 15px rgba(0,0,0,0.3);

  ${devices.md} {
    font-size: 42px;
    letter-spacing: -1px;
  }

  ${devices.sm} {
    font-size: 22px;
  }
`

export const BreadcrumbWrap = styled.section`
  text-align: center;
  background-color: #111;
  background-image: ${props => props.thumb ? `url("${props.thumb}")` : 'url("https://images.unsplash.com/photo-1616594197247-b6956620242c?auto=format&fit=crop&q=80&w=2000")'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
  position: relative;
  padding: 80px 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
    z-index: 1;
  }

  & > div {
    position: relative;
    z-index: 2;
  }

  ${devices.md} {
    min-height: 350px;
    padding: 60px 0;
  }

  ${devices.sm} {
    min-height: 280px;
    padding: 40px 0;
  }

  ${space}
`