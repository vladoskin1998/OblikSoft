import React from 'react'
import clear from '../../icons/cancel.svg';
import search from '../../icons/search.svg'


export default function SearchInput(props) {

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



