import FuzzySearch from 'fuzzy-search'

export default function SearchContact(state, searchword) {

    const Data = state.ContactStore

    return Data.filter((it) => {
        const searcher = new FuzzySearch([it], ['phonenumber', 'fullname'], { caseSensitive: false })
        const result = searcher.search(searchword)
        return it && result.length
    })
}

