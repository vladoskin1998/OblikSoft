import { combineReducers } from 'redux'
import ContactStore from './ContactStore/ContactStore'
import SearchContact from './SearchModCard/SearchModCard'

export default combineReducers({
    ContactStore,
    SearchContact
})
