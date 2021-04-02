import { combineReducers } from 'redux'
import ContactStore from './Redusers/ContactStore'
import SearchContact from './Redusers/SearchModCard'

export default combineReducers({
    ContactStore,
    SearchContact
})
