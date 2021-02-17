import styled from 'styled-components';

export const MidiaContainer = styled.div`
    .midia {
        max-width: 960px;
        margin: 0 auto 80px;
        @media (max-width: 970px) {
            padding: 0 20px;
        }
        h2 {
            font-size: 40px;
            text-align: center;
            margin-bottom: 40px;
            @media (max-width: 700px) {
                font-size: 32px;
            }
        }
        .noticia {
            h3 {
                font-size: 32px;
                text-align: center;
                @media (max-width: 700px) {
                    font-size: 28px;
                }
            }
            h4 {
                color: #666;
                font-size: 24px;
                margin: 16px 0;
                @media (max-width: 700px) {
                    font-size: 20px;
                }
            }
            p {
                font-size: 16px;
                line-height: 26px;
            }
            img {
                display: block;
                max-width: 100%;
                max-height: 100%;
                margin: 0 auto 20px;
            }
        }
    }
    .meditacao-numeros-background {
        background: linear-gradient(75.12deg, #671EAA 11.69%, rgba(169, 64, 238, 0.83) 106.88%);
    }
    .meditacao-numeros-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 960px;
        padding: 40px 0;
        margin: 0 auto 40px;
        @media (max-width: 760px) {
            flex-direction: column;
            margin: 0 auto;
        }
        div {
            color: #fff;
            text-align: center;
            width: 380px;
            @media (max-width: 760px) {
                margin: 10px auto;
            }
            @media (max-width: 380px) {
                max-width: 100%;
                padding: 16px;
            }
            h2 {
                font-size: 40px;
                font-weight: 700;
            }
            p {
                font-size: 20px;
                margin-top: 8px;
            }
        }
    }
`;
