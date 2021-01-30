import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const InfosContainer = styled.div`
    .background-h3 {
        background-color: #eee;
        width: 100%;
        h3 {
            color: ${colors.orange};
            font-size: 28px;
            font-weight: 700;
            text-align: center;
            max-width: 930px;
            margin: 0 auto;
            padding: 32px 0;
            @media (max-width: 970px) {
                padding: 40px 20px;
            }
        }
    }
    .container {
        max-width: 960px;
        margin: 0 auto;
        @media (max-width: 970px) {
            padding: 0 20px;
        }
        img {
            display: block;
            margin: 80px auto 36px;
            max-width: 100%;
        }
        p {
            font-size: 20px;
            font-weight: 26px;
            text-align: center;
            margin-bottom: 80px;

        }
    }
`
