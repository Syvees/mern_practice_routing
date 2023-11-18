import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <>
        <Link to={"/"}>Landing Page</Link><br></br>
        <Link to={"/home"}>Home</Link><br></br>
        <Link to={"/form"}>Form</Link>
    </>
    )
}

export default Nav