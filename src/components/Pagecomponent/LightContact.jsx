import React from 'react'

export default function LightContact({ word, subword }) {

    let lightword = []
    let blackword = [...word.split('')]

    for (let i = 0; i < word.split('').length; i++) {
        if (subword.split('')[i] !== word.split('')[i]) break;
        lightword.push(word.split('')[i])
        blackword.splice(0, 1)
    }
    return (
        <React.Fragment>
            <span className="colormess">{lightword}</span>
            <span>{blackword}</span>
        </React.Fragment>
    );
}

