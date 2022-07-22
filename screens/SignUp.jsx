import React,{useState} from "react";
import {connect} from 'react-redux'
import userActions from "../redux/actions/userActions";

function SignUp(props) {
    const [showpass, setShowPass] = useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [userPhoto,setUserPhoto] = useState("")
    const [country,setCountry] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    var countries = ["","Mexico","U.S.A.","Brazil","Argentina","China","Japan","Spain","England","France","Italy","Belgium"]

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            firstName: firstName,
            lastName: lastName,
            image: userPhoto,
            email: email,
            password: password,
            passwordRepeat: passwordRepeat,
            country: country,
            method: "signUpForm"
        }
        props.signUpUser(userData)
    }
    return (
        <>
            
        </>
    );
}
const mapDispatchToProps = {
    signUpUser: userActions.signUpUsers
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducer.message
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)