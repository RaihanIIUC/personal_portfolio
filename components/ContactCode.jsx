import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'mdraihan4835@gmail.com',
    href: 'mailto:mdraihan4835@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/raihan-php',
    href: 'https://www.linkedin.com/in/raihan-php/',
  },
  {
    social: 'GitHub',
    link: 'github.com/RaihanIIUC',
    href: 'https://github.com/RaihanIIUC',
  },
  {
    social: 'Website',
    link: 'mdraihan.dev',
    href: 'https://mdraihan.dev',
  },
];
const direct_contact_items = [
  {
    social: 'Whatsapp',
    link: '01855065201',
    href: 'https://wa.me/01855065201',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>Raihan</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>Contact</span>&#58;
      </p>
      {direct_contact_items.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {direct_contact_items.slice(8, direct_contact_items.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
