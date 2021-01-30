import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const GarantiaContainer = styled.div`
    background: linear-gradient(75.12deg, #671EAA 11.69%, rgba(169, 64, 238, 0.83) 106.88%);
    display: block;
    text-align: center;

    width: 100%;
    padding: 16px 0 32px;
    @media (max-width: 970px) {
        padding: 40px 20px;
    }
    .grid-garantia {
        display: grid;
        grid-template-columns: 4fr 7fr;
        max-width: 920px;
        margin: 0 auto;
        padding: 32px 0;
        @media (max-width: 680px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            margin-top: 10px;
        }
        div {
            margin-top: 80px;
            color: #fff;
            @media (max-width: 680px) {
                max-width: 540px;
                margin-top: 40px;
            }
            h3 {
                font-size: 24px;
                text-align: left;
            }
            p {
                font-size: 16px;
                line-height: 26px;
                text-align: left;

                margin: 10px 0;
            }
        }
    }
    a {
        text-decoration: none;
        margin: 30px auto 0;
    }
    button {
        background-color: ${colors.orange};
        border: none;
        color: ${colors.white};
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;
        display: block;

        max-width: 910px;
        padding: 8px 32px;
        outline: none;
        cursor: pointer;
        @media (max-width: 420px) {
            font-size: 18px;
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
`;
