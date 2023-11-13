"use client";
import { useState, useEffect, FC } from "react";
// React.ChangeEvent<HTMLInputElement | HTMLDivElement>
type InputProps = {
  type: "single" | "multi";
  label: string;
  name: string;
  onChange: (e: any) => void;
  fetchFunction: () => Promise<any>;
};

const AsyncInput: FC<InputProps> = ({ label, name, onChange, fetchFunction }) => {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const fetchData = async () => {
    if (data.length === 0) {
      setLoading(true);
      const response = await fetchFunction();
      setLoading(false);
      if (response.message) {
        setError(response.message);
      } else {
        setError("");
        setData(response);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const matchingCategory = data.find((category) => category.name.toLowerCase().includes(inputValue.toLowerCase()));

    if (matchingCategory) {
      onChange({ name: name, value: matchingCategory });
    }
  };

  return (
    <div>
      <input type="text" placeholder={label} name={name} value={inputValue} onChange={handleChange} onFocus={fetchData} />
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <div>
        <div>
          {data?.map((category) => (
            <div key={category.id} onClick={() => setInputValue(category.name)}>
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsyncInput;
