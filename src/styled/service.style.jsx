import styled, { devices, themeGet, keyframes } from "@styled";

/* ──────────── Hero Banner ──────────── */
export const ServiceHero = styled.section`
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: url(${({ bg }) => bg}) center / cover no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 760px;
    padding: 0 20px;

    h1 {
      font-size: 56px;
      font-weight: 800;
      color: #fff;
      font-family: ${themeGet('fonts.heading')};
      line-height: 1.15;
      margin-bottom: 20px;
      letter-spacing: -1px;

      ${devices.md} { font-size: 38px; }
      ${devices.sm} { font-size: 30px; }
    }

    p {
      font-size: 19px;
      color: rgba(255,255,255,0.85);
      line-height: 1.7;
      margin-bottom: 32px;

      ${devices.sm} { font-size: 16px; }
    }

    .hero-cta {
      display: inline-block;
      padding: 16px 48px;
      background: ${themeGet('colors.primary')};
      color: #fff;
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: none;
      transition: all 0.35s ease;
      border: 2px solid ${themeGet('colors.primary')};

      &:hover {
        background: transparent;
        color: #fff;
        border-color: #fff;
      }
    }
  }

  ${devices.md} { min-height: 400px; }
  ${devices.sm} { min-height: 340px; }
`;

/* ──────────── Intro / About ──────────── */
export const ServiceIntro = styled.section`
  padding: 80px 0;
  background: #fff;

  ${devices.md} { padding: 50px 0; }

  .intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;

    ${devices.md} {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .intro-image {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.12);
    max-height: 480px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .intro-text {
    h2 {
      font-size: 40px;
      font-family: ${themeGet('fonts.heading')};
      color: ${themeGet('colors.heading')};
      margin-bottom: 24px;
      line-height: 1.2;

      ${devices.sm} { font-size: 28px; }
    }

    p {
      font-size: 17px;
      line-height: 1.85;
      color: ${themeGet('colors.text')};
      margin-bottom: 18px;
      opacity: 0.88;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 24px 0 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;

      ${devices.sm} { grid-template-columns: 1fr; }

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        font-weight: 600;
        color: ${themeGet('colors.heading')};

        .check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: ${themeGet('colors.primary')};
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }
      }
    }
  }
`;

/* ──────────── Features Grid ──────────── */
export const ServiceFeatures = styled.section`
  padding: 80px 0;
  background: ${themeGet('colors.offWhiteLight')};

  ${devices.md} { padding: 50px 0; }

  .section-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 50px;

    h2 {
      font-size: 40px;
      font-family: ${themeGet('fonts.heading')};
      color: ${themeGet('colors.heading')};
      margin-bottom: 16px;

      ${devices.sm} { font-size: 28px; }
    }

    p {
      font-size: 17px;
      color: ${themeGet('colors.text')};
      opacity: 0.75;
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${devices.md} { grid-template-columns: repeat(2, 1fr); }
    ${devices.sm} { grid-template-columns: 1fr; }
  }

  .feature-card {
    background: #fff;
    border-radius: 20px;
    padding: 48px 32px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.1);

      .icon-wrap {
        background: ${themeGet('colors.primary')};
        color: #fff;
      }
    }

    .icon-wrap {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: rgba(212, 5, 17, 0.08);
      color: ${themeGet('colors.primary')};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      margin: 0 auto 24px;
      transition: all 0.35s ease;
    }

    h4 {
      font-size: 22px;
      font-family: ${themeGet('fonts.heading')};
      margin-bottom: 14px;
      color: ${themeGet('colors.heading')};
    }

    p {
      font-size: 15px;
      line-height: 1.7;
      color: ${themeGet('colors.text')};
      opacity: 0.82;
    }
  }
`;

/* ──────────── Process / How It Works ──────────── */
export const ServiceProcess = styled.section`
  padding: 80px 0;
  background: #fff;

  ${devices.md} { padding: 50px 0; }

  .section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 50px;

    h2 {
      font-size: 40px;
      font-family: ${themeGet('fonts.heading')};
      color: ${themeGet('colors.heading')};
      margin-bottom: 16px;

      ${devices.sm} { font-size: 28px; }
    }

    p {
      font-size: 17px;
      color: ${themeGet('colors.text')};
      opacity: 0.75;
    }
  }

  .process-timeline {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    position: relative;

    ${devices.md} { grid-template-columns: repeat(2, 1fr); }
    ${devices.sm} { grid-template-columns: 1fr; }

    &::before {
      content: '';
      position: absolute;
      top: 36px;
      left: 10%;
      right: 10%;
      height: 2px;
      background: ${themeGet('colors.borderLight')};

      ${devices.md} { display: none; }
    }
  }

  .process-step {
    text-align: center;
    position: relative;

    .step-number {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: ${themeGet('colors.primary')};
      color: #fff;
      font-size: 26px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      font-family: ${themeGet('fonts.heading')};
      position: relative;
      z-index: 2;
      box-shadow: 0 8px 24px rgba(212, 5, 17, 0.25);
    }

    h4 {
      font-size: 20px;
      font-family: ${themeGet('fonts.heading')};
      margin-bottom: 12px;
      color: ${themeGet('colors.heading')};
    }

    p {
      font-size: 15px;
      line-height: 1.65;
      color: ${themeGet('colors.text')};
      opacity: 0.8;
      max-width: 240px;
      margin: 0 auto;
    }
  }
`;

