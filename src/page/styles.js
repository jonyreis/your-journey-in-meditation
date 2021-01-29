import styled from 'styled-components';
import { colors } from '../styles/globalStyles'

export const PoliticaContainer = styled.div`
  background: linear-gradient(75.12deg, #671EAA 11.69%, rgba(169, 64, 238, 0.83) 106.88%);
  color: #fff;
  max-width: 100vw;
  min-height: 100vh;
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 0;
    @media (max-width: 960px) {
      padding: 40px;
    }
    @media (max-width: 600px) {
      padding: 40px 20px;
    }
    a {
      color: #fff;
      &:hover {
        color: ${colors.yellow}
      }
    }
    h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 24px;
      @media (max-width: 960px) {
        font-size: 24px;
      }
    }
    h3 {
      font-size: 19px;
      font-weight: 700;
      margin: 24px 0;
      @media (max-width: 960px) {
        font-size: 18px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 500;
      margin: 16px 0;
    }
  }
`;
