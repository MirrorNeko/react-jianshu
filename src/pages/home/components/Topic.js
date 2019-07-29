import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from '../style';

class Topic extends Component{
	render(){
		const list = this.props.list;
		return(
			<TopicWrapper>
				{
					list.map((item) => {
						return(
							<TopicItem key={item.get('id')}>
								<img className='topic-pic' src={require('../' + item.get('imgUrl'))} alt='' />
								{item.get('title')}
							</TopicItem>
						)
					})
				}	
			</TopicWrapper>
		)
	}
}
//mapState：从store里拿数据
//dispatch: 改数据
const mapState = (state) => ({
	list: state.get('home').get('topicList')
});
export default connect(mapState, null)(Topic);