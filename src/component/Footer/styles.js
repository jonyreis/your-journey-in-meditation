import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 40px 0;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    height: 200px;
  }
  .footer-left {
    text-align: center;
  }
  .links {
    width: 280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
