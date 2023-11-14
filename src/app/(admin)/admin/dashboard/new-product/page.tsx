"use client";

import AsyncInput from "@/ui/input/async-input";
import { useEffect, useState } from "react";
import { addCategory, getCategories } from "@/services/category-services";
import Input from "@/ui/input/input";
import TextArea from "@/ui/input/textarea";

type Product = {
  name: string;
  brand: string;
  description: string;
  price: number;
  categoryId: string;
  variations: string[];
  features: string[];
};

const NewProduct = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    brand: "",
    description: "",
    price: 0,
    categoryId: "",
    variations: [],
    features: [],
  });

  const stateHandler = (e: any) => {
    setProduct({ ...product, [e.name]: e.data });
  };

  const categoryHandler = (e: { name: string; data: { id: string; name: string } }) => {
    setProduct({ ...product, [e.name]: e.data.id });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <main>
      <form action="" onSubmit={submitHandler}>
        <div className="w-full">
          <h3 className="text-admin-primary-800 text-lg text-center mb-8">Ürün Bilgileri</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-16">
            <div>
              <Input label="Ürün Adı" type="text" name="name" onChange={stateHandler} />
            </div>
            <div>
              <Input label="Marka" type="text" name="brand" onChange={stateHandler} />
            </div>
            <div>
              <TextArea label="Açıklama" name="description" onChange={stateHandler} />
            </div>
            <div>
              <Input label="Fiyat" type="number" name="price" onChange={stateHandler} />
            </div>
            <div>
              <div>
                <AsyncInput
                  fetchFunction={getCategories}
                  postFunction={addCategory}
                  name="categoryId"
                  label="Kategori"
                  onChange={categoryHandler}
                  type="single"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default NewProduct;
