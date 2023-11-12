"use client";

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

type Category = {
  name: string;
  id: string;
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

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res);
    };
    fetchCategories();
  }, []);

  const stateHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [newCategory, setNewCategory] = useState("");

  const addNewCategory = async (newCategory: string) => {
    const res = await addCategory(newCategory);
    if (res.name) {
      setCategories([...categories, { name: res.name, id: res.id }]);
    }
  };

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
                <div>
                  {categories?.map((category) => (
                    <div key={category.id}>
                      <input type="radio" name="category" id={category.id} value={category.id} onChange={stateHandler} />
                      <label htmlFor={category.id}>{category.name}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <div>Yeni kategori</div>
                  <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                  <button type="button" onClick={() => addNewCategory(newCategory)}>
                    Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default NewProduct;
