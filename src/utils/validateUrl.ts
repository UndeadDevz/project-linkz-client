export const validateUrl = (url: string) => {
  if (url === '') return url;

  let newUrl = url;
  // valido que la url tenga http:// o https:// si no le agrego
  if (!/^https?:\/\//i.test(url)) {
    newUrl = `http://${url}`;
  }

  // valido que el dominio tenga un .com si no tiene le agrego
  const regex = /^(https?:\/\/)?(www\.)?([^\s/]+)(.*)$/;

  const urlParts = newUrl.match(regex);
  if (urlParts === null) {
    return newUrl;
  }

  const domain = urlParts[3];

  if (domain.indexOf('.') === -1) {
    newUrl = `${newUrl}.com`;
  }

  return newUrl;
};
