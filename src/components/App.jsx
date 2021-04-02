import React, { useEffect } from "react"
import ContactList from './PageComponents/ContactList'
import HederContact from './PageComponents/HederContact'
import SearchInput from '../containers/SearchInput'
import SortData from '../containers/SortData'


export default function App({ GetDataServer, contactStorage }) {

    useEffect(() => { GetDataServer() }, [])

    return (
        <div className="App">
            <SearchInput />
            <HederContact len={contactStorage.length} />
            <ContactList state={SortData(contactStorage)} />
        </div>
    )
}

