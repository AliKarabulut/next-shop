'use client'
import { useState } from 'react'

import { createCategory } from '@/actions/product-actions/category'
import { createVariant, createVariantOption } from '@/actions/product-actions/variation'

const AdminPage = () => {
  const [categoryName, setCategoryName] = useState('')
  const [parentId, setParentId] = useState('')
  const [variantName, setVariantName] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [variantOptionName, setVariantOptionName] = useState('')
  const [variantId, setVariantId] = useState('')

  const handleCreateCategory = async event => {
    event.preventDefault()
    await createCategory(categoryName, parentId)
  }

  const handleCreateVariant = async event => {
    event.preventDefault()
    await createVariant(variantName, categoryId)
  }

  const handleCreateVariantOption = async event => {
    event.preventDefault()
    await createVariantOption(variantOptionName, variantId)
  }
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-4 text-4xl font-bold">Admin Page</h1>

      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Create Category</h2>
        <form onSubmit={handleCreateCategory} className="space-y-2">
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="Parent Category ID"
            value={parentId}
            onChange={e => setParentId(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
          />
          <button type="submit" className="w-full rounded bg-blue-500 p-2 text-white">
            Create Category
          </button>
        </form>
      </div>
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Create Variant</h2>
        <form onSubmit={handleCreateVariant} className="space-y-2">
          <input
            type="text"
            placeholder="Variant Name"
            value={variantName}
            onChange={e => setVariantName(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="Category ID"
            value={categoryId}
            onChange={e => setCategoryId(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
          />
          <button type="submit" className="w-full rounded bg-blue-500 p-2 text-white">
            Create
          </button>
        </form>
      </div>
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Create Variant Option</h2>
        <form onSubmit={handleCreateVariantOption} className="space-y-2">
          <input
            type="text"
            placeholder="Variant Option Name"
            value={variantOptionName}
            onChange={e => setVariantOptionName(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="Variant ID"
            value={variantId}
            onChange={e => setVariantId(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
          />
          <button type="submit" className="w-full rounded bg-blue-500 p-2 text-white">
            Create Variant Option
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminPage
