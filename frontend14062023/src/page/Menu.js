import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import motivational from '../images/motivational.jpg';  
import motb from '../images/motb.jpg'
function Menu() {  
  return (  
    <div className="Menu">  
    <div>
   <Container className='p-4'>  
  <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={motivational} />  
  <Card.Body>  
    <Card.Title>The Magic of Thinking Big</Card.Title>  
    <Card.Text>  
    The Magic of Thinking Big, first published in 1959, is a self-help book by David J. Schwartz. An abridged version was published in 1987. Forbes called it one of the greatest self-help books
      </Card.Text>  
    <Button variant="primary">Read More</Button>  
  </Card.Body>  
</Card>  
    </Col>  
</Container> 
</div> 

<span>
<Container className='p-4'>  
  <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={motb} />  
  <Card.Body>  
    <Card.Title>The Magic of Thinking Big</Card.Title>  
    <Card.Text>  
    The Magic of Thinking Big, first published in 1959, is a self-help book by David J. Schwartz. An abridged version was published in 1987. Forbes called it one of the greatest self-help books
      </Card.Text>  
    <Button variant="primary" href='/Home'>Read More</Button>  
  </Card.Body>  
</Card>  
    </Col>  
</Container> 

</span>


    </div>  

    
  );  
}  
export default Menu;  