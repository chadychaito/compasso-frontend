import { dateFormatter } from "../../utils/dateFormatter";

import {
  Result,
  FullName,
  Description,
  FooterResult,
  Language,
  LastUpdate,
} from "./styles";

export const ResultList = ({ items }) =>
  items &&
  items.map((item) => (
    <Result key={item.id}>
      <FullName href={item.html_url}>{item.full_name}</FullName>
      <Description>{item.description}</Description>
      <FooterResult>
        {item.language && <Language>{item.language}</Language>}
        <LastUpdate>
          Último update em {dateFormatter(item.updated_at)}
        </LastUpdate>
      </FooterResult>
    </Result>
  ));
