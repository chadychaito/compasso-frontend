import axios from "axios";
import { result } from "lodash";
import { useState, useEffect } from "react";

import { ResultsWrapper } from "./styles";

export const Results = ({ name }) => {
  const [results, setResults] = useState(false);

  useEffect(async () => {
    if (name) {
      const { data } = await axios.get(
        `https://api.github.com/users/${name}/repos`
      );
      console.log(data);
      setResults(data);
    }
  }, [name]);

  return (
    <ResultsWrapper>
      {results &&
        results.map((result) => (
          <div key={result.id}>
            <p>{result.full_name}</p>
          </div>
        ))}
    </ResultsWrapper>
  );
};
