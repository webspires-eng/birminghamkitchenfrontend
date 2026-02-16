import { Container, Row, Col } from "@bootstrap";
import styled, { themeGet, devices } from "@styled";
import Button from "@components/ui/button";

const ShowcaseWrap = styled.section`
  overflow: hidden;
  position: relative;
`;

const ShowcaseContent = styled.div`
  padding: 100px 0;
  
  ${devices.md} {
    padding: 60px 0;
    text-align: center;
  }

  h5 {
    color: ${themeGet('colors.primary')};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 25px;
    line-height: 1.2;
    color: #191919;

    ${devices.md} {
      font-size: 32px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 40px;
    max-width: 540px;

    ${devices.md} {
      margin: 0 auto 30px;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  height: 100%;
  min-height: 500px;
  
  ${devices.md} {
    min-height: 350px;
    margin-top: 30px;
  }

  ${devices.xs} {
    min-height: 250px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;

const BrandShowcase = () => {
  return (
    <ShowcaseWrap className="bg-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <ShowcaseContent>
              <h5>Our Craftsmanship</h5>
              <h2>Designed for Life, Built to Last.</h2>
              <p>
                Every Birmingham Kitchen & Bedroom is a masterpiece of British engineering.
                We combine traditional artisan techniques with modern innovation to create
                spaces that are as functional as they are beautiful.
              </p>
              <Button
                tag="a"
                href="/about"
                color="white"
                bg="primary"
                hvrBg="heading"
                hvrColor="white"
                className="px-5 py-3"
              >
                LEARN MORE ABOUT US
              </Button>
            </ShowcaseContent>
          </Col>
          <Col lg={6}>
            <ImageWrap>
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Kitchen Showcase"
              />
            </ImageWrap>
          </Col>
        </Row>
      </Container>
    </ShowcaseWrap>
  );
};

export default BrandShowcase;
