import styled from 'styled-components'

export const EquipeContainer = styled.div`
  background: #f5f5f5;
  .container {
    max-width: 960px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 20px;
    align-items: center;

    padding: 100px 0;
    @media (max-width: 970px) {
      grid-template-columns: 1fr;
      padding: 40px 20px;
    }
    h2 {
      margin-bottom: 8px;
    }
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
    }
    h3 {
      margin-top: 40px;
      @media (max-width: 970px) {
        display: none;
      }
    }
    img {
      max-height: 400px;
      @media (max-width: 970px) {
        display: block;

        margin: 0 auto;
      }
      @media (max-width: 660px) {
        max-width: 100%;
      }
    }
    #h3-order {
      display: none;
      @media (max-width: 970px) {
        display: block;
        margin-top: 16px;
      }
      @media (max-width: 540px) {
        font-size: 16px;
      }
    }
  }
`
