import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from '../NavLink/NavLink'
import CreateNew from '../Product/CreateNew'

export default function Navbars() {
    const [createNew, setCreateNew] = useState(false)

    return (
        <>
            <Navbar variant='light' className='pt-3'>
                <Container>
                    <h3>Product List</h3>

                    <Nav className='ms-4'>
                        <Button
                            size='sm'
                            variant='secondary'
                            onClick={() => setCreateNew(true)}
                        >
                            Create new
                        </Button>
                    </Nav>

                    <Nav className='ms-auto'>
                        <NavLink href='/login'>
                            <a>Logout</a>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>

            <CreateNew show={createNew} onHide={() => setCreateNew(false)} />
        </>
    )
}
