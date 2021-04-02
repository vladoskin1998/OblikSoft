import React from 'react'
import { FixedSizeList as List } from 'react-window'
import Contact from '../../containers/Contact'


export default function ContactList(props) {
    return (
        <React.Fragment>
            {
                !props.state.length ? "...undefinded" :
                    <List
                        height={0.75 * window.innerHeight}
                        itemCount={props.state.length}
                        itemSize={70}
                        width={700}
                        itemData={props.state}
                    >
                        {Contact}
                    </List>
            }

        </ React.Fragment>

    )
}
