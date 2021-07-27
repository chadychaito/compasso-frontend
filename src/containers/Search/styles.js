import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dfe1e5;
  border-radius: 2rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  &:focus {
    outline: none !important;
    border: 1px solid rgba(223, 225, 229, 0);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: #000;
  border: 1px solid #000;
  border-radius: 1rem;
  color: #fff;
  padding: 0.4rem 2.5rem;
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(223, 225, 229, 0);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  }
`;
