import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Forms from '../Forms/Forms.jsx'
import FormInput from '../Forms/FormInput'

export default function EditProduct(props) {
    return (
        <>
            <Modal {...props} centered>
                <Modal.Body>
                    <h5 className='title mb-4'>Edit product</h5>

                    <Forms>
                        <FormInput
                            controlId='productName'
                            type='text'
                            placeholder='Prodcut Name'
                        />
                        <FormInput
                            controlId='productPrice'
                            type='text'
                            placeholder='Price (Dollar USD)'
                        />
                        <FormInput
                            controlId='productImage'
                            type='text'
                            placeholder='Image Url'
                        />
                    </Forms>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='white' onClick={props.onHide}>
                        Back
                    </Button>

                    <Button variant='secondary'>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
