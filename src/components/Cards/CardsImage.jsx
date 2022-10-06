import { PencilSquare, Trash3 } from 'react-bootstrap-icons'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import EditProduct from '../Product/EditProduct'
import DeleteProduct from '../Product/DeleteProduct'

export default function CardsImage(props) {
    const { name, price, image } = props

    const [editProduct, setEditProduct] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState(false)

    return (
        <>
            <Card>
                <Card.Img
                    variant='top'
                    src={image ? image : '/dummy.png'}
                    height='200'
                />
                <Card.ImgOverlay className='text-end'>
                    <Button
                        size='sm'
                        variant='white'
                        onClick={() => setEditProduct(true)}
                    >
                        <PencilSquare size={20} />
                    </Button>

                    <Button
                        size='sm'
                        variant='white'
                        onClick={() => setDeleteProduct(true)}
                    >
                        <Trash3 size={20} />
                    </Button>
                </Card.ImgOverlay>
                <hr />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-muted'>$ {price}</Card.Text>
                </Card.Body>
            </Card>

            <EditProduct
                show={editProduct}
                onHide={() => setEditProduct(false)}
            />

            <DeleteProduct
                show={deleteProduct}
                onHide={() => setDeleteProduct(false)}
            />
        </>
    )
}
