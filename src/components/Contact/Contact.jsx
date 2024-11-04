import s from "./Contact.module.css"

const Contact = ({ name, number }) => {
  return (
      <li className={s.listItem}>
          <div className={s.contactInfo}>
              <span className={s.contactName}>{name}:</span> <span className={s.contactNumber}>{number}</span>
              </div>
          <button className={s.button}>Delete</button>
    </li>
  );
};

export default Contact;