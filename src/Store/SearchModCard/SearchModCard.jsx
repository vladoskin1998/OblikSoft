let initstate = ''

export default function SearchContact(state = initstate, action) {
    if (action.type === 'SEARCH_CONTACT_IN_PAGE') {
        return action.payload
    }
    if (action.type === 'CLEAR_CONTACT_IN_INPUT') {
        return action.payload
    }
    return state
}