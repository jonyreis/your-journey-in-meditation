import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const InfosContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    .nosso-cerebro {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        width: 100%;
        margin: 0;
        p {
            font-size: 20px;
            font-weight: 26px;
            text-align: left;
            max-width: 540px;
        }
        img {
            display: block;
            margin: 0 auto;
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
    }
    p {
        font-size: 20px;
        font-weight: 26px;
        text-align: center;
        margin: 80px 0;
    }
`