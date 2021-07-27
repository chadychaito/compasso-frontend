import axios from "axios";
import { useState } from "react";
import { Container } from "../../components/Container";

import { Section, Input, Title, Button, ButtonWrapper } from "./styles";

export const Search = () => {
  const [userName, setUserName] = useState(false);

  const handleSearch = (event) => {
    setUserName(event.target.value);
  };

  const submitSearch = async () => {
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`
    );
  };

  return (
    <Section>
      <Container>
        <Title>Github API</Title>
        <Input id="search" onChange={(event) => handleSearch(event)} />
        <ButtonWrapper>
          <Button onClick={() => submitSearch()}>Pesquisar</Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};
