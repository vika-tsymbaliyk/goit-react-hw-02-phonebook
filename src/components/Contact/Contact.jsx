import { ContactWrap, ButtonDel } from "./Contact.styled";

export const Contact = ({contact, onDelete})=>{
    const {id, name, number} = contact;
    return(
    <ContactWrap>
        <p>{name}: {number}</p>
        <ButtonDel onClick={()=> onDelete(id)}>Delete</ButtonDel>
    </ContactWrap>
    )
}