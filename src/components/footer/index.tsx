import MailIcon from '@/icons/mail'
import LinkedInIcon from '@/icons/linkedin'
import MapPinIcon from '@/icons/map-pin'
import PhoneIcon from '@/icons/phone'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <h3 className="footer-brand">E-commerce</h3>
        <div className="footer-sections">
          <address className="contact-section">
            <h4 className="section-title">Contact</h4>
            <ul className="contact-list">
              <li className="contact-item" aria-label="Office adress">
                <MapPinIcon className="contact-icon" aria-hidden="true" /> <span>Home Office</span>
              </li>
              <li>
                <a href="tel:05418632292" className="contact-item" aria-label="Phone number">
                  <PhoneIcon className="contact-icon" aria-hidden="true" /> <span>0541 863 29 92</span>
                </a>
              </li>
              <li>
                <a href="mailto:karabulut.ali@hotmail.com" className="contact-item" aria-label="Email">
                  <MailIcon className="contact-icon" aria-hidden="true" /> <span>karabulutt.ali@hotmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/karabulutali/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <LinkedInIcon />
                  <span>Ali Karabulut</span>
                </a>
              </li>
            </ul>
          </address>

          <nav className="footer-nav">
            <section className="nav-section">
              <h4 className="section-title">Policies</h4>
              <ul>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="/">Shipping & Delivery</a>
                </li>
              </ul>
            </section>

            <section className="nav-section">
              <h4 className="section-title">Support</h4>
              <ul>
                <li>
                  <a href="/">Store Location</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Orders Tracking</a>
                </li>
              </ul>
            </section>
          </nav>

          <section className="opening-hours-section">
            <h4 className="section-title">Opening Hours</h4>
            <ul className="opening-hours-list">
              <li className="opening-hours-item">
                <span>Monday - Friday</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className="opening-hours-item">
                <span>Saturday</span>
                <span>09:00 - 21:00</span>
              </li>
              <li className="opening-hours-item">
                <span>Sunday</span>
                <span>13:00 - 21:00</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <section className="footer-credits">
        2023 Created by{' '}
        <a href="https://www.linkedin.com/in/karabulutali/" target="_blank" rel="noopener noreferrer" className="credit-link">
          Ali Karabulut
        </a>
        . Front End Developer
      </section>
    </footer>
  )
}

export default Footer
