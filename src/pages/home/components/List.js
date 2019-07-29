import React, {Component} from 'react';
import {ListItem, ListInfo} from '../style';
import {connect} from 'react-redux';

class List extends Component{
	render(){
		const list = this.props.list;
		return(
			<div>
			{
				list.map((item) => {
					return(
						<ListItem key={item.get('id')}>
							<img className='pic' alt='' src={require('../' + item.get('imgUrl'))}/>
							<ListInfo>
								<a className="title" target="_blank" href="/p/effad4a2ca84">{item.get('title')}</a>
								<p className="abstract">
      								{item.get('abstract')}
    							</p>
								<div className='meta'></div>
							</ListInfo>
						</ListItem>
					);
				})
			}
				</div>
		);
	}
}
const mapState = (state) => ({
	list: state.get('home').get('articleList')
})
export default connect(mapState)(List);