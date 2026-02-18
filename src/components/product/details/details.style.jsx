import styled, { devices, themeGet, space } from "@styled";

export const ReviewItem = styled.div`
  display: flex;
  align-items: center;

  ${devices.sm} {
    display: block;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  .review-img {
    width: 120px;
    height: 120px;
    display: flex;
    flex: 0 0 120px;
    margin: 0 15px 0 0;
    align-items: center;
    justify-content: center;
    color: ${themeGet("colors.text")};
    border-radius: ${themeGet('radii.circle')};
    border: 1px solid ${themeGet('colors.borderLight')};

    svg {
      font-size: 50px;
    }

    ${devices.sm} {
      margin-bottom: 15px;
    }
  }

  .review-content {
    width: 100%;
    line-height: 1;
    margin-bottom: 5px;
    font-size: ${themeGet('fontSizes.standard')};

    .review-name {
      margin-bottom: 7px;
      line-height: 1;
      font-size: ${themeGet('fontSizes.body')};
      font-weight: ${themeGet('fontWeights.medium')};
    }

    .ratings {
      margin-bottom: 5px;
      color: ${themeGet('colors.primary')};
    }
  }
`

export const ReviewFormWrap = styled.div`
  ${devices.md} {
    margin-top: 30px;
  }

  h3 {
    font-size: 26px;
    margin-bottom: 25px;
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProInfoList = styled.ul`
  margin-bottom: 15px;

  li {
    display: block;
    font-size: ${themeGet('fontSizes.standard')};

    &:not(:last-child) {
      margin-bottom: 13px
    }

    span {
      min-width: 70px;
      margin: 0 26px 0 0;
      display: inline-block;
      color: ${themeGet('colors.heading')};
      font-weight: ${themeGet('fontWeights.medium')};
    }
  }
