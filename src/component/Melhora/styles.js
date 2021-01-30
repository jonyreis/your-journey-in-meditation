import styled from 'styled-components';

export const MelhoraContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    @media (max-width: 960px) {
        padding: 0 20px;
    }
    h2 {
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        @media (max-width: 600px) {
            font-size: 28px;
        }
    }
    .melhorias {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin: 80px auto 120px;
        @media (max-width: 960px) {
            display: flex;
        }
        @media (max-width: 760px) {
            flex-wrap: wrap;
        }
        div {
            text-align: center;
            @media (max-width: 760px) {
                max-width: 460px;
                margin: 16px auto;
            }
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
