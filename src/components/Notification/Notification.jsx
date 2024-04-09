import css from './Notification.module.css';

export default function Notification() {
  return (
    <p className={css.notification}>
      This contact list is empty! Please add a contact.
    </p>
  );
}
