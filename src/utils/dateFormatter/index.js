export const dateFormatter = (date_utc) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(date_utc);
  return date.toLocaleDateString("pt-BR", options);
};
