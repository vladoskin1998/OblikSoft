import { connect } from "react-redux"
import SearchInput from '../components/PageComponents/SearchInput'
import ActionSearchContactInPage from '../Store/Action/ActionSearchContactInPage'
import ActionClearContactInInput from '../Store/Action/ActionClearContactInInput'


const mapStateToProps = (state) => ({
    SearchContact: state.SearchContact
})


const mapDispatchToProps = (dispatch) => {
    return {
        setSearchContact: (searchword) => {
            dispatch(ActionSearchContactInPage(searchword))
        },
        ClearInput: () => {
            dispatch(ActionClearContactInInput())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)