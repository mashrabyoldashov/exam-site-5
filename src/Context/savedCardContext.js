import { createContext, useState ,useEffect } from "react";

const Context = createContext()

function Provider ({children}) {

    const [sumMoney, setSumMoney] = useState("")
    const [smartphone, setSmartphone] = useState([])
    const [saveCards, setSaveCards] = useState([])
    const [saveKorzinka, setSaveKorzinka] = useState([])
    const [korzinkaLength, setKorzinkaLength] = useState("0")
    const [likeLength, setLikeLength] = useState("0")
    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        fetch("https://my-servesis.herokuapp.com/products")
        .then(response => response.json())
        .then(result => setSmartphone(result))
    }, [])
    
    return (
        <Context.Provider value={{sumMoney, setSumMoney, smartphone, setSmartphone, 
            saveCards, setSaveCards,saveKorzinka,setSaveKorzinka, 
            userData,setUserData,korzinkaLength,
            setKorzinkaLength,likeLength,setLikeLength
            }}>
             {children}
        </Context.Provider>
    )
}

export {Context, Provider}