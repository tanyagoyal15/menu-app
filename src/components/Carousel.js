import React , {Component} from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
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
			        showIndicators={false}
			        className="z-depth-1"
			        slide
			      >
			        <MDBCarouselInner>
			          <MDBCarouselItem itemId="1">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/21.jpg"
			                alt="First slide"
			                style={{'height' : '450px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			          <MDBCarouselItem itemId="2">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/22.jpg"
			                alt="Second slide"
			                style={{'height' : '450px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			          <MDBCarouselItem itemId="3">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/23.jpg"
			                alt="Third slide"
			                style={{'height' : '450px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			          <MDBCarouselItem itemId="4">
			            <MDBView>
			              <img
			                className="d-block w-100"
			                src="/food-items/24.jpg"
			                alt="Third slide"
			                style={{'height' : '450px'}}
			              />
			            </MDBView>
			          </MDBCarouselItem>
			        </MDBCarouselInner>
			      </MDBCarousel>
			</div>
		);
	}
}