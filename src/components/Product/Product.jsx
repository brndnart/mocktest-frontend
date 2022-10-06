import CardsImage from '../Cards/CardsImage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter()
    const token = useSelector((state) => state.token.accessToken)

    const [getProducts, setGetProducts] = useState([])

    useEffect(() => {
        let isCancelled = false
        fetch('https://test-binar.herokuapp.com/v1/products', {
            headers: {
                Authorization: token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (!isCancelled) {
                    setGetProducts(data.result)
                }

                if (!token) {
                    router.push('/')
                }
            })

        return () => {
            isCancelled = true
        }
    }, [token, router])

    return (
        <>
            <Container>
                <Row>
                    {getProducts.map((products) => (
                        <Col lg={3} className='pt-5' key={products?.id}>
                            <CardsImage
                                name={products?.name}
                                price={products?.price}
                                image={products?.imageurl}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
