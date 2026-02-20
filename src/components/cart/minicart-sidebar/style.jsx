import Button from "@components/ui/button";
import styled, { devices, themeGet } from "@styled";


export const RemoveButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #bbb;
  border-radius: 50%;
  border: none;
  background: transparent;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${themeGet('colors.danger')};
    background: rgba(231,76,60,0.08);
  }
`

export const PriceAmount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${themeGet('colors.heading')};
`

export const MiniCartProPrice = styled.div`
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  color: #888;
`

export const MiniCartProMeta = styled.div`
  font-size: 12px;
  margin-top: 3px;
  text-transform: capitalize;
  color: ${themeGet('colors.primary')};
  font-weight: 500;
`

export const MiniCartProName = styled.a`
  color: ${themeGet('colors.heading')};
  font-family: ${themeGet('fonts.body')};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

export const MiniCartProContent = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex: 1;
  gap: 14px;
  font-family: ${themeGet('fonts.body')};
`

export const MiniCartProThumb = styled.a`
  width: 72px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const MiniCartProductItem = styled.div`
  display: flex;
  padding: 16px 20px;
  transition: background 0.2s ease;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: #f0f0f0;
  }
`

export const TotalPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: white;
`

export const BtnCheckout = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 10px;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(212,5,17,0.3);
  }
`

export const BtnViewCart = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  border-radius: 10px;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
  border: 1.5px solid #e0e0e0;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${themeGet('colors.primary')};
    color: ${themeGet('colors.primary')};
  }
`

export const MiniCartFooter = styled.div`
  padding: 20px;
  background: white;
  border-top: 1px solid #f0f0f0;
`

export const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  margin-bottom: 16px;
  
  span:first-child {
    font-size: 14px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
  
  span:last-child {
    font-size: 18px;
    font-weight: 700;
    color: ${themeGet('colors.heading')};
  }
`

export const MiniCartList = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  
  .ps__rail-y {
    z-index: 10;
  }
`

export const EmptyCartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px 20px;
  text-align: center;
`

export const ItemCount = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #999;
  margin-left: 6px;
`