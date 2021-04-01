import React from 'react'
import female from '../../icons/female.svg'
import male from '../../icons/male.svg'
import viber from '../../icons/viber.svg'
import telegram from '../../icons/telegram.svg'
import { connect } from "react-redux"
import LightContact from './LightContact'


const mapStateToProps = (state) => {
    return ({
        messageId: state,
        searchContact: state.SearchContact
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        ReadMessage: (id) => {
            dispatch({ type: 'READ_MESSAGE', payload: id })
        }

    }
}


function Contact({ style, data, index, ReadMessage, searchContact }) {

    return <li
        style={style}
        className={`Contact ${!data[index].status ? 'back' : 'none'}`}
        onClick={() => ReadMessage(data[index].id)}
    >
        {
            data[index].sex === 'man' ?
                <div className="Contact__Rack m">
                    <img className="Contact__sex" src={male}></img>
                    <img className="Contact__mess" src={viber}></img>
                </div>
                :
                <div className="Contact__Rack w">
                    <img className="Contact__sex" src={female}></img>
                    <img className="Contact__mess" src={telegram}></img>
                </div>
        }
        <div className='Contact__info'>
            <div className="Contact__fullname">
                <span >{data[index].fullname}
                </span><br />
                <LightContact word={data[index].phonenumber} subword={searchContact} />
            </div>
            <span className="Contact__title">{data[index].title}</span>
            <span className="Contact__date">{data[index].date}</span>
        </div>

    </li>
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)