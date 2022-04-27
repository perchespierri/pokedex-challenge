export const capitalizeString = (str: string) => {
  const strClone = str;
  const capitalFirstLetter = strClone.charAt(0).toUpperCase();
  const capitalizedStr = `${capitalFirstLetter}${strClone.slice(1)}`;

  return capitalizedStr;
}
