import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices, keyframes } from "@styled";
import { HiOutlineTruck, HiOutlineClock, HiOutlineShieldCheck, HiOutlineCreditCard } from "react-icons/hi";

const FeatureWrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 10;
  padding: 0;
  border-bottom: 1px solid #f0f0f0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 20px;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 25%;
    height: 50%;
    width: 1px;
    background: #eee;
  }

  &:last-child::after {
    display: none;
  }

  ${devices.lg} {
    padding: 28px 14px;
  }

  ${devices.md} {
    justify-content: flex-start;
    text-align: left;
    padding: 20px 12px;
    
    &::after {
      display: none;
    }
  }

  ${devices.xs} {
    flex-direction: column;
    text-align: center;
    padding: 16px 8px;
  }

  &:hover {
    .feature-icon {
      background: ${themeGet('colors.primary')};
      color: #fff;
      transform: scale(1.05);
    }
  }
`;

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f5f5f5;
  color: ${themeGet('colors.primary')};
  font-size: 20px;
  margin-right: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${devices.xs} {
    width: 36px;
    height: 36px;
    font-size: 16px;
    margin-right: 0;
    margin-bottom: 8px;
    border-radius: 8px;
  }
`

const FeatureInfo = styled.div`
  h4 {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 2px;
    color: #111;
    letter-spacing: -0.2px;

    ${devices.xs} {
      font-size: 11px;
    }
  }
  p {
    margin: 0;
    font-size: 12px;
    color: #999;
    line-height: 1.4;

    ${devices.xs} {
      font-size: 11px;
    }
  }
`;

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Free Delivery",
      content: "On all orders across UK",
      icon: <HiOutlineTruck />
    },
    {
      id: 2,
      title: "0% Finance",
      content: "Spread the cost easily",
      icon: <HiOutlineCreditCard />
    },
    {
      id: 3,
      title: "Crafted in UK",
      content: "Artisan quality guarantee",
      icon: <HiOutlineClock />
    },
    {
      id: 4,
      title: "Secure Payment",
      content: "100% secure checkouts",
      icon: <HiOutlineShieldCheck />
    }
  ];

  return (
    <FeatureWrapper>
      <Container>
        <Row className="g-0 justify-content-center align-items-center">
          {featureData.map(item => (
            <Col key={item.id} xs={6} sm={6} lg={3}>
              <FeatureItem>
                <IconWrap className="feature-icon">{item.icon}</IconWrap>
                <FeatureInfo>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </FeatureInfo>
              </FeatureItem>
            </Col>
          ))}
        </Row>
      </Container>
    </FeatureWrapper>
  );
};

export default Features;
