import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const ApresentacaoEbookContainer = styled.div`
    .width-960 {
        max-width: 960px;
        margin: 0 auto;
    }
    .container-1 {
        background: linear-gradient(75.12deg, #671EAA 11.69%, rgba(169, 64, 238, 0.83) 106.88%);
        width: 100%;
        min-height: 108vh;
        max-height: 108vh;
        padding: 50px;
        .conteudo-1 {
            text-align: center;
            h2 {
                color: ${colors.white};
                font-size: 27px;
                font-weight: 700;
                span {
                    color: ${colors.yellow};
                }
            }
            img {
                display: block;
                margin: 0 auto 3rem;
            }
            a {
                background-color: ${colors.orange};
                border: none;
                color: ${colors.white};
                font-size: 24px;
                font-weight: 700;
                text-decoration: none;
                width: 100%;
                padding: 8px 32px;
                outline: none;
                cursor: pointer;
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
        }
    }
    .container-2 {
        background: ${colors.white};
        width: 100%;
        min-height: 108vh;
        max-height: 108vh;
        padding: 40px;
        .conteudo-2 {
            color: #333;
            text-align: center;
            max-width: 960px;
            h2 {
                font-size: 36px;
                font-weight: 700;
                max-width: 780px;
                margin: 0 auto;
                span {
                    color: ${colors.yellow};
                }
            }
            .capa-aprender {
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin: 3rem 0;
                img {
                }
                div {
                    margin-top: 3rem;
                    text-align: left;

                    h3 {
                        font-size: 24px;
                    }
                    li {
                        display: flex;
                        align-items: center;
                        margin: 24px 0;
                        span {
                            margin-left: 16px;
                        }
                    }
                }
            }
        }
    }
`