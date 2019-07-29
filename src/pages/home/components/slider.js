import React, {Component} from 'react';
import '../style.css';
import banner1 from '../../../img/banner1.jpg';
import banner2 from '../../../img/banner2.jpg';

class Slider extends Component{
	
	render(){
		return(
			<div className = 'banner'>
				<div className = 'banner-item cur'>
					<a className='banner-img'><img alt = '' src={banner1}/></a>
				</div>
				<div className = 'banner-item'>
					<a className='banner-img'><img alt = '' src={banner2}/></a>
				</div>
			</div>
		)
	}
}

export default Slider;