import { Col, Row } from "react-bootstrap"
import products from '../products'
import Product from '../components/Product'
import Rating from '../components/Rating'
const  HomePage = () => {
    return (
        <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}></Col>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
    )
}

export default HomePage
