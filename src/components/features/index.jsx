import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices, keyframes } from "@styled";
import { HiOutlineTruck, HiOutlineClock, HiOutlineShieldCheck, HiOutlineCreditCard } from "react-icons/hi";

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FeatureWrapper = styled.div`
  background: transparent;
  position: relative;
  z-index: 10;
  margin-top: -60px;
  margin-bottom: 0;
  padding: 0 20px;

  ${devices.md} {
    margin-top: 0;
    padding: 0;
  }
`;

const FeatureInner = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.8);
  overflow: hidden;

  ${devices.md} {
    border-radius: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    border: none;
    background: #fff;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 36px 28px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: linear-gradient(180deg, transparent, rgba(0,0,0,0.06), transparent);
  }

  &:last-child::after {
    display: none;
  }

  ${devices.lg} {
    padding: 30px 20px;
  }

  ${devices.md} {
    justify-content: flex-start;
    text-align: left;
    padding: 28px 24px;
    
    &::after {
      right: 0;
      top: auto;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent);
    }
  }

  &:hover {
    .feature-icon {
      transform: scale(1.08);
      background: ${themeGet('colors.primary')};
      color: #fff;
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
  background: linear-gradient(135deg, rgba(212, 5, 17, 0.08), rgba(212, 5, 17, 0.04));
  color: ${themeGet('colors.primary')};
  font-size: 24px;
  margin-right: 18px;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  ${devices.md} {
    margin-right: 16px;
    width: 52px;
    height: 52px;
  }
`

const FeatureInfo = styled.div`
  h4 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 4px;
    color: #111;
    letter-spacing: -0.2px;
  }
  p {
    margin: 0;
    font-size: 13px;
    color: #888;
    line-height: 1.5;
    font-weight: 400;
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
