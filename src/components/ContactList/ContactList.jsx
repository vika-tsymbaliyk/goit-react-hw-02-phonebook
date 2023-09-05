import { Contact } from "components/Contact/Contact"
import { ContactListWrap, ListItem } from "./ContactList.styled"

export const ContactList =({filterContactsList,deleteContact})=>{
    return(
        <ContactListWrap>
          {filterContactsList.map(contact => (
            <ListItem key={contact.id}>
                <Contact contact={contact} onDelete={deleteContact}/>
            </ListItem>
          ))}
        </ContactListWrap>
    )
}