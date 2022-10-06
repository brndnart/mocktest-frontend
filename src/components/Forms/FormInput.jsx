import Form from 'react-bootstrap/Form'

export default function FormInput(props) {
    const { controlId, type, placeholder, name, value, onChange } = props

    return (
        <Form.Group className='mb-3' controlId={controlId}>
            <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </Form.Group>
    )
}
