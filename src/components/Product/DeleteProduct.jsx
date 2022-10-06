import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EditProduct(props) {
    return (
        <>
            <Modal {...props} centered>
                <Modal.Body>
                    <h4 className='title text-center mb-4'>
                        Are you sure want to delete ?
                    </h4>
                </Modal.Body>

                <hr />

                <Container>
                    <Row className='px-3 pb-3'>
                        <Col>
                            <div className='d-grid'>
                                <Button
                                    variant='secondary'
                                    onClick={props.onHide}
                                >
                                    No
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-grid'>
                                <Button variant='secondary'>
                                    Yes, delete it
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </>
    )
}
