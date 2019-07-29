import React, {Component} from 'react';
import Slider from './components/slider';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';

class Home extends Component{
	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<Slider />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}
}

export default Home;
