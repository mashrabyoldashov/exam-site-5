import { createContext, useState ,useEffect } from "react";

const Context = createContext()

function Provider ({children}) {

    const userDataLocalStorage = JSON.parse(window.localStorage.getItem("userData"))
    const localKorzinka = JSON.parse(window.localStorage.getItem("korzinka"))
    const localSaveCaards = JSON.parse(window.localStorage.getItem("saved"))

    const [sumMoney, setSumMoney] = useState("")
    const [smartphone, setSmartphone] = useState([])
    const [saveCards, setSaveCards] = useState(localSaveCaards || [])
    const [saveKorzinka, setSaveKorzinka] = useState(localKorzinka || [])
    const [korzinkaLength, setKorzinkaLength] = useState("0")
    const [likeLength, setLikeLength] = useState("0")
    const [userData, setUserData] = useState(userDataLocalStorage || [])
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('token')) || null)
    let [adminLogin, setAdminLogin] = useState("")
    let [adminParol, setAdminParol] = useState("")

    useEffect(() => {
        window.localStorage.setItem(JSON.stringify('token'), token)
    }, [token])

    useEffect(() => {
        fetch("https://my-servesis.herokuapp.com/products")
        .then(response => response.json())
        .then(result => setSmartphone(result))
    }, [])


    window.localStorage.setItem("korzinka", JSON.stringify(saveKorzinka))
    window.localStorage.setItem("saved", JSON.stringify(saveCards))
    
    useEffect(() => {
        window.localStorage.setItem("userData", JSON.stringify(userData))
    }, [userData])
    
    return (
        <Context.Provider value={{sumMoney, setSumMoney, smartphone, setSmartphone, 
            saveCards, setSaveCards,saveKorzinka,setSaveKorzinka, 
            userData,setUserData,korzinkaLength,
            setKorzinkaLength,likeLength,setLikeLength,
            token,setToken,adminLogin,setAdminLogin,adminParol,setAdminParol
            }}>
             {children}
        </Context.Provider>
    )
}

export {Context, Provider}