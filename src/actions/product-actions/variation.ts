'use server'
import client from '@/libs/prismadb'

export const createVariant = async (name: string, categoryId: string) => {
  const variant = await client.variant.create({
    data: {
      name,
      slug: name.split(' ').join('-').toLowerCase(),
      categoryVariants: {
        create: {
          categoryId,
        },
      },
    },
  })
  return variant
}

export const createVariantOption = async (name: string, variantId: string) => {
  const variantOption = await client.variantOption.create({
    data: {
      name,
      slug: name.split(' ').join('-').toLowerCase(),
      variantId,
    },
  })
  return variantOption
}

export const getVariantOptionsById = async (variantId: string) => {
  const variantOptions = await client.variantOption.findMany({
    where: {
      variantId,
    },
  })
  return variantOptions
}

export const getProductsByVariantId = async (variantId: string) => {
  const variant = await client.variant.findUnique({
    where: {
      id: variantId,
    },
    include: {
      categoryVariants: {
        include: {
          category: {
            include: {
              products: true,
            },
          },
        },
      },
    },
  })
  const products = variant?.categoryVariants.flatMap(cv => cv.category.products)
  return products
}

export const getProductsByVariantOptionId = async (variantOptionId: string) => {
  const variantOption = await client.variantOption.findUnique({
    where: {
      id: variantOptionId,
    },
    include: {
      variant: {
        include: {
          categoryVariants: {
            include: {
              category: {
                include: {
                  products: true,
                },
              },
            },
          },
        },
      },
    },
  })
  const products = variantOption?.variant.categoryVariants.flatMap(cv => cv.category.products)
  return products
}

export const getCategoryVariantsById = async (categoryId: string) => {
  const category = await client.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      categoryVariants: {
        include: {
          variant: true,
        },
      },
    },
  })
  const variants = category?.categoryVariants.map(cv => cv.variant)
  return variants
}

export const getAllProductsByVariantSlug = async (slug: string) => {
  const variant = await client.variant.findUnique({
    where: {
      slug,
    },
    include: {
      categoryVariants: {
        include: {
          category: {
            include: {
              products: true,
            },
          },
        },
      },
    },
  })
  const products = variant?.categoryVariants.flatMap(cv => cv.category.products)
  return products
}
