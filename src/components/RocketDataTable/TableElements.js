import styled from "styled-components";

export const TableWrapper = styled.div`
  height: 860px;
  width: 100%;
  min-width: 1200px;
  ${"" /* margin-right: 30px; */}
  ${"" /* margin-left: 30px; */}
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const TableRow = styled.div`
  overflow: scroll;
`;

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
