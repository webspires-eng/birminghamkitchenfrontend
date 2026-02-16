import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices } from "@styled";
import Button from "@components/ui/button";

const ShowcaseWrap = styled.section`
  overflow: hidden;
  position: relative;
  background-color: #fafaeb; /* Subtle warm tone */
`;

const ContentCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShowcaseContent = styled.div`
  padding: 100px 0;
  max-width: 540px;
  
  ${devices.md} {
    padding: 60px 0;
    text-align: center;
    margin: 0 auto;
  }

  h5 {
    color: ${themeGet('colors.primary')};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 20px;
    font-size: 13px;
    display: inline-block;
    position: relative;
    padding-left: 50px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      height: 2px;
      width: 40px;
      background: ${themeGet('colors.primary')};
    }

    ${devices.md} {
      padding-left: 0;
      &::before {
        display: none;
      }
    }
  }

  h2 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 30px;
    line-height: 1.15;
    color: #191919;
    letter-spacing: -1px;

    ${devices.lg} {
      font-size: 42px;
    }

    ${devices.md} {
      font-size: 36px;
    }
  }

  p {
    font-size: 17px;
    line-height: 1.8;
    color: #666;
    margin-bottom: 45px;
    
    ${devices.md} {
      margin: 0 auto 35px;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 600px;
  width: 100%;
  
  ${devices.md} {
    min-height: 400px;
    margin-top: 40px;
  }

  ${devices.sm} {
    min-height: 300px;
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
    box-shadow: -20px 0 60px rgba(0,0,0,0.1);
    
    ${devices.md} {
      box-shadow: none;
      border-radius: 12px;
    }
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  bottom: 80px;
  left: -60px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  max-width: 280px;
  z-index: 2;

  ${devices.lg} {
    left: -30px;
    bottom: 50px;
  }

  ${devices.md} {
    display: none;
  }

  h4 {
    font-size: 42px;
    color: ${themeGet('colors.primary')};
    font-weight: 800;
    line-height: 1;
    margin-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: #555;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const BrandShowcase = () => {
  return (
    <ShowcaseWrap>
      <Container fluid className="p-0">
        <Row className="g-0 align-items-stretch">
          <ContentCol lg={6}>
            <Container> {/* Inner container for content alignment */}
              <ShowcaseContent>
                <h5>Our Craftsmanship</h5>
                <h2>Designed for Life, Built to Last.</h2>
                <p>
                  Every Birmingham Kitchen & Bedroom is a masterpiece of British engineering.
                  We combine traditional artisan techniques with modern innovation to create
                  spaces that are as functional as they are beautiful.
                  Experience the difference of bespoke design tailored perfectly to your home.
                </p>
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
                    letterSpacing: '2px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase'
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

              <FloatingCard>
                <h4>25+</h4>
                <span>Years of Excellence in British Design</span>
              </FloatingCard>
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </ShowcaseWrap>
  );
};

export default BrandShowcase;
