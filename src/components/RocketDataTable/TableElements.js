import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-top: 42px;
  margin-bottom: 64px;
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: "#000";

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
