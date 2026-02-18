import styled, { devices, themeGet, space } from "@styled";

export const AboutHero = styled.div`
  position: relative;
  height: 70vh;
  min-height: 500px;
  background-image: url('https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2000');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
  }

  .content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
    max-width: 900px;
    padding: 0 20px;

    h1 {
      font-size: 64px;
      font-weight: 700;
      margin-bottom: 24px;
      font-family: ${themeGet('fonts.heading')};
      letter-spacing: -1px;
      line-height: 1.1;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      color: #FFFFFF;
      
      ${devices.md} {
        font-size: 42px;
      }
    }

    p {
      font-size: 20px;
      line-height: 1.6;
      color: #FFFFFF;
      text-shadow: 0 1px 5px rgba(0,0,0,0.2);
      max-width: 700px;
      margin: 0 auto;
    }
  }
`;

export const StatsSection = styled.section`
  padding: 80px 0;
  background-color: white;
  margin-bottom: 100px;
  border-bottom: 1px solid ${themeGet('colors.borderLight')};

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    background: white;
    border-radius: 20px;
    padding: 40px 0;
    box-shadow: 0 20px 60px rgba(0,0,0,0.05);
    margin-top: -60px;
    position: relative;
    z-index: 10;

    ${devices.md} {
      grid-template-columns: repeat(2, 1fr);
      margin-top: -40px;
      gap: 30px 0;
    }

    ${devices.sm} {
      grid-template-columns: 1fr;
    }
  }

  .stat-item {
    padding: 0 20px;
    border-right: 1px solid ${themeGet('colors.borderLight')};

    &:last-child {
      border-right: none;
    }

    ${devices.md} {
      &:nth-child(even) {
        border-right: none;
      }
    }

    ${devices.sm} {
      border-right: none;
    }

    h3 {
      font-size: 42px;
      color: ${themeGet('colors.primary')};
      margin-bottom: 8px;
      font-weight: 700;
      font-family: ${themeGet('fonts.heading')};
    }
    p {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${themeGet('colors.darkgray')};
      font-weight: 600;
    }
  }
`;

export const StorySection = styled.section`
  margin-bottom: 120px;

  .row-item {
    align-items: center;
    margin-bottom: 100px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  .text-content {
    padding: 0 60px;
    
    ${devices.lg} {
      padding: 0 30px;
    }

    ${devices.md} {
      padding: 40px 0 0;
    }

    h2 {
      font-size: 42px;
      margin-bottom: 25px;
      color: ${themeGet('colors.heading')};
      font-family: ${themeGet('fonts.heading')};
      line-height: 1.2;
    }

    p {
      font-size: 17px;
      line-height: 1.9;
      color: ${themeGet('colors.text')};
      margin-bottom: 20px;
      opacity: 0.85;
    }
  }

  .image-wrap {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.12);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const ValuesGrid = styled.section`
  padding: 100px 0;
  background: ${themeGet('colors.offWhiteLight')};

  .section-title {
    text-align: center;
    margin-bottom: 70px;
    
    h2 { 
      font-size: 42px; 
      margin-bottom: 15px;
      font-family: ${themeGet('fonts.heading')};
    }
    p {
      font-size: 18px;
      color: ${themeGet('colors.text')};
      opacity: 0.7;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${devices.md} {
      grid-template-columns: 1fr;
    }
  }

  .value-card {
    padding: 60px 40px;
    background: white;
    border-radius: 24px;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);

    &:hover {
      transform: translateY(-15px);
      box-shadow: 0 40px 80px rgba(0,0,0,0.08);
      
      .icon {
        transform: scale(1.1);
        color: ${themeGet('colors.secondary')};
      }
    }

    .icon {
      font-size: 48px;
      color: ${themeGet('colors.primary')};
      margin-bottom: 30px;
      display: inline-block;
      transition: all 0.4s ease;
    }

    h4 {
      font-size: 24px;
      margin-bottom: 20px;
      font-family: ${themeGet('fonts.heading')};
    }

    p {
      font-size: 16px;
      line-height: 1.7;
      color: ${themeGet('colors.text')};
      opacity: 0.8;
    }
  }
`;

export const CTASection = styled.section`
  padding: 120px 0;
  text-align: center;
  background-color: #7e2d67;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 60%;
    height: 200%;
    background: rgba(255,255,255,0.03);
    transform: rotate(30deg);
  }

  .cta-content {
    position: relative;
    z-index: 1;

    h2 {
      font-size: 48px;
      margin-bottom: 25px;
      font-family: ${themeGet('fonts.heading')};
      color: white;
      
      ${devices.md} { font-size: 32px; }
    }

    p {
      font-size: 20px;
      margin-bottom: 40px;
      color: white;
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn-shop {
      display: inline-block;
      padding: 18px 50px;
      background-color: white;
      color: #7e2d67;
      border-radius: 50px;
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        background-color: ${themeGet('colors.secondary')};
        color: white;
      }
    }
  }
`;
