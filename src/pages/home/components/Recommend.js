import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper, RecommendItem} from '../style';

class Recommend extends Component{
	render(){
		const list = this.props.list;
		return(
			<RecommendWrapper>
				{
					list.map((item) => {
						return(
							<RecommendItem key={item.get('id')}>
								<img className = 'pic' alt='' src={require('../' + item.get('imgUrl'))}/>
							</RecommendItem>
						)
					})
				}
			</RecommendWrapper>
		)	
	}
}
const mapState = (state) =>({
	list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend);