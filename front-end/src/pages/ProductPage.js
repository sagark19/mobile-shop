import {Link } from 'react-router-dom'
import { Row, Col, ListGroup,Image,ListGroupItem, Card, Button} from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'
const ProductPage = ({ match}) => {
   const product = products.find(product => product._id === match.params.id)
    return (
        <>
        <Link className= 'btn btn-light' to='/' >Go Back</Link>
        <Row>
            <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant = 'flush'>
                <ListGroupItem><h3>{product.name} </h3></ListGroupItem>
                <ListGroupItem><Rating value = {product.rating} text={`${product.numReviews} Reviews`}/> </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>Description: {product.description}</ListGroupItem>
                </ListGroup>
                
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush' >
                    <ListGroupItem disabled={product.countInStock === 0} >
                        <Row>
                        <Col>
                        Price: 
                        </Col>
                        <Col>
                        ${product.countInStock > 0 ? product.price:'-'}
                        </Col>
                        </Row>        
                        </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                        <Col>
                        Status: 
                        </Col>
                        <Col>
                        {product.countInStock > 0 ? 'In Stock':'Out Of Stock'}
                        </Col>
                        </Row>        
                        </ListGroupItem>
                        
                <ListGroupItem disabled={product.countInStock === 0} >
                    <Button className='btn-block' type='button' block>add to cart</Button>
                </ListGroupItem>

                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default ProductPage
