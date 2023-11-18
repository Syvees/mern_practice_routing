import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate()
    const [word, setWord] = useState("")
    const [fcolor, setFColor] = useState("")
    const [bcolor, setBColor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${word}/${fcolor}/${bcolor}`)
    }

    return (
    <div>
        <h2>Word and Color Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Word">Word: </label>
                <input type="text" onChange={e => setWord(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="Font Color">Font Color: </label>
                <input type="text" onChange={e => setFColor(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="Background Color">Background Color: </label>
                <input type="text" onChange={e => setBColor(e.target.value)}></input>
            </div>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default Form