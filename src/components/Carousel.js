import React , {Component} from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";
import 'mdbreact/dist/css/mdb.css';
import '../App.css';

export default class Carousel extends Component {
	render() {
		return (
			<div className="Carousel container-fluid">
			      <MDBCarousel
			        activeItem={1}
			        length={4}
			        showControls={false}
			        showIndicators={true}
			        className="z-depth-1"
			        slide
			      >
			        <MDBCarouselInner>
			          <MDBCarouselItem itemId="1">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/p3.jpg"
			                alt="First slide"
			                style={{'height' : '600px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			          <MDBCarouselItem itemId="2">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/p4.jpg"
			                alt="Second slide"
			                style={{'height' : '600px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			          <MDBCarouselItem itemId="3">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/p1.jpg"
			                alt="Third slide"
			                style={{'height' : '600px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			          <MDBCarouselItem itemId="4">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/p2.jpg"
			                alt="Third slide"
			                style={{'height' : '600px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			        </MDBCarouselInner>
			      </MDBCarousel>
			</div>
		);
	}
}