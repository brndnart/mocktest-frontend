import Card from 'react-bootstrap/Card'

export default function Cards(props) {
    const { className, bg, children } = props

    return (
        <Card bg={bg} className={className}>
            <Card.Body>{children}</Card.Body>
        </Card>
    )
}
