import React from "react";

function ContactForm({ name, number, onAddName, onAddNumber, onAddContacts }) {
  return (
    <form>
      <div>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={onAddName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>

      <div>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={onAddNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
          
      <button type="button" onClick={onAddContacts}>
        Add contacts
      </button>
          
    </form>
  );
}

export default ContactForm;