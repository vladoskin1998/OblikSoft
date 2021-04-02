import React from 'react'
import refresh from '../../icons/refresh.svg'

export default function HederContact({ len }) {
    return <div className='HederContact'>
        <button onClick={() => window.location.reload()}>
            <img src={refresh} />
        </button>
        <span>{`Знайдено ${len} контактів`}</span>
    </div>
}