export const quillCssConverter = (html: string) => {
  const replacements: { [key in "ql-size-small" | "ql-size-large" | "ql-size-huge"]: string } = {
    "ql-size-small": "text-sm",
    "ql-size-large": "text-lg",
    "ql-size-huge": "text-5xl",
  };

  const data = html.replace(/ql-size-small|ql-size-large|ql-size-huge/g, function (match: string) {
    return replacements[match as "ql-size-small" | "ql-size-large" | "ql-size-huge"];
  });
  return data;
};
