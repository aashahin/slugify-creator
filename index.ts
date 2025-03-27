const slugify = (text: string, mark = "-") => {
  const removeDiacritics = (s: string) =>
    (s as any).normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return text
    .toLowerCase()
    .replace(/[^\w\u0600-\u06FF]+/g, mark)
    .replace(/[^a-zA-Z\u0621-\u064A]+/g, mark)
    .replace(/./g, removeDiacritics)
    .replace(/^-+|-+$/g, "");
};

export default slugify;
