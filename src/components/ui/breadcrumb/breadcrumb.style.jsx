import styled, { themeGet, space, devices } from "@styled";

export const BreadcrumbNavLink = styled.span`
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
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
  font-size: 36px;
  overflow: hidden;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: none;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;

  ${devices.md} {
    font-size: 28px;
  }

  ${devices.sm} {
    font-size: 22px;
  }
`

export const BreadcrumbWrap = styled.section`
  text-align: center;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  position: relative;

  ${space}
`