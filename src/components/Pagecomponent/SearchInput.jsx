import React from 'react'
import clear from '../../icons/cancel.svg';
import search from '../../icons/search.svg'
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    SearchContact: state.SearchContact
})


const mapDispatchToProps = (dispatch) => {
    return {
        setSearchContact: (searchword) => {
            dispatch({ type: 'SEARCH_CONTACT_IN_PAGE', payload: searchword })
        },
        ClearInput: () => {
            dispatch({ type: 'CLEAR_CONTACT_IN_INPUT', payload: '' })
        }
    }
}

function SearchInput(props) {

    return <div className="searchInput">
        <input
            placeholder="Хочу работать в OblikSoft"
            value={props.SearchContact}
            type="text"
            onChange={(e) => props.setSearchContact(e.target.value)} />
        <button

            onClick={props.ClearInput}>
            <img className="searchInput__clear" src={clear} alt="" />
        </button>
        <button> <img src={search} alt="" /></button>
    </div>

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)

