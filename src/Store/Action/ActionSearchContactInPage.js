export default function ActionReadMessage(searchword){
    return { 
        type: 'SEARCH_CONTACT_IN_PAGE',
        payload: searchword 
    }
}