`

export const ProDescription = styled.div`
  line-height: 1.7;
  font-size: 15px;

  p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`

export const ProductDescReviewContent = styled.div`
  overflow: hidden;
  line-height: 24px;
  text-align: left;
  padding: 30px;
  border: 1px solid ${themeGet('colors.borderLight')};

  ${devices.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ProductDescReviewWrapper = styled.section`
  ${space}
  .description-review-nav {
    display: flex;
    justify-content: center;

    li {
      line-height: 1;
      margin: 0 30px;
      font-size: 20px;
      cursor: pointer;
      position: relative;
      padding-bottom: 15px;
      color: ${themeGet('colors.heading')};
      transition: ${themeGet('transition')};
      font-family: ${themeGet('fonts.heading')};
      font-weight: ${themeGet('fontWeights.subHeading')};

      ${devices.sm} {
        margin: 0 10px;
        font-size: 14px;
      }

      &:after {
        left: 0;
        right: 0;
        height: 2px;
        content: "";
        bottom: -1px;
        position: absolute;
        transition: ${themeGet('transition')};
      }

      &.react-tabs__tab--selected, &:hover {
        &:after {
          background-color: ${themeGet('colors.primary')};
        }
      }
    }
  }
`

export const ProductThumbNav = styled.div`
  margin-top: 10px;

  figure {
    height: 85px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    ${devices.xs} {
      height: 70px;
    }
  }

  .swiper-slide {
    border: 1px solid transparent;

    &-thumb-active {
      border-color: ${themeGet('colors.primary')};
    }
  }


  [class*="swiper-button"] {
    height: 30px;
    width: 30px;
    line-height: 30px;

    &:after {
      font-size: 12px !important;
    }
  }
`

export const ProductThumbGallery = styled.div`
  figure {
    height: 500px;
    overflow: hidden;
    position: relative;

    ${devices.md} {
      height: 400px;
    }

    ${devices.sm} {
      height: 400px;
    }

    ${devices.xs} {
      height: 300px;
    }
  }
`

export const ProductSocialShare = styled.div`
  display: flex;
  line-height: 1;
  margin-top: 10px;
  align-items: center;

  h4 {
    margin-right: 10px;
    color: ${themeGet('colors.text')};
    font-size: ${themeGet('fontSizes.standard')};
    font-weight: ${themeGet('fontWeights.heading')};
  }

  .media {
    margin-top: 3px;

    a {
      font-size: 18px;
      display: inline-block;
      color: ${themeGet('colors.text')};

      &:not(:last-child) {
        margin-right: 15px;
      }

      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
  }
`

export const QuantityIncDecButton = styled.div`
  width: 120px;
  display: flex;
  margin-right: 15px;
  border: 1px solid ${themeGet('colors.primary')};

  .btn {
    &:hover {
      color: ${themeGet('colors.white')};
      background-color: ${themeGet('colors.primary')};
    }

    &-decrement {
      border-right: 1px solid ${themeGet('colors.primary')};
    }

    &-increment {
      border-left: 1px solid ${themeGet('colors.primary')};
    }
  }

  input {
    width: 100%;
    border: none;
    display: block;
    text-align: center;
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProductActionButton = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .quantity-cart-button {
    display: flex;
    order: 1;

    .btn-cart {
      border: 1px solid transparent;

      ${devices.xs} {
        padding: 10px 20px;
        font-size: ${themeGet('fontSizes.standard')};
      }
    }
  }

  .wishlist-compare-button {
    margin-top: 20px;

    .btn {
      padding: 0;
      border: none;
      line-height: 1;
      color: ${themeGet('colors.text')};
      font-family: ${themeGet('fonts.body')};
      font-size: ${themeGet('fontSizes.standard')};

      &:not(:last-child) {
        margin-right: 20px;
      }

      svg {
        margin-right: 2px;
        vertical-align: bottom;
      }

      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
  }
`

export const ProductSwatchItem = styled.div`
  label {
    margin-bottom: 3px;
    color: ${themeGet('colors.heading')};
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProductSwatches = styled.div`
  margin-top: 20px;

  ${ProductSwatchItem} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`

export const ProductPrices = styled.div`
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 20px;
  color: ${themeGet('colors.heading')};

  ${devices.xs} {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .price {
    &.old {
      margin-right: 5px;
      color: ${themeGet('colors.darkgray')};
    }
  }
`

export const ProductRatings = styled.div`
  margin-top: 5px;

  svg {
    width: 16px;
    overflow: hidden;
    color: ${themeGet('colors.primary')};
    font-size: ${themeGet('fontSizes.body')};
  }
`

export const ProductSKU = styled.p`
  line-height: 1;
  font-size: 13px;

  strong {
    color: ${themeGet('colors.heading')};
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProductName = styled.h2`
  line-height: 1;
  font-size: 24px;
  margin: 15px 0;
  color: ${themeGet('colors.heading')};
  font-weight: ${themeGet('fontWeights.subHeading')};

  ${devices.xs} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`

export const ContentWrap = styled.div`
  line-height: 26px;
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.standard')};

  ${devices.sm} {
    margin-top: 25px;
  }

  ${ProductSKU} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &.details-page {
    ${ProductSwatches} {
      @media screen and (min-width: 992px) {
        max-width: 50%;
      }
    }
  }
`

export const ProductDetailsWrapper = styled.section`
  ${space}
  padding: 60px 0;
  
  ${devices.md} {
    padding: 30px 0;
  }
`

export const OptionTabNav = styled.div`
  display: flex;
  background: #F9F4F0;
  border-radius: 12px;
  padding: 0;
  margin-bottom: 25px;
  border: 1px solid #E9E1D8;
  overflow: hidden;
`;

export const OptionTab = styled.div`
  text-align: center;
  cursor: pointer;
  flex: 1;
  padding: 15px 10px;
  background-color: ${props => props.active ? '#FEFBF9' : 'transparent'};
  transition: all 0.3s ease;
  border-right: 1px solid #E9E1D8;
  position: relative;
  
  &:last-child {
    border-right: none;
  }
  
  &:hover {
    background-color: #FEFBF9;
  }
  
  .tab-icon {
    font-size: 28px;
    margin-bottom: 5px;
    color: #333;
    display: flex;
    justify-content: center;
    line-height: 1;
  }
  
  .tab-label {
    font-size: 14px;
    color: #333;
    font-weight: 700;
    line-height: 1.2;
  }
  
  .tab-value {
    font-size: 12px;
    color: #666;
    margin-top: 4px;
    font-weight: 400;
  }
`;

export const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-top: 15px;
  margin-bottom: 30px;

  ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const OptionItem = styled.div`
  border: 1px solid ${props => props.active ? '#7E2D67' : '#F1EBE6'};
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
  background-color: #FEFAF7;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  text-align: center;

  &:hover {
    border-color: #7E2D67;
  }

  ${props => props.active && `
    box-shadow: 0 0 0 1px #7E2D67;
  `}
  
  .option-img {
    width: 100%;
    height: auto;
    aspect-ratio: 1.5;
    background: #EAEAEA;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }

  .option-icon {
    padding: 20px 0 10px;
    svg {
        font-size: 50px;
        color: #555;
    }
  }

  .option-text {
    padding: 12px 10px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    line-height: 1.2;
    background: #FEFAF7;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .option-price {
    font-size: 12px;
    color: #333;
    margin-top: 4px;
    font-weight: 600;
  }
`;

export const CheckBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #7E2D67;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const DimensionButton = styled.div`
    text-align: center;
    margin-top: -15px;
    margin-bottom: 25px;
    
    button {
        background: #F3ECE6;
        border: 1px solid #7E2D67;
        color: #333;
        border-radius: 10px;
        padding: 12px 30px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
            background: #EBE1D9;
        }
    }
`;

export const FinanceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f4f6f8;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 13px;
  border: 1px solid #e1e1e1;
  
  img {
    height: 20px;
    margin-right: 5px;
  }
`;

export const TrustPilot = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  
  .stars {
    display: flex;
    gap: 3px;
  }
  
  .star-box {
    background: #00b67a;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    font-size: 14px;
    border-radius: 2px;
  }
  
  .rating-text {
    font-size: 14px;
    color: #333;
    margin-left: 8px;
    font-weight: 500;
  }
`;
export const BundleSection = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    order: 2;

    ${devices.sm} {
        order: 3;
    }
`;

export const BundleItem = styled.div`
    background: #FEFBF9;
    border: 1px solid ${props => props.active ? '#7E2D67' : '#F1EBE6'};
    border-radius: 15px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    ${devices.sm} {
        padding: 15px;
    }

    .bundle-label {
        display: flex;
        align-items: center;
        gap: 20px;
        
        ${devices.sm} {
            gap: 10px;
        }

        .bundle-icons {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
            font-size: 32px;
            color: #7E2D67;

            ${devices.sm} {
                display: none;
            }

            img {
                width: 45px !important;
                height: 45px !important;
                object-fit: contain;
            }
        }
        
        .bundle-text {
            span {
                display: block;
                font-size: 18px;
                font-weight: 700;
                color: #333;
                margin-bottom: 4px;

                ${devices.sm} {
                    font-size: 16px;
                }
            }
            p {
                margin: 0;
                font-size: 13px;
                color: #666;
                line-height: 1.5;
                max-width: 300px;
            }
        }
    }
    
    .bundle-action {
        display: flex;
        align-items: center;
        gap: 25px;

        ${devices.sm} {
            gap: 12px;
        }
        
        .bundle-price {
            font-size: 20px;
            font-weight: 700;
            color: #7E2D67;

            ${devices.sm} {
                font-size: 18px;
            }
        }
    }
`;

export const BundleButton = styled.button`
    background: #fff;
    border: 1.5px solid #7E2D67;
    color: #7E2D67;
    padding: 10px 25px;
    border-radius: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s;
    min-width: 140px;
    font-size: 14px;

    ${devices.sm} {
        padding: 8px 15px;
        min-width: 100px;
        font-size: 13px;
    }
    
    &:hover {
        background: #F9F4F0;
        transform: translateY(-2px);
    }
    
    &.active {
        background: #7E2D67;
        color: #fff;
    }
    
    svg {
        font-size: 18px;
    }
`;

export const CheckoutInfo = styled.div`
    order: 3;
    padding-top: 10px;
    
    ${devices.sm} {
        order: 2;
        padding-bottom: 20px;
    }
`;

export const PaymentIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    
    img {
        height: 24px;
        width: auto;
        opacity: 0.9;
    }
`;

export const TrustBadges = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    
    .badge-item {
        text-align: center;
        font-size: 12px;
        color: #333;
        font-weight: 500;
        
        .icon {
            font-size: 24px;
            margin-bottom: 5px;
            display: block;
        }
    }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 40px;
  
  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    &:hover { color: #000; }
  }
  
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const MattressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  ${devices.xs} {
    gap: 10px;
  }
`;

export const MattressCard = styled.div`
  border: 2px solid ${props => props.selected ? '#7E2D67' : '#eee'};
  border-radius: 12px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;

  ${devices.sm} {
    padding: 10px;
  }
  
  &:hover {
    border-color: #7E2D67;
  }
  
  .check-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #7E2D67;
    font-size: 20px;
    display: ${props => props.selected ? 'block' : 'none'};
  }
  
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;

    ${devices.sm} {
      height: 100px;
      margin-bottom: 8px;
    }
  }
  
  .m-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #333;

    ${devices.sm} {
      font-size: 14px;
    }
  }
  
  .m-desc {
    font-size: 13px;
    color: #666;
    margin-bottom: 10px;
    flex-grow: 1;

    ${devices.sm} {
      font-size: 11px;
      margin-bottom: 5px;
    }
  }
  
  .m-price {
    font-size: 18px;
    font-weight: 700;
    color: #7E2D67;
  }
`;
