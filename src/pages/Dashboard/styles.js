import styled from "styled-components";

export const ContainerProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 5px;
  padding: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
