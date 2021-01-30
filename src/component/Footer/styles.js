import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  font-size: 14px;

  display: flex;
  justify-content: space-around;

  padding: 24px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    height: 200px;
  }
  .footer-left {
    text-align: center;
  }
  a {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
