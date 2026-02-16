import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices, keyframes } from "@styled";
import { HiOutlineTruck, HiOutlineClock, HiOutlineShieldCheck, HiOutlineCreditCard } from "react-icons/hi";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const FeatureWrapper = styled.div`
  background: transparent;
  position: relative;
  z-index: 10;
  margin-top: -80px; /* Pull up more into hero */
  margin-bottom: 60px;

  ${devices.md} {
    margin-top: 0;
    margin-bottom: 30px;
    background: #fff;
  }
`;

const FeatureInner = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 5px 0;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  border: 1px solid rgba(0,0,0,0.03);

  ${devices.md} {
    border-radius: 0;
    box-shadow: none;
    border: none;
    padding: 20px 0;
    margin-top: -20px; /* Slight overlap on mobile or none */
    background: transparent;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 25px;
  transition: all 0.3s ease;
  border-right: 1px solid #f0f0f0;

  &:last-child {
    border-right: none;
  }

  ${devices.lg} {
      padding: 30px 15px;
  }

  ${devices.md} {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 30px 15px;
    border-right: none;
    border-bottom: 1px solid #f0f0f0;
  }

  &:hover {
    .feature-icon {
      animation: ${float} 2s ease infinite;
    }
  }
`;

const IconWrap = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(212, 5, 17, 0.08); /* Light red tint */
  color: ${themeGet('colors.primary')};
  font-size: 28px;
  margin-right: 20px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${devices.md} {
    margin-right: 0;
    margin-bottom: 18px;
    width: 70px;
    height: 70px;
  }
`

const FeatureInfo = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #191919;
    letter-spacing: -0.2px;
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Free Delivery",
      content: "On all orders across the UK",
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
        <FeatureInner>
          <Row className="g-0 justify-content-center align-items-center">
            {featureData.map(item => (
              <Col key={item.id} xs={12} sm={6} lg={3}>
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
        </FeatureInner>
      </Container>
    </FeatureWrapper>
  );
};

export default Features;
