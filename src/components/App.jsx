import React, { useEffect } from "react"
import { connect } from "react-redux"
import ActionGetDataFromServer from '../Store/ContactStore/ActionGetDataFromServer'
import ContactList from './Pagecomponent/ContactList'
import HederContact from './Pagecomponent/HederContact'
import SearchInput from './Pagecomponent/SearchInput'
import SearchContact from './Methods/SearchContact'
import SortData from './Methods/SortData'

const mapStateToProps = (state) => {
    return ({
        contactStorage: SearchContact(state, state.SearchContact)
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        GetDataServer: () => {
            dispatch(ActionGetDataFromServer())
        }

    }
}

function App({ GetDataServer, contactStorage }) {

    useEffect(() => { GetDataServer() }, [])

    return (
        <div className="App">
            <SearchInput />
            <HederContact len={contactStorage.length} />
            <ContactList state={SortData(contactStorage)} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)