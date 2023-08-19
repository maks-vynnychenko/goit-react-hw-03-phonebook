import contactForm from './ContactForm.module.css';

import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  formSubmit = evt => {
    evt.preventDefault();

    const contactData = {
      ...this.state,
    };
    this.props.onAddContacts(contactData);

    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      tel: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit} className={contactForm.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.tel}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;