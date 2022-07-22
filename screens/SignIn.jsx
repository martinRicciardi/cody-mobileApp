import React,{useState} from "react";
import {connect} from 'react-redux'
import userActions from "../redux/actions/userActions";

function Login(props) {
    const [showpass, setShowPass] = useState(false)
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(email);
        console.log(password);
        const logedUser = {
            email: email,
            password: password,
            from: "signUpForm",
        }
        await props.signInUser(logedUser)
    }

    return (
        <>
            
        </>
    );
}
    const mapDispatchToProps = {
    signInUser: userActions.signInUser
}
const mapStateToProps = (state) => {
    return {
            message: state.userReducer.message
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Login)