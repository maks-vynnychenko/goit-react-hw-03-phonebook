import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: '',
  };

  onAddContacts = evt => {
    const contact = {
      id: nanoid(),
      name: evt.name,
      tel: evt.tel,
    };

    this.state.contacts.some(elem => {
      return contact.name.toLowerCase() === elem.name.toLowerCase();
    })
      ? alert(`${contact.name} is alredy in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  filterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const filterContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContacts={this.onAddContacts} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterChange} />
        <ContactList
          contactData={filterContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;