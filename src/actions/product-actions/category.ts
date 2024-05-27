'use server'
import client from '@/libs/prismadb'

export const createCategory = async (categoryName: string, parentId?: string) => {
  const category = await client.category.create({
    data: {
      name: categoryName,
      slug: categoryName.split(' ').join('-').toLowerCase(),
      parentId: parentId || null,
    },
  })
  console.log(category)
  return category
}

export const getAllCategory = async () => {
  const categories = await client.category.findMany()
  return categories
}

export const getCategoryById = async (id: string) => {
  const category = await client.category.findUnique({
    where: {
      id,
    },
    include: { subcategories: true },
  })
  return category
}

export const getAllProductByCategoryId = async (id: string) => {
  const products = await client.product.findMany({
    where: {
      categoryId: id,
    },
  })
  return products
}

export const getAllProductByCategorySlug = async (slug: string) => {
  const category = await client.category.findUnique({
    where: {
      slug,
    },
    include: { products: true },
  })
  return category
}
