import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(1, 1, 1, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  max-width: 400px;
  background-color: white;
  padding: 20px;
`;

export const Input = styled.input`
  width: 100%;
`;
