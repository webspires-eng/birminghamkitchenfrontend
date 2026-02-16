import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices } from "@styled";
import { HiOutlineTruck, HiOutlineClock, HiOutlineShieldCheck, HiOutlineCreditCard } from "react-icons/hi";

const FeatureWrapper = styled.div`
  background-color: ${themeGet('colors.white')};
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  
  ${devices.md} {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 30px 0;
  }
`;

const IconWrap = styled.div`
  font-size: 40px;
  color: ${themeGet('colors.primary')};
  margin-right: 20px;
  display: flex;
  align-items: center;

  ${devices.md} {
    margin-right: 0;
    margin-bottom: 15px;
  }
`

const FeatureInfo = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #666;
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
        <Row className="justify-content-center">
          {featureData.map(item => (
            <Col key={item.id} xs={10} sm={6} lg={3}>
              <FeatureItem>
                <IconWrap>{item.icon}</IconWrap>
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
