import { connect } from "react-redux"
import App from '../components/App'
import ActionGetDataFromServer from '../Store/Action/ActionGetDataFromServer'
import SearchContact from './SearchContact'

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

export default connect(mapStateToProps, mapDispatchToProps)(App)