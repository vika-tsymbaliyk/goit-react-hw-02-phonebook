import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

addContact = newContact =>{
  const { name, number } = newContact;

  // const isExist = this.state.contacts.some(
  //   contact => contact.name.toUpperCase() === name.toUpperCase()
  //     || contact.number === number
  // );
  // if (isExist) {
  //   alert(`${name} is already in contacts.`);
  //   return
  // }

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
  const { contacts, filter } = this.state;
  const filterContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  return(
  <Layout>
  <h1>Phonebook</h1>
  <ContactForm onAdd={this.addContact}/>
    
  <h2>Contacts</h2>
  {/* <Filter filter={filter} onSearchContact={this.searchContact}/>   */}
  <div>
  <ContactList filterContactsList={filterContacts} deleteContact={this.deleteContact}/>
  </div>
  </Layout>
  )
}
}