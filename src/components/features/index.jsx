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
    padding: 24px 16px;
    
    &::after {
      display: none;
    }
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
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #f5f5f5;
  color: ${themeGet('colors.primary')};
  font-size: 22px;
  margin-right: 16px;
  flex-shrink: 0;
  transition: all 0.3s ease;
`

const FeatureInfo = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 3px;
    color: #111;
    letter-spacing: -0.2px;
  }
  p {
    margin: 0;
    font-size: 13px;
    color: #999;
    line-height: 1.4;
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
