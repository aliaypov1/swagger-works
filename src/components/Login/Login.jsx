import { useState } from "react"
import { NavLink } from "react-router-dom"
const Login = () => {
    const [emailInpValue, setEmailInpValue] = useState("")
    const [passwordInpValue, setPasswordInpValue] = useState("")
    const email = emailInpValue
    const pass = passwordInpValue
    const login = async (e) => {
        try{
        const resp = await fetch(`https://petstore.swagger.io/v2/user/login?username=${email}&password=${pass}`)
        const data = await resp.json()
        console.log(data)
        }catch(error){
            alert(error)
        }
    }
    const getUser = async ()=>{
        try{
        const resp = await fetch(`https://petstore.swagger.io/v2/user/${email}`)
        const data = await resp.json()
        console.log(data)
        }catch(error){
            alert(error)
        }
    }
    return (
        <>
            <div class="login-box">
                <p>Login</p>
                <form>
                    <div class="user-box">
                        <input required="" name="" onChange={(e) => setEmailInpValue(e.target.value)} type="text" />
                        <label>userName</label>
                    </div>
                    <div class="user-box">
                        <input required="" name="" onChange={(e) => setPasswordInpValue(e.target.value)} type="password" />
                        <label>Password</label>
                    </div>
                    <NavLink  to='/Chikalox' onClick={(e)=> login(e)&getUser(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </NavLink>
                </form>
                <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
            </div>
        </>
    )
}
export default Login;