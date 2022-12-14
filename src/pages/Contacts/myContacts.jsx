
import ContactList from "components/ContactList/contactlist";
import { FilterContacts } from "components/Filter/filter";
import Phonebook from "components/Phonebook/phonebook";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/selectors";
import { selectError } from "redux/selectors";



const MyContactsPage = () => {
  
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    

    return (
        <div  style={{
            height: '100vh',
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}>
       
             <Phonebook/>
    <FilterContacts/>
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList/>
        
    </div>
)

}
export default MyContactsPage;