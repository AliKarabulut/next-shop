'use client'
import { addSlider } from '@/services/slider-services'
import { quillCssConverter } from '@/utils/quill-css-converter'
import IconButton from '@/ui/icon-button'
import DemoSwiper from '@/components/swipers/demo-swiper'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Ck5Editor = dynamic(
  () => {
    return import('@/components/admin/ck5editor')
  },
  { ssr: false },
)

const Slider = () => {
  const [description, setDescription] = useState<string>('')

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const desc = quillCssConverter(description)
    const data = new FormData()
    const target = event.target as HTMLFormElement
    const fileInput = target.elements.namedItem('file') as HTMLInputElement
    const file = fileInput?.files?.[0]
    data.append('file', file || '')
    data.set('description', desc)
    await addSlider(data)
  }

  return (
    <div className="mt-8">
      <form onSubmit={submitHandler}>
        <DemoSwiper name="file" description={description} />
        <Ck5Editor onValue={setDescription} />
        <IconButton label="Upload" type="submit" className="mt-4 bg-white opacity-100 shadow-md"></IconButton>
      </form>
    </div>
  )
}

export default Slider
