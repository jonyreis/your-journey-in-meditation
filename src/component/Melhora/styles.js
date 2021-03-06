import styled from 'styled-components';

export const MelhoraContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;

    padding: 80px 0;
    @media (max-width: 960px) {
        padding: 80px 20px;
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
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        margin: 0 auto;
        @media (max-width: 960px) {
            display: flex;
        }
        @media (max-width: 760px) {
            flex-wrap: wrap;
        }
        div {
            text-align: center;
            max-width: 300px;
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
