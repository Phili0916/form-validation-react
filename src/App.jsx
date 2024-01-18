import {useRef} from 'react'
import "./app.css"
import FormInput from "./components/FormInput"

const App = () => {
    // const [username, setUsername] = useState("")
    const usernameRef = useRef()
    
    return (
        <div className="app">
            <form>
                <FormInput usernameRef={usernameRef} placeholder="Username" />
                <FormInput placeholder="Email"/>
                <FormInput placeholder="Full Name"/>
                <FormInput placeholder="password"/>
            </form>
        </div>
    )
}

export default App