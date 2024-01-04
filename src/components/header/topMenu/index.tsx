import MailIcon from '@/icons/admin/mail'
import PhoneIcon from '@/icons/e-commerce/phone'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const HeaderTopMenu = () => {
  return (
    <div className="text container mx-auto hidden h-8 items-center justify-between text-sm md:flex">
      <div className="flex items-center font-normal">
        <span className="flex items-center gap-3">
          <PhoneIcon className="shrink-0 text-xl" aria-hidden="true" /> <a href="tel:05418632292">0541 863 29 92</a>
        </span>
        <hr className="mx-2 h-0.5 w-[14px] rotate-90 text-yellow" />
        <span className="flex items-center gap-3">
          <MailIcon className="shrink-0 text-xl" aria-hidden="true" />{' '}
          <a href="mailto:karabulut.ali@hotmail.com">karabulut.ali@hotmail.com</a>
        </span>
      </div>
      <div className="text-center">
        <span>Campaign text</span>
      </div>
      <div>25°C</div>
    </div>
  )
}

export default HeaderTopMenu
