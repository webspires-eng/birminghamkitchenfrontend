import styled, { devices, space, themeGet } from "@styled";

export const ContactWrapper = styled.section`
  ${space};
  padding: 40px 0;
  background: white;

  .section-title {
    text-align: center;
    margin-bottom: 60px;
    h2 { font-size: 36px; color: ${themeGet('colors.heading')}; margin-bottom: 10px; }
    p { color: ${themeGet('colors.text')}; opacity: 0.8; }
  }
`;

export const ContactInfoCard = styled.div`
  padding: 50px 40px;
  background-color: ${themeGet('colors.offWhiteLight')};
  border-radius: 24px;
  height: 100%;
  box-shadow: 0 10px 40px rgba(0,0,0,0.02);
  border: 1px solid white;

  ${devices.md} {
    margin-bottom: 40px;
  }
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  group: hover;

  &:last-child {
    margin-bottom: 0;
  }

  .icon {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: ${themeGet('colors.primary')};
    margin-right: 25px;
    flex-shrink: 0;
    box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    transition: all 0.3s ease;
  }

  &:hover .icon {
    background: ${themeGet('colors.primary')};
    color: white;
    transform: scale(1.1) rotate(-5deg);
  }

  .content {
    h4 {
      font-size: 20px;
      margin-bottom: 10px;
      color: ${themeGet('colors.heading')};
      font-family: ${themeGet('fonts.heading')};
    }
    p, a {
      font-size: 16px;
      color: ${themeGet('colors.text')};
      text-decoration: none;
      line-height: 1.7;
      display: block;
      opacity: 0.8;
    }
    a:hover {
      color: ${themeGet('colors.primary')};
      opacity: 1;
    }
  }
`;

export const ContactFormWrap = styled.div`
  padding: 60px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.05);
  border: 1px solid ${themeGet('colors.borderLight')};

  ${devices.md} {
    padding: 40px;
  }

  ${devices.sm} {
    padding: 30px 20px;
  }

  h3 {
    font-size: 28px;
    margin-bottom: 35px;
    color: ${themeGet('colors.heading')};
    font-family: ${themeGet('fonts.heading')};
  }

  input, textarea {
    background-color: ${themeGet('colors.offWhiteLight')};
    border-color: transparent;
    padding: 15px 20px;
    border-radius: 12px;

    &:focus {
      background-color: white;
      border-color: ${themeGet('colors.primary')};
      box-shadow: 0 0 0 4px rgba(126, 45, 103, 0.1);
    }
  }
`;

export const ContactMapWrap = styled.div`
  height: 500px;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  margin-top: 100px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border: 4px solid white;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(0.2) contrast(1.1);
  }

  ${devices.md} {
    height: 350px;
    margin-top: 60px;
  }
`;
