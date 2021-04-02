import { connect } from "react-redux"
import Contact from '../components/PageComponents/Contact'
import ActionReadMessage from '../Store/Action/ActionReadMessage'

const mapStateToProps = (state) => {
    return ({
        messageId: state,
        searchContact: state.SearchContact
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        ReadMessage: (id) => {
            dispatch(ActionReadMessage(id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)