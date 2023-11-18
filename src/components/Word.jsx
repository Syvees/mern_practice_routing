import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {

    const { word, fcolor, bcolor} = useParams ()

    return (
    <div style={{background:bcolor, color:fcolor}}>The word is .... {word} </div>
    )
}

export default Word