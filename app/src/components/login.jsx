import '../styles/Login.css'

export default function Login() {
    return (
    <form className="LoginForm">
        <h1>Mine Sweeper</h1>
        <input type="text" placeholder="Username"/>
        <input type="submit" value='Login'/>
    </form>
    )
}

