import Form from 'react-bootstrap/Form'

export default function Forms(props) {
    const { onSubmit, children } = props

    return <Form onSubmit={onSubmit}>{children}</Form>
}