/* ──────────── Gallery ──────────── */
export const ServiceGallery = styled.section`
  padding: 80px 0;
  background: ${themeGet('colors.offWhiteLight')};

  ${devices.md} { padding: 50px 0; }

  .section-header {
    text-align: center;
    margin-bottom: 50px;

    h2 {
      font-size: 40px;
      font-family: ${themeGet('fonts.heading')};
      color: ${themeGet('colors.heading')};
      margin-bottom: 16px;

      ${devices.sm} { font-size: 28px; }
    }

    p {
      font-size: 17px;
      color: ${themeGet('colors.text')};
      opacity: 0.75;
    }
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    ${devices.md} { grid-template-columns: repeat(2, 1fr); }
    ${devices.sm} { grid-template-columns: 1fr; }
  }

  .gallery-item {
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    height: 320px;
    cursor: pointer;

    ${devices.sm} { height: 240px; }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%);
      opacity: 0;
      transition: opacity 0.35s ease;
    }

    .gallery-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 24px;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      z-index: 2;
      transform: translateY(10px);
      opacity: 0;
      transition: all 0.35s ease;
    }

    &:hover {
      img { transform: scale(1.08); }
      &::after { opacity: 1; }
      .gallery-caption { transform: translateY(0); opacity: 1; }
    }
  }
`;

/* ──────────── Testimonial / Trust Banner ──────────── */
export const ServiceTestimonial = styled.section`
  padding: 80px 0;
  background: #111;
  color: #fff;
  text-align: center;

  ${devices.md} { padding: 50px 0; }

  .testimonial-content {
    max-width: 700px;
    margin: 0 auto;

    .quote-icon {
      font-size: 52px;
      color: ${themeGet('colors.primary')};
      margin-bottom: 24px;
      opacity: 0.6;
    }

    blockquote {
      font-size: 24px;
      line-height: 1.7;
      font-style: italic;
      color: rgba(255,255,255,0.9);
      margin-bottom: 28px;
      font-family: ${themeGet('fonts.heading')};

      ${devices.sm} { font-size: 18px; }
    }

    .author {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${themeGet('colors.primary')};
    }
  }
`;

/* ──────────── FAQ Section ──────────── */
export const ServiceFAQ = styled.section`
  padding: 80px 0;
  background: #fff;

  ${devices.md} { padding: 50px 0; }

  .section-header {
    text-align: center;
    margin-bottom: 50px;

    h2 {
      font-size: 40px;
      font-family: ${themeGet('fonts.heading')};
      color: ${themeGet('colors.heading')};
      margin-bottom: 16px;

      ${devices.sm} { font-size: 28px; }
    }

    p {
      font-size: 17px;
      color: ${themeGet('colors.text')};
      opacity: 0.75;
    }
  }

  .faq-list {
    max-width: 780px;
    margin: 0 auto;
  }

  .faq-item {
    border-bottom: 1px solid ${themeGet('colors.borderLight')};

    &:first-child { border-top: 1px solid ${themeGet('colors.borderLight')}; }
  }

  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 0;
    cursor: pointer;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    gap: 16px;

    h4 {
      font-size: 18px;
      font-family: ${themeGet('fonts.heading')};
      color: ${themeGet('colors.heading')};
      margin: 0;
      flex: 1;
    }

    .faq-icon {
      font-size: 20px;
      color: ${themeGet('colors.primary')};
      transition: transform 0.3s ease;
      flex-shrink: 0;

      &.open { transform: rotate(45deg); }
    }
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease;

    &.open {
      max-height: 500px;
      padding-bottom: 22px;
    }

    p {
      font-size: 16px;
      line-height: 1.8;
      color: ${themeGet('colors.text')};
      opacity: 0.85;
    }
  }
`;

/* ──────────── CTA ──────────── */
export const ServiceCTA = styled.section`
  padding: 80px 0;
  text-align: center;
  background: ${themeGet('colors.primary')};
  color: #fff;
  position: relative;
  overflow: hidden;

  ${devices.md} { padding: 50px 0; }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 60%;
    height: 200%;
    background: rgba(255,255,255,0.04);
    transform: rotate(-25deg);
  }

  .cta-inner {
    position: relative;
    z-index: 2;

    h2 {
      font-size: 46px;
      font-family: ${themeGet('fonts.heading')};
      margin-bottom: 20px;
      color: #fff;

      ${devices.md} { font-size: 32px; }
    }

    p {
      font-size: 19px;
      color: rgba(255,255,255,0.88);
      margin-bottom: 36px;
      max-width: 560px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-btn {
      display: inline-block;
      padding: 18px 52px;
      background: #fff;
      color: ${themeGet('colors.primary')};
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: none;
      transition: all 0.35s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        background: #111;
        color: #fff;
      }
    }
  }
`;
