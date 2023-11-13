"use client";

import AsyncInput from "@/ui/input";
import { useEffect, useState } from "react";
import { addCategory, getCategories } from "@/services/category-services";

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

  const stateHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e?.target) {
      setProduct({ ...product, [e.target.name]: e.target.value });
    } else {
      setProduct({ ...product, [e.name]: e.value });
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("product.categoryId", product.categoryId);
  }, [product.categoryId]);

  return (
    <main>
      <form action="" onSubmit={submitHandler}>
        <div className="w-full">
          <h3 className="text-admin-primary-800 text-lg text-center">Ürün Bilgileri</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="name">Ürün Adı</label>
              <input type="text" name="name" id="name" value={product.name} onChange={stateHandler} />
            </div>
            <div>
              <label htmlFor="brand">Marka</label>
              <input type="text" name="brand" id="brand" value={product.brand} onChange={stateHandler} />
            </div>
            <div>
              <label htmlFor="description">Açıklama</label>
              <textarea name="description" id="description" value={product.description} onChange={stateHandler} />
            </div>
            <div>
              <label htmlFor="price">Fiyat</label>
              <input type="number" name="price" id="price" value={product.price} onChange={stateHandler} />
            </div>
            <div>
              <label htmlFor="category">Kategori</label>
              <div>
                <AsyncInput fetchFunction={getCategories} name="categoryId" label="Kategori" onChange={stateHandler} type="single" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default NewProduct;
