import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices, keyframes } from "@styled";
import { HiOutlineTruck, HiOutlineClock, HiOutlineShieldCheck, HiOutlineCreditCard } from "react-icons/hi";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const FeatureWrapper = styled.div`
  background: #111;
  position: relative;
  z-index: 10;
  margin-top: -60px;

  ${devices.md} {
    margin-top: 0;
  }
`;

const FeatureInner = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 10px 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 10;

  ${devices.md} {
    border-radius: 0;
    box-shadow: none;
    padding: 10px 0 0;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 20px;
  transition: all 0.3s ease;
  border-radius: 12px;

  ${devices.md} {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 24px 15px;
  }

  &:hover {
    .feature-icon {
      animation: ${float} 2s ease infinite;
    }
  }
`;

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, ${themeGet('colors.primary')}, #ff4444);
  color: #fff;
  font-size: 26px;
  margin-right: 18px;
  flex-shrink: 0;
  box-shadow: 0 6px 20px rgba(212, 5, 17, 0.25);

  ${devices.md} {
    margin-right: 0;
    margin-bottom: 14px;
  }
`

const FeatureInfo = styled.div`
  h4 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 4px;
    color: #191919;
    letter-spacing: 0.3px;
  }
  p {
    margin: 0;
    font-size: 13px;
    color: #888;
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
          <Row className="justify-content-center align-items-center">
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
        </FeatureInner>
      </Container>
    </FeatureWrapper>
  );
};

export default Features;
