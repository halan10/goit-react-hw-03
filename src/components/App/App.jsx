import { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import Notification from '../Notification/Notification';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [searchValue, setSearchValue] = useState('');

  const addContact = newContact => {
    console.log(newContact);
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <div className={css.mainContainer}>
        <div>
          <ContactForm onAdd={addContact} />
          <SearchBox value={searchValue} onSearch={setSearchValue} />
        </div>
        <div>
          {contacts.length > 0 ? (
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
          ) : (
            <Notification />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
