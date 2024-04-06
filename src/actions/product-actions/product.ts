'use server'
import client from '@/libs/prismadb'

// Create a new product
export const createProduct = (name, brand, description, categoryId, featureId) => {
  return await client.product.create({
    data: {
      name,
      brand,
      description,
      categoryId,
      featureId,
    },
  })
}

// Get all products
export const getProducts = () => {
  return await client.product.findMany()
}

// Get a product by id
export const getProductById = id => {
  return await client.product.findUnique({
    where: { id },
  })
}

// Update a product
export const updateProduct = (id, name, brand, description, categoryId, featureId) => {
  return await client.product.update({
    where: { id },
    data: {
      name,
      brand,
      description,
      categoryId,
      featureId,
    },
  })
}

// Delete a product
export const deleteProduct = id => {
  return await client.product.delete({
    where: { id },
  })
}

// Add a variant to a product
export const addVariantToProduct = (productId, variantId) => {
  return await client.product.update({
    where: { id: productId },
    data: {
      VariantOptionRelation: {
        create: { variantId },
      },
    },
  })
}

// Add inventory to a product
export const addInventoryToProduct = (productId, stock, price) => {
  return await client.product.update({
    where: { id: productId },
    data: {
      VariantOptionRelation: {
        create: { stock, price },
      },
    },
  })
}
