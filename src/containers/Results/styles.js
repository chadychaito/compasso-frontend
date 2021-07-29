import styled from "styled-components";

export const ResultsWrapper = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.25rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid #000;
  color: ${({ active }) => (active ? "#fff" : "#000")};
  background: ${({ active }) => (active ? "#000" : "#fff")};
  &:hover {
    cursor: pointer;
  }
`;
