import { createContext, useState } from "react"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);

export const Authcontext = createContext(null)



export default function AuthProvider({ children }) {
    const [user, setuser] = useState(null)
    const [loadding,setloadding]=useState(true)

    const createUser = (email, password) => {
        setloadding(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const userinfo = {
        user,
        loadding,
        createUser

    }
    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    )
}
