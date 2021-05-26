import React from 'react';
import './Nav2.css'
import {  Carousel,  ListGroup } from 'react-bootstrap'

export const NavBar2 = () => {
    return (
        <div>
            
            <div className='nav2'>
              <div className='drop_down_table'>
              <ListGroup>
                <ListGroup.Item>Random Materials</ListGroup.Item>
                <ListGroup.Item>African Ankara Materials</ListGroup.Item>
                <ListGroup.Item>Isiagu Materials</ListGroup.Item>
                <ListGroup.Item>Senator Materials</ListGroup.Item>
                <ListGroup.Item>Random Shirt Materials</ListGroup.Item>
                <ListGroup.Item>Chinos & jean Material</ListGroup.Item>
                <ListGroup.Item>Plain & lace Material</ListGroup.Item>
                <ListGroup.Item>More Material</ListGroup.Item>
              </ListGroup>
              </div>
              <div className='pic'>
                 <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src='https://picsum.photos/1000/565'
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://picsum.photos/1000/565"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://picsum.photos/1000/565"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className='drop_down_table'>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              </div>
             
            </div>
            

            </div>
            
    )
}
