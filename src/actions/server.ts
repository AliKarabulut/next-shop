'use server'
import client from '@/libs/prismadb'

export async function createProduct(productName: string, productBrand: string, productDescription: string, categoryId: string) {
  const product = await client.product.create({
    data: {
      name: productName,
      brand: productBrand,
      description: productDescription,
      categoryId: categoryId,
    },
  })

  return product
}

export async function createOption(optionName: string, slug: string, categoryId: string) {
  const option = await client.option.create({
    data: {
      name: optionName,
      slug: optionName.toLowerCase(),
      categoryId: categoryId,
    },
  })

  return option
}

export async function createOptionVariant(variantName: string, optionId: string) {
  const variant = await client.optionVariant.create({
    data: {
      name: variantName,
      optionId: optionId,
    },
  })

  return variant
}

export async function createInventory(productId, stock, price, optionVariantIds) {
  const newInventory = await client.inventory.create({
    data: {
      productId: productId,
      stock: stock,
      price: price,
    },
  })

  for (const optionVariantId of optionVariantIds) {
    await client.inventoryOption.create({
      data: {
        inventoryId: newInventory.id,
        optionVariantId: optionVariantId,
      },
    })
  }

  return newInventory
}

// export async function createProductVariant(productId: string, optionVariantId: string, stock: number, price: number) {
//   const productVariant = await client.productVariant.create({
//     data: {
//       productId: productId,
//       optionVariantId: optionVariantId,
//       stock: stock,
//       price: price,
//     },
//   })

//   return productVariant
// }

export async function createFeature(name, categoryId, parentId = null) {
  try {
    const data = {
      name: name,
      categoryId: categoryId,
    }

    if (parentId) {
      data.parentId = parentId
    }

    const feature = await client.feature.create({
      data: data,
    })

    return feature
  } catch (error) {
    console.error(error)
  }
}

export const fetchDataPrisma = async () => {
  const products = await client.product.findMany()
  const options = await client.option.findMany()
  const variants = await client.optionVariant.findMany()
  // const relations = await client.inventoryOptionVariant.findMany()
  const categories = await client.category.findMany()

  const urunfull = await client.product.findMany({
    include: {
      OptionVariantRelation: {
        include: {
          inventoryOptions: {
            include: {
              optionVariant: true,
            },
          },
        },
      },
    },
  })

  const inventoryOptions = await client.inventoryOption.findMany({
    where: {
      optionVariantId: '66108b5254a6037210d45d3e',
    },
    include: {
      inventory: {
        include: {
          product: true,
          inventoryOptions: {
            include: {
              optionVariant: true,
            },
          },
        },
      },
    },
  })

  const nostock = await client.inventory.findMany({
    where: {
      stock: 0,
    },
    include: {
      product: true,
      inventoryOptions: {
        include: {
          optionVariant: true,
        },
      },
    },
  })
  // const category = await client.category.findUnique({
  //   where: { id: '660de5914e4130e4d5ff9fef' },
  //   include: { subcategories: true },
  // })

  // const mainCategories = await client.category.findMany({
  //   where: { parentId: null },
  // })
  // const relationss = await client.optionVariantRelation.findMany({
  //   include: {
  //     Product: true,
  //     optionVariant1: true,
  //     optionVariant2: true,
  //   },
  // })

  // const optionVariantId = '660df716a2c6e063a18759ca'

  // const urun = await client.optionVariantRelation.findMany({
  //   where: {
  //     OR: [{ optionVariantId1: optionVariantId }, { optionVariantId2: optionVariantId }],
  //   },
  //   include: {
  //     Product: true,
  //     optionVariant1: true,
  //     optionVariant2: true,
  //   },
  // })

  // const asdasd = '660dfd6cd1d64255f063c593' // adsız için productId

  // const urun2 = await client.optionVariantRelation.findMany({
  //   where: {
  //     OR: [{ optionVariantId1: optionVariantId }, { optionVariantId2: optionVariantId }],
  //   },
  //   include: {
  //     Product: true,
  //     optionVariant1: true,
  //     optionVariant2: true,
  //     inventory: true, // Include the related Inventory items
  //   },
  // })

  // console.log('urun', urun)
  // console.log('relationss', relationss)
  // console.log('products', products)
  // console.log('options', options)
  // console.log('variants', variants)
  // console.log('relations', relations)
  // console.log('categories', categories)

  return {
    products: products,
    options: options,
    variants: variants,
    // relations: relations,
    urunfull: urunfull,
    categories: categories,
    inventoryOptions: inventoryOptions,
    nostock: nostock,
    // relationss: relationss,
    // urun: urun,
    // urun2: urun2,
    // category: category,
    // mainCategories: mainCategories,
  }
}
