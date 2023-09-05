import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

addContact = newContact =>{
  const { name, number } = newContact;

  const isContain = this.state.contacts.some(
    contact => contact.name.toUpperCase() === name.toUpperCase()
      || contact.number === number
  );
  if (isContain) {
    alert(`${name} or ${number} is already in contacts.`);
    return;
  };

  this.setState(prevState => ({
    contacts: [
        ...prevState.contacts,
        {id: nanoid(), ...newContact},
      ],
    }));
  }
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchContact = filterContact => {
    this.setState({
      filter: filterContact,
    })
  };

render(){
  return(
  <Layout>
  <h1>Phonebook</h1>
  <ContactForm onAdd={this.addContact}/>
    
  <h2>Contacts</h2>
      
    
    </Layout>
  )
}
}