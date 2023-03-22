
import { useState } from "react"
import { Link } from "react-router-dom";
const Chikalox = () => {
  
    const [userIputValue, setUserInputValue] = useState("")
    const [passIputValue, setPassrInputValue] = useState("")
    const [nameIputValue, setNamerInputValue] = useState("")
    const [emailIputValue, setEmailInputValue] = useState("")
    const [phoneIputValue, setPhonerInputValue] = useState("")
   
    const user = userIputValue
    const pass = passIputValue
    const name = nameIputValue
    const phone = phoneIputValue
    const email = emailIputValue
    const [wts, setWts] = useState([])
    const nwn = document.querySelector('.ds')
    const updateUser = async () => {
        const list = document.querySelector('.list')
        const resp = await fetch(`https://petstore.swagger.io/v2/user/${name}`, {
            method: "PUT",
            headers: {
                'accept': 'application/json',
                'Content-type': 'aplication/json'
            },
            body: JSON.stringify({
                username: user,
                password: pass,
                email:email,
                phone: phone,
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
    const getUser = async ()=>{
        try{
        const resp = await fetch(`https://petstore.swagger.io/v2/user/${user}`)
        const data = await resp.json()
        console.log(data)
        setWts(wts => [ data])
        console.log(wts);
        {wts.map(item => (
            
           <div className="block">{item.username}</div>
        ))}
        }catch(error){
            alert(error)
        }
    }
    
    return (
        <>
 <header class="header">
        <div class="header__logo">My BD</div>
        <nav>
            <Link to='/' class="header__link">Зарегистрироваться</Link>
            <a href="./reg.html" class="header__link">{wts.map(item => (
            
            <a className="conts">{item.username}</a>
        ))}</a>
            <a href="#" class="header__link">Contact</a>
            
            
        
        </nav>
    </header>
            <div class="form containers">
                <div class="subtitle">Let's create your account!</div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" onChange={(e) => setNamerInputValue(e.target.value)} type="text" placeholder="введите имя" />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder"></label>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" onChange={(e)=> setUserInputValue(e.target.value)} type="text" placeholder="введите новое имя" />
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder"></label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="password" onChange={(e) => setPassrInputValue(e.target.value)} placeholder="введите новый пароль" />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">
                    </label></div>
                    <div class="input-container ic2">
                    <input id="email" class="input" type="email" onChange={(e) => setEmailInputValue(e.target.value)} placeholder="введите новую почту@" />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">
                    </label></div>
                    <div class="input-container ic2">
                    <input id="email" class="input" type="number" onChange={(e) => setPhonerInputValue(e.target.value)} placeholder="введите новый номер телефона" />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">
                    </label></div>
                   
                <button onClick={(e) => updateUser(e)&deletes(e)&setTimeout(e=>{
                    getUser()
                },3000)} type="text" class="submit">submit</button>
                {wts.map(item => (
            
            <div className="conts">Данные успешно измененны на <br />{'имя : '+item.username} <br />{'пароль : '+item.password} <br />{'номер : '+item.phone} <br />{'почта : '+item.email}</div>
        ))}
        <div className="list"></div>
            </div>
        </>
    )
}
export default Chikalox;