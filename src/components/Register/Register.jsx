import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from '../Cards/Cards.jsx'
import Forms from '../Forms/Forms.jsx'
import FormInput from '../Forms/FormInput'
import Button from 'react-bootstrap/Button'
import Link from 'next/link.js'
import { useState } from 'react'
import { useRouter } from 'next/router.js'

export default function Register() {
    const router = useRouter()

    const [user, setUser] = useState({
        name: '',
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

    const handleRegister = (e) => {
        e.preventDefault()

        async function register(url = '', data = {}) {
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
            register('https://test-binar.herokuapp.com/auth/signup', {
                name: user.name,
                email: user.email,
                password: user.password,
            }).then((data) => {
                console.log(data)
                router.push('/dashboard')
            })
        } catch (error) {
            console.error('Register failed!', error)
        }
    }

    return (
        <>
            <div className='title text-center mb-4'>
                <h1>Register</h1>
            </div>

            <Container>
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <Cards className='p-4'>
                            <Forms onSubmit={handleRegister}>
                                <FormInput
                                    controlId='name'
                                    type='text'
                                    placeholder='Name'
                                    name='name'
                                    onChange={handleUserInput}
                                />
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
                                        Register
                                    </Button>
                                </div>
                            </Forms>
                        </Cards>
                    </Col>
                </Row>
            </Container>

            <div className='login-redirect text-center mt-3'>
                Already have account? {''}
                <Link href='/'>
                    <a>Login</a>
                </Link>
            </div>
        </>
    )
}
