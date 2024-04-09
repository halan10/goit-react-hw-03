import css from './Contact.module.css';
import { MdPhoneAndroid } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.card}>
      <p className={css.field}>
        <RiContactsFill size="24" />
        {contact.name}
      </p>
      <p className={css.field}>
        <MdPhoneAndroid size="24" />
        {contact.number}
      </p>

      <button className={css.btnDelete} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
