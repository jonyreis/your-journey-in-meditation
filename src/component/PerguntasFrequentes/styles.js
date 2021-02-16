import styled from 'styled-components'

export const PerguntasFrequentesContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 0;
  h1 {
    font-size: 36px;
    text-align: center;

    margin: 16px 0 32px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    li {
      margin: 40px 0;
    }
    .grid-pergunta {
      display: grid;
      grid-template-columns: 1fr 5fr;
      gap: 10px;
      img {
        max-width: 60px;
      }
      h3 {
        font-size: 22px;
        line-height: 26px;
        text-align: left;

        margin-bottom: 8px;
      }
      p {
        font-size: 16px;
        line-height: 28px;
        text-align: left;

        margin: 10px 0;
      }
    }
  }

`
