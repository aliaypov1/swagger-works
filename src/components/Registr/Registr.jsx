
import { useState } from "react"
import { NavLink,Link } from "react-router-dom"

const Registr = () => {
    const [userValue, setUserInpValue] = useState("")
    const [lastInpValue, setLastInpValue] = useState("")
    const [emailInpValue, setEmailInpValue] = useState("")
    const [passwordInpValue, setPasswordInpValue] = useState("")
    const [phonedInpValue, setPhoneInpValue] = useState("")
    const ifs = (e)=>{
        if(e.target.value === ''){
           return alert('э бля поле заполнил нахуй')
        }else{
           return alert('пиздуй дальше')
        }

    
    }
    const createUser = async (e) => {
        const user = userValue
        const last = lastInpValue
        const email = emailInpValue
        const pass = passwordInpValue
        const phone = phonedInpValue
            const resp = await fetch(`https://petstore.swagger.io/v2/user/createWithArray`, {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([{
                    username: userValue,
                    lastName: lastInpValue,
                    email: emailInpValue,
                    password: passwordInpValue,
                    phone: phonedInpValue
                }])




            })
            
            const data = await resp.json()
            console.log(data)
            
       
    }
    return (
        <div className="containers">

            <div class="container">
                <div class="card">
                    <a class="login">Register</a>
                    <div class="inputBox">
                        <input type="text" required="required" name="inps" onBlur={(e)=> ifs(e)} onChange={(e) => { setUserInpValue(e.target.value) }} />
                        <span class="user">Username</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" required="required" name="kkk"  onChange={(e) => { setLastInpValue(e.target.value) }} />
                        <span class="user">Lastname</span>
                    </div>

                    <div class="inputBox">
                        <input type="email" required="required" name="ok" onChange={(e) => { setEmailInpValue(e.target.value) }} />
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required" name="jj"  onChange={(e) => { setPasswordInpValue(e.target.value) }} />
                        <span>Password</span>
                    </div>
                    <div class="inputBox">
                        <input type="number" required="required" name="oo" onChange={(e) => { setPhoneInpValue(e.target.value) }} />
                        <span>Phone</span>
                    </div>

                    <NavLink to='/Login' class="enter" onClick={(e) => createUser(e)}>Enter</NavLink>

                </div>
            </div>
        </div>
    )
}
export default Registr;