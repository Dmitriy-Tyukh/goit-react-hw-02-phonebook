import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './App.styled'
import contacts from 'dataJson/contacts.json';
import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  handleFiltContacts = event => {
    const value = event.currentTarget.value;

    this.setState({
      filter: value,
    });
  };

  fiteredContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  handleDeleteContact = dataId => {
    const { contacts } = this.state;
    return this.setState({
      contacts: contacts.filter(({ id }) => dataId !== id),
    });
  };

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const nameContact = name;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (contacts.some(({ name }) => name === nameContact)) {
      alert(`${nameContact} is already in contacts.`);
      this.reset();
      return;
    }
      
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { filter } = this.state;
    const contactsFilter = this.fiteredContacts();

    return (
      <Box>
        <h1>Phonebook </h1>
        <ContactForm onSubmitForm={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter fiter={filter} onFiltContacts={this.handleFiltContacts} />
        <ContactsList
          contacts={contactsFilter}
          onDeleteContact={this.handleDeleteContact}
        />
      </Box>
    );
  }
}

export default App;
