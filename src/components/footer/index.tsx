import MailIcon from '@/icons/admin/mail'
import InstagramIcon from '@/icons/e-commerce/instagram'
import MapPinIcon from '@/icons/e-commerce/map-pin'
import PhoneIcon from '@/icons/e-commerce/phone'

const Footer = () => {
  return (
    <section className="mt-10 bg-grayLighter">
      <div className="container mx-auto py-16 text-sm">
        <h4 className="mb-6 text-3xl md:mb-9">E-commerce</h4>
        <div className="grid grid-cols-6 gap-8 lg:grid-cols-12">
          <address className="col-span-3 not-italic">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <MapPinIcon className="shrink-0 text-xl" aria-hidden="true" /> Home Office
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="shrink-0 text-xl" aria-hidden="true" /> <a href="tel:05418632292">0541 863 29 92</a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="shrink-0 text-xl" aria-hidden="true" />{' '}
                <a href="mailto:karabulut.ali@hotmail.com">karabulut.ali@hotmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon />
                <a href="https://www.instagram.com/knospak/" target="_blank">
                  knospak
                </a>
              </li>
            </ul>
          </address>
          <div className="col-span-6 sm:col-span-3">
            <ul className="flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Returns & Exchanges</li>
              <li>Shipping & Delivery</li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <ul className="flex flex-col gap-2">
              <li>Store Location</li>
              <li>FAQs</li>
              <li>Orders Tracking</li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <ul className="flex flex-col gap-2">
              <li className="flex w-full justify-between border-b border-grayLight">
                <span>Monday - Friday</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className="flex w-full justify-between border-b border-grayLight">
                <span>Saturday</span>
                <span>09:00 - 21:00</span>
              </li>
              <li className="flex w-full justify-between border-b border-grayLight">
                <span>Sunday</span>
                <span>13:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-5 text-center text-sm leading-6">2023 Created by Ali Karabulut. Front End Developer</div>
    </section>
  )
}

export default Footer
