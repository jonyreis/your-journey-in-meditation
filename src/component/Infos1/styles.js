import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const InfosContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    @media (max-width: 970px) {
        padding: 0 20px;
    }
    .nosso-cerebro {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        width: 100%;
        margin: 0;
        @media (max-width: 870px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        p {
            font-size: 20px;
            font-weight: 26px;
            text-align: left;
            max-width: 540px;
            @media (max-width: 870px) {
                max-width: 800px;
            }
        }
        img {
            display: block;
            margin: 0 auto;
            @media (max-width: 870px) {
                max-width: 100%;
                margin-bottom: 40px;
            }
        }
    }
    h1 {
        color: ${colors.secondary};
        font-size: 48px;
        line-height: 50px;
        font-weight: 700;
        text-align: center;
        max-width: 780px;
        margin: 0 auto;
        @media (max-width: 600px) {
            font-size: 38px;
            line-height: 44px;
        }
    }
    p {
        font-size: 20px;
        font-weight: 26px;
        text-align: center;
        margin: 80px 0;
        @media (max-width: 870px) {
            text-align: left;
            margin: 40px 0;
        }
    }
`
