import MailIcon from '@/icons/mail'
import PhoneIcon from '@/icons/phone'

const HeaderTopMenu = () => {
  return (
    <section id="header-top-menu">
      <div className="header-top-container">
        <address className="contact-info">
          <a href="tel:05418632292" className="contact-item" aria-label="Phone number">
            <PhoneIcon className="contact-icon" aria-hidden="true" /> <span>0541 863 29 92</span>
          </a>
          <hr className="separator" />
          <a href="mailto:karabulut.ali@hotmail.com" className="contact-item" aria-label="Email">
            <MailIcon className="contact-icon" aria-hidden="true" /> <span>karabulutt.ali@hotmail.com</span>
          </a>
        </address>
        <div className="campaign-text">Campaign text</div>
        <div className="temperature">25°C</div>
      </div>
    </section>
  )
}

export default HeaderTopMenu
