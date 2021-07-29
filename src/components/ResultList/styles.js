import styled from "styled-components";

export const Result = styled.div`
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  padding: 1rem 0;
`;

export const FullName = styled.a`
  color: blue;
`;

export const Description = styled.div`
  padding-top: 0.25rem;
  font-size: 0.75rem;
  color: #777;
`;

export const FooterResult = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export const Language = styled.div`
  background: #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
`;

export const LastUpdate = styled.p`
  margin: 0;
`;
