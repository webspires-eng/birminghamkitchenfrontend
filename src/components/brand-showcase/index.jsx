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
  padding: 60px 0;

  ${devices.sm} {
    padding: 40px 0;
  }
`;

const ContentCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const ShowcaseContent = styled.div`
  max-width: 480px;
  
  ${devices.md} {
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
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
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.1;
  color: #111;
  letter-spacing: -1.5px;

  ${devices.lg} {
    font-size: 36px;
  }

  ${devices.md} {
    font-size: 30px;
    letter-spacing: -0.5px;
  }
`;

const ShowcaseText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #777;
  margin-bottom: 36px;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  min-height: 420px;
  
  ${devices.md} {
    min-height: 300px;
    margin-top: 30px;
  }

  ${devices.xs} {
    min-height: 240px;
    margin-top: 24px;
    border-radius: 8px;
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
    border-radius: 12px;
  }
`;

const StatsGrid = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  gap: 12px;
  z-index: 2;
  animation: ${float} 4s ease infinite;

  ${devices.md} {
    bottom: 16px;
    left: 16px;
  }

  ${devices.xs} {
    bottom: 12px;
    left: 12px;
    gap: 8px;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 20px 24px;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
  text-align: center;
  min-width: 110px;

  .stat-value {
    font-size: 30px;
    color: ${themeGet('colors.primary')};
    font-weight: 800;
    line-height: 1;
    margin-bottom: 4px;
    font-family: ${themeGet('fonts.montserrat')};
  }

  .stat-label {
    font-size: 10px;
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
      <Container>
        <Row className="align-items-center">
          <ContentCol lg={6}>
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
                style={{
                  borderRadius: '0',
                  letterSpacing: '2.5px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  padding: '14px 36px'
                }}
              >
                Discover Our Story
              </Button>
            </ShowcaseContent>
          </ContentCol>
          <Col lg={6}>
            <ImageContainer>
              <ImageWrap>
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
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
