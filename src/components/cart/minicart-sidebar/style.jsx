import Button from "@components/ui/button";
import styled, { devices, themeGet } from "@styled";


export const RemoveButton = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #999;
  border-radius: 50%;
  border: 1px solid #eee;
  background: white;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    background-color: ${themeGet('colors.danger')};
    border-color: ${themeGet('colors.danger')};
  }
`

export const PriceAmount = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${themeGet('colors.primary')};
`

export const MiniCartProPrice = styled.div`
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #666;
`

export const MiniCartProMeta = styled.div`
  font-size: 13px;
  margin-top: 5px;
  text-transform: capitalize;
  color: ${themeGet('colors.darkgray')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const MiniCartProName = styled.a`
  color: ${themeGet('colors.heading')};
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.body')};
  font-weight: ${themeGet('fontWeights.body')};

  ${devices.sm} {
    font-size: ${themeGet('fontSizes.standard')};
  }

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

export const MiniCartProContent = styled.div`
  display: flex;
  position: relative;
  padding-left: 15px;
  align-items: flex-start;
  flex: 1;
  justify-content: space-between;
  font-family: ${themeGet('fonts.body')};

  ${devices.xs} {
    padding-left: 10px;
  }
`

export const MiniCartProThumb = styled.a`
  width: 80px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid ${themeGet("colors.borderLight")} !important;
  }
`

export const MiniCartProductItem = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${themeGet("colors.borderLight")};
  background: white;
  transition: background 0.2s ease;

  &:hover {
    background: #fafafa;
  }

  &:last-child {
    border-bottom: 0;
  }
`

export const TotalPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${themeGet('colors.primary')};
`

export const BtnCheckout = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 25px;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const MiniCartFooter = styled.div`
  padding: 20px;
`

export const MiniCartList = styled.div`
  position: relative;
  height: calc(100% - 140px);
  
  .ps__rail-y {
    z-index: 10;
  }
`