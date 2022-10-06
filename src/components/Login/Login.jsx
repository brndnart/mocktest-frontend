import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from '../Cards/Cards.jsx'
import Forms from '../Forms/Forms.jsx'
import FormInput from '../Forms/FormInput'
import Button from 'react-bootstrap/Button'
import Link from 'next/link.js'
import { useRouter } from 'next/router.js'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/token'

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleUserInput = (e) => {
        const { name, value } = e.target
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault()

        async function login(url = '', data = {}) {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            return res.json()
        }

        try {
            login('https://test-binar.herokuapp.com/auth/login', {
                email: user.email,
                password: user.password,
            }).then((data) => {
                dispatch(setToken(data.result.access_token))
                router.push('/dashboard')
            })
        } catch (error) {
            console.error('Login failed!', error)
        }
    }

    return (
        <>
            <div className='title text-center mb-4'>
                <h1>Login</h1>
            </div>

            <Container>
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <Cards className='p-4'>
                            <Forms onSubmit={handleLogin}>
                                <FormInput
                                    controlId='email'
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    onChange={handleUserInput}
                                />
                                <FormInput
                                    controlId='password'
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    onChange={handleUserInput}
                                />

                                <div className='d-grid'>
                                    <Button variant='secondary' type='submit'>
                                        Login
                                    </Button>
                                </div>
                            </Forms>
                        </Cards>
                    </Col>
                </Row>
            </Container>

            <div className='register-redirect text-center mt-3'>
                Dont have an account? {''}
                <Link href='/register'>
                    <a>Register</a>
                </Link>
            </div>
        </>
    )
}
