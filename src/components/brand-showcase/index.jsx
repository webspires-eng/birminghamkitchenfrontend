import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices, keyframes } from "@styled";
import Button from "@components/ui/button";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const ShowcaseWrap = styled.section`
  overflow: hidden;
  position: relative;
  background-color: #fafaf8;
`;

const ContentCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShowcaseContent = styled.div`
  padding: 100px 0;
  max-width: 520px;
  
  ${devices.md} {
    padding: 60px 20px;
    text-align: center;
    margin: 0 auto;
  }
`;

const ShowcaseLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${themeGet('colors.primary')};
  margin-bottom: 24px;

  &::before {
    content: '';
    width: 30px;
    height: 2px;
    background: ${themeGet('colors.primary')};
  }

  ${devices.md} {
    justify-content: center;
    &::before { display: none; }
  }
`;

const ShowcaseHeading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 28px;
  line-height: 1.1;
  color: #111;
  letter-spacing: -1.5px;

  ${devices.lg} {
    font-size: 40px;
  }

  ${devices.md} {
    font-size: 34px;
    letter-spacing: -0.5px;
  }
`;

const ShowcaseText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #777;
  margin-bottom: 40px;
  
  ${devices.md} {
    margin: 0 auto 32px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 620px;
  width: 100%;
  
  ${devices.md} {
    min-height: 400px;
    margin-top: 0;
  }

  ${devices.sm} {
    min-height: 320px;
  }
`;

const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    ${devices.md} {
      border-radius: 0;
    }
  }
`;

const StatsGrid = styled.div`
  position: absolute;
  bottom: 40px;
  left: -40px;
  display: flex;
  gap: 16px;
  z-index: 2;
  animation: ${float} 4s ease infinite;

  ${devices.lg} {
    left: 0;
    bottom: 30px;
  }

  ${devices.md} {
    display: none;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 24px 28px;
  border-radius: 14px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  text-align: center;
  min-width: 120px;

  .stat-value {
    font-size: 36px;
    color: ${themeGet('colors.primary')};
    font-weight: 800;
    line-height: 1;
    margin-bottom: 6px;
    font-family: ${themeGet('fonts.montserrat')};
  }

  .stat-label {
    font-size: 11px;
    color: #888;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.3;
  }
`;

const BrandShowcase = () => {
  return (
    <ShowcaseWrap>
      <Container fluid className="p-0">
        <Row className="g-0 align-items-stretch">
          <ContentCol lg={6}>
            <Container>
              <ShowcaseContent>
                <ShowcaseLabel>Our Craftsmanship</ShowcaseLabel>
                <ShowcaseHeading>Designed for Life, Built to Last.</ShowcaseHeading>
                <ShowcaseText>
                  Every Birmingham Kitchen & Bedroom is a masterpiece of British engineering.
                  We combine traditional artisan techniques with modern innovation to create
                  spaces that are as functional as they are beautiful.
                </ShowcaseText>
                <Button
                  tag="a"
                  href="/about"
                  color="white"
                  bg="primary"
                  hvrBg="black"
                  hvrColor="white"
                  className="px-5 py-3"
                  style={{
                    borderRadius: '0',
                    letterSpacing: '2.5px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    padding: '16px 40px'
                  }}
                >
                  Discover Our Story
                </Button>
              </ShowcaseContent>
            </Container>
          </ContentCol>
          <Col lg={6}>
            <ImageContainer>
              <ImageWrap>
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Kitchen Showcase"
                />
              </ImageWrap>

              <StatsGrid>
                <StatCard>
                  <div className="stat-value">25+</div>
                  <div className="stat-label">Years of<br />Excellence</div>
                </StatCard>
                <StatCard>
                  <div className="stat-value">5K+</div>
                  <div className="stat-label">Projects<br />Delivered</div>
                </StatCard>
              </StatsGrid>
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </ShowcaseWrap>
  );
};

export default BrandShowcase;
