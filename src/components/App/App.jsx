import React, { Component }  from "react";
import { nanoid } from 'nanoid';
import ContactsList from "components/ContactsList";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  handleAddName = event => {
    const { value } = event.currentTarget;
    this.setState({
      name: value,
    });
  };
  handleAddNumber = event => {
    const { value } = event.currentTarget;
    this.setState({
      number: value,
    });
  };

  handleAddContacts = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

    handleFiltContacts = (event) => {
        this.setState({
            filter: event.currentTarget.value
        });
    }
    
    
    
  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <h1>Phonebook </h1>
        <ContactForm
          name={name}
          number={number}
          onAddNumber={this.handleAddNumber}
          onAddName={this.handleAddName}
          onAddContacts={this.handleAddContacts}
        />
        <h2>Contacts</h2>

        <div>
          <label>
            Find contacts by name
            <input
              type="tel"
              name="number"
              value={filter}
              onChange={this.handleFiltContacts}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <Filter fiter={filter} />
            
        <ContactsList
          contacts={contacts}
          onFiltContacts={this.handleFiltContacts}
        />
      </div>
    );
  }
};

export default App;