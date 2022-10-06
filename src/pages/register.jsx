import Head from 'next/head'
import RegisterComponent from '../components/Register/Register'

export default function Register() {
    return (
        <div style={{ paddingTop: '200px' }}>
            <Head>
                <title>Register</title>
            </Head>

            <RegisterComponent />
        </div>
    )
}
