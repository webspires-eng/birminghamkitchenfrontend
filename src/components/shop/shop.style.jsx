import styled, { devices, space, themeGet } from "@styled";

export const ShopTopBarRight = styled.div`
  display: flex;
  align-items: center;

  ${devices.xs} {
    justify-content: center;
  }

  .sort-by {
    min-width: 200px;
    margin-left: 16px;

    &__control {
      min-height: 42px;
      border-radius: 8px;
      border-color: #e5e5e5;
      font-size: 13px;
      
      &:hover {
        border-color: #ccc;
      }
    }
    
    &__indicator-separator {
      display: none;
    }
  }
`;

export const ShopTopBarLeft = styled.div`
  p {
    color: #888;
    font-size: 14px;
    margin: 0;
  }

  ${devices.xs} {
    margin-bottom: 12px;
  }
`;

export const ShopTopBar = styled.div`
  display: flex;
  padding: 14px 0;
  margin-bottom: 32px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  font-size: ${themeGet("fontSizes.standard")};

  ${devices.xs} {
    display: block;
    padding-top: 12px;
    text-align: center;
    padding-bottom: 12px;
  }
`;

export const ProductsFeedWrap = styled.div`
  padding: 50px 0 80px;
  background: #fff;
  
  ${devices.md} {
    padding: 30px 0 50px;
  }
  
  ${space}
  
  .products-grid-mobile {
    row-gap: 32px;
  }

  .seo-text {
    padding-top: 40px;
    border-top: 1px solid #f0f0f0;
    margin-top: 50px;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
    }

    p {
      font-size: 15px;
      line-height: 1.8;
      color: #777;
      max-width: 700px;
    }
  }
`;
