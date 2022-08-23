import axios from "axios";

export const login = (loginObj)=>{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginObj)
    return response
    console.log("login in process")
}
export const sign = (signupObj)=>{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",signupObj)
    return response
    console.log("login in process")
}