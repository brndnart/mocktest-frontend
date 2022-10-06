import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Forms from '../Forms/Forms.jsx'
import FormInput from '../Forms/FormInput'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function CreateNew(props) {
    const token = useSelector((state) => state.token.accessToken)

    const [product, setProduct] = useState({
        name: '',
        price: '',
        imageurl: '',
    })

    const handleProductInput = (e) => {
        const { name, value } = e.target
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        console.log(product)
    }

    const handleCreateProduct = (e) => {
        e.preventDefault()

        async function createProduct(url = '', data = {}) {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
                body: JSON.stringify(data),
            })
            return res.json()
        }

        try {
            createProduct('https://test-binar.herokuapp.com/v1/products/', {
                name: product.name,
                price: product.price,
                imageurl: product.imageurl,
            }).then((data) => {
                console.log(data)
                props.onHide
            })
        } catch (error) {
            console.error('Create product failed!', error)
        }
    }

    return (
        <>
            <Modal {...props} centered>
                <Modal.Body>
                    <h5 className='title mb-4'>Create new</h5>

                    <Forms onSubmit={handleCreateProduct}>
                        <FormInput
                            controlId='productName'
                            type='text'
                            placeholder='Prodcut Name'
                            name='name'
                            onChange={handleProductInput}
                        />
                        <FormInput
                            controlId='productPrice'
                            type='text'
                            placeholder='Price (Dollar USD)'
                            name='price'
                            onChange={handleProductInput}
                        />
                        <FormInput
                            controlId='productImage'
                            type='text'
                            placeholder='Image Url'
                            name='imageurl'
                            onChange={handleProductInput}
                        />

                        <hr />

                        <div className='text-end'>
                            <Button variant='white' onClick={props.onHide}>
                                Back
                            </Button>

                            <Button variant='secondary' type='submit'>
                                Create
                            </Button>
                        </div>
                    </Forms>
                </Modal.Body>
            </Modal>
        </>
    )
}
