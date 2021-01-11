import styled from 'styled-components';

export const MelhoraContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    h2 {
        font-size: 36px;
        font-weight: bold;
        text-align: center;
    }
    .melhorias {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin: 80px auto 120px;
        div {
            text-align: center;
            h3 {
                line-height: 22px;
                font-size: 22px;
                font-weight: 700;
                margin: 16px 0;
            }
            p {
                color: #333;
                font-size: 16px;
                line-height: 22px;
            }
        }
    }
`