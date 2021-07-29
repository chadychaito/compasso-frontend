import { useState, useEffect } from "react";
import axios from "axios";
import { ResultList } from "../../components/ResultList";

import { ResultsWrapper, ButtonGroup, Button } from "./styles";

export const Results = ({ name }) => {
  const [active, setActive] = useState("repos");
  const [repos, setRepos] = useState(false);
  const [starred, setStarred] = useState(false);

  useEffect(async () => {
    if (name) {
      const { data } = await axios.get(
        `https://api.github.com/users/${name}/repos`
      );
      setRepos(data);
    }
  }, [name]);

  const handleStarred = async () => {
    if (!starred) {
      const { data } = await axios.get(
        `https://api.github.com/users/${name}/starred`
      );
      setStarred(data);
    }
    setActive("starred");
  };

  const handleRepos = () => {
    setActive("repos");
  };

  return (
    <ResultsWrapper>
      <ButtonGroup>
        <Button onClick={() => handleRepos()} active={active === "repos"}>
          Repos
        </Button>
        <Button onClick={() => handleStarred()} active={active === "starred"}>
          Starred
        </Button>
      </ButtonGroup>
      {active === "repos" && <ResultList items={repos} />}
      {active === "starred" && <ResultList items={starred} />}
    </ResultsWrapper>
  );
};
