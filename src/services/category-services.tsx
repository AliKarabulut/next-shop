export const getCategories = async (): Promise<any> => {
  const response = await fetch("/api/getCategory", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
};

export const addCategory = async (name: string): Promise<any> => {
  const response = await fetch("/api/createCategory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  const res = await response.json();
  return res;
};
