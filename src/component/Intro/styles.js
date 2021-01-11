import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const IntroContainer = styled.main`
    background: linear-gradient(75.12deg, #671EAA 11.69%, rgba(169, 64, 238, 0.83) 106.88%);
    width: 100%;
    min-height: 108vh;
    max-height: 108vh;
    padding: 40px;
    .container {
        max-width: 960px;
        margin: 0 auto;
    }
    h1 {
        color: ${colors.white};
        font-size: 38px;
        line-height: 42px;
        text-align: center;
        max-width: 820px;
        margin: 0 auto;
        span {
            color: ${colors.yellow};
        }
        @media (max-width: 930px) {
            font-size: 32px;
            line-height: 36px;
            max-width: 700px;    
        }
    }
    .foto-beneficios {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;
        margin: 48px auto 2rem;
        img {
            max-width: 460px;
        }
        @media (max-width: 930px) {
            display: flex;
            flex-direction: column;
        }
    }
    .beneficios {
        color: ${colors.white};

        li {
            display: flex;
            align-items: center;
            margin: 16px 0;
            span {
                margin-left: 16px;
                font-weight: 700;
            }
        }
    }
    h3 {
        color: #F3D232;
        font-size: 24px;
        text-align: center;
    }
    button {
        background-color: ${colors.orange};
        border: none;
        color: #fff;
        font-size: 24px;
        font-weight: 700;

        display: block;
        /* position: absolute; */
        /* bottom: 20px; */
        padding: 8px 32px;
        margin: 3rem auto 0;
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
`;