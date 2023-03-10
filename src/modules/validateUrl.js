export const urlRegex = /^(https?:\/\/)?(www\.)?[a-z0-9]+\.[a-z]+(\/[^\s]*)?$/i;

export const validateUrl = (url) => {
  return urlRegex.test(url);
};
