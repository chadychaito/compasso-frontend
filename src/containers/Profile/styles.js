import styled from "styled-components";

export const User = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  padding: 4rem 1.5rem 0;
  background: #fff;
  border-radius: 0.5rem;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const Login = styled.p`
  font-size: 1rem;
  color: #777;
  margin-top: 0.2rem;
  margin-bottom: 0px;
`;

export const Biography = styled.p`
  font-size: 0.75rem;
  margin: 0.75rem 0 0;
`;

export const Avatar = styled.img`
  position: absolute;
  top: -3rem;
  width: 6rem;
  height: 6rem;
  border-radius: 6rem;
  border: 5px solid #fff;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  font-size: 0.75rem;
`;

export const FollowGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;
