import styled from 'styled-components';
import { colors } from '../styles/globalStyles'


export const ContatoContainer = styled.div`
  .container {
    max-width: 600px;
    margin: 80px auto 0;
    min-height: calc(100vh);
    @media (max-width: 640px) {
      padding: 0 20px;
    }
    h1 {
      color: ${colors.primary};
      font-size: 40px;
      font-weight: 700;
      text-align: center;
    }
    p {
      color: ${colors.primary};
      font-size: 24px;
      text-align: center;

      margin: 16px 0;
    }
    form {
      max-width: 600px;
      input, textarea {
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #111;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;

        width: 100%;
        max-width: 600px;
        margin: 8px 0;
        padding: 16px 8px;
        outline-color: ${colors.primary};
        &::placeholder {
          color: #111;
          font-size: 16px;
          font-weight: 500;
          font-size: sans-serif;
        }
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        @media (max-width: 420px) {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
        }
        input {
          margin: 0;
          @media (max-width: 420px) {
            margin: 8px 0;
          }
        }
      }
      button {
        background-color: ${colors.orange};
        border: none;
        border-radius: 4px;

        color: #fff;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        padding: 16px 32px;
        cursor: pointer;
        @media (max-width: 420px) {
          width: 100%;
          text-align: center;
          margin-bottom: 24px;
        }
      }
    }
  }
`;
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

export const ObrigadoContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  h1 {
    margin: 40px 0;
  }
  div {
    background-color: #eee;

    display: grid;
    grid-template-columns: 3fr 2fr;

    max-width: 960px;
    height: 480px;
    margin: 40px auto 0;
    padding: 32px;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
    img {
      max-width: 100%;
      align-self: center;
    }
    h3 {
      align-self: center;
    }
  }
`
