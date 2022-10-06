import Head from 'next/head'
import LoginComponent from '../components/Login/Login.jsx'

export default function Login() {
    return (
        <div style={{ paddingTop: '200px' }}>
            <Head>
                <title>Login</title>
            </Head>

            <LoginComponent />
        </div>
    )
}
