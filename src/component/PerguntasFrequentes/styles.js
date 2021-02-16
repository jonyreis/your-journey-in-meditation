import styled from 'styled-components'

import { colors } from '../../styles/globalStyles'

export const PerguntasFrequentesContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 970px) {
    padding: 0 16px;
  }
  h1 {
    color: #9465D0;
    font-size: 36px;
    text-align: center;

    margin: 16px 0 32px;
    @media (max-width: 420px) {
      font-size: 32px;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    @media (max-width: 1100px) {
      gap: 40px;
    }
    @media (max-width: 970px) {
      gap: 40px;
    }
    @media (max-width: 780px) {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    li {
      margin: 40px 0;
      @media (max-width: 780px) {
        margin: 20px 0;
      }
    }
    .grid-pergunta {
      display: grid;
      grid-template-columns: 1fr 5fr;
      gap: 10px;
      @media (max-width: 780px) {
        grid-template-columns: 1fr 6fr;

        max-width: 100vw;

        margin: 0 auto;
        padding: 0 20px;
      }
      @media (max-width: 540px) {
        max-width: 100vw;
      }
      img {
        max-width: 60px;
        @media (max-width: 540px) {
          max-width: 40px;
        }
      }
      h3 {
        font-size: 22px;
        line-height: 26px;
        text-align: left;

        margin-bottom: 8px;
        @media (max-width: 380px) {
          font-size: 18px;
          line-height: 24px;
        }
      }
      p {
        font-size: 16px;
        line-height: 28px;
        text-align: left;

        margin: 10px 0;
        @media (max-width: 380px) {
          font-size: 15px;
          line-height: 24px;
        }
      }
    }
  }
  button {
    background-color: ${colors.orange};
    border: none;
    color: ${colors.white};
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    display: block;

    max-width: 100%;
    margin: 16px auto;
    padding: 8px 32px;
    outline: none;
    cursor: pointer;
    @media (max-width: 420px) {
        font-size: 18px;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
    span {
        text-decoration: underline;
    }
    &:hover {
        outline: none;
        /* border: 1.5px solid ${colors.white}; */
        /* box-shadow: 0 0 0 1.5px ${colors.white}; */
        background-color: #FF5000;
    }
  }
`
