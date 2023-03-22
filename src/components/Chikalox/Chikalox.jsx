
import { useState } from "react"
const Chikalox = () => {

    const [userIputValue, setUserInputValue] = useState("")
    const [passIputValue, setPassrInputValue] = useState("")
    const [nameIputValue, setNamerInputValue] = useState("")
    const user = userIputValue
    const pass = passIputValue
    const name = nameIputValue
    const updateUser = async () => {
        const resp = await fetch(`https://petstore.swagger.io/v2/user/${name}`, {
            method: "PUT",
            headers: {
                'accept': 'application/json',
                'Content-type': 'aplication/json'
            },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        })
        const data = resp.json()
        console.log(data)
    }
    const deletes = async()=>{
        try{
        const resp = await fetch(`https://petstore.swagger.io/v2/user/${name}`,{method:'DELETE'})
        const data = await resp.json()
        console.log(data)
        }catch(error){
            alert(error+' - !Вы не можете удалить не существующего пользователя')
        }
    }
    return (
        <>

            <div class="form containers">
                <div class="subtitle">Let's create your account!</div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" onChange={(e) => setNamerInputValue(e.target.value)} type="text" placeholder="" />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">First name</label>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" onChange={(e) => setUserInputValue(e.target.value)} type="text" placeholder="name" />
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Last name</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="password" onChange={(e) => setPassrInputValue(e.target.value)} placeholder="pass" />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Email
                    </label></div>
                <button onClick={(e) => updateUser(e)&deletes(e)} type="text" class="submit">submit</button>
            </div>
        </>
    )
}
export default Chikalox;