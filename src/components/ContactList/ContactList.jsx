import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
const ContactList = ({ contacts }) => {
    return (
         <ul className={s.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
    )
}

export default ContactList