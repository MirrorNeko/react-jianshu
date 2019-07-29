import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import './style.css';
import {actionCreators} from './store';
//import * as actionCreators from './store/actionCreators.js';
import {
	HeaderWrapper,
	Logo,
	Nav,NavItem, NavSearch,
	Addition, Button,
	SearchWrapper, SearchInfo,SearchInfoTitle,SearchInfoSwitch,
	SearchInfoItem
} from './style.js'; 



class Header extends Component{
	constructor(props){
		super(props);
		/*
		this.state = {
			focused: false
		}
		*/
	}
	render(){
		return(
			<HeaderWrapper>
				<Logo href = '/'/>
				<Nav>
					<NavItem className = 'left active'>首页</NavItem>
					<NavItem className = 'left'>下载APP</NavItem>
					<NavItem className = 'right'>登陆</NavItem>
					<NavItem className = 'right'>Aa</NavItem>
					<SearchWrapper>
					  <CSSTransition
					  	in={this.props.focused}
					  	timeout={200}
					  	classNames = 'slide'
					  >
						<NavSearch 
						className = {this.props.focused ? 'focused' : ''}
						/*
						onFocus = {this.handleInputFocus.bind(this)}
						onBlur = {this.handleInputBlur.bind(this)}
						*/
						onFocus = {() => this.props.handleInputFocus(this.props.list)}
						onBlur = {this.props.handleInputBlur}
						></NavSearch>
					  </CSSTransition>
						<a className = 'searchIcon'></a>
						{this.getListArea()}
					</SearchWrapper>
					
				</Nav>
				<Addition>
					<Button className = 'writing'>写文章</Button>
					<Button className = 'reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
	/*
	handleInputFocus(){
		this.setState({
			focused: true
		})

	}
	handleInputBlur(){
		this.setState({
			focused: false
		})
	}
	*/
getListArea() {
	const {focused, list ,page, mouseIn, totalPage,
	 handelMouseInter, handleMouseLeave, handleChangePage} = this.props;//解构赋值
	const newList = list.toJS();
	const pageList = [];
	if(newList.length){
		for(let i=(page-1)*10; i<page*10; i++){
		pageList.push(
			<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
		)
	 }
	}
	if(focused || mouseIn){
		return(
			<SearchInfo 
				onMouseEnter={handelMouseInter}
				onMouseLeave={handleMouseLeave}
			>
				<SearchInfoTitle>热门搜索

					<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
						<a ref={(icon) => {this.spinIcon = icon}} className = 'switchIcon'></a>
						换一换
					</SearchInfoSwitch>
				</SearchInfoTitle>
					<div className = 'searchList'>
					{/*
						{
							list.map((item)=>{
								return <SearchInfoItem key={item}>{item}</SearchInfoItem>
							})	
						} */}
						{pageList}
					</div>
			</SearchInfo>
		)
	}
	else{
		return null;
	}
};
}

//redux
const mapStateToProps = (state) => {
	return{
		//focused: state.header.focused
		focused: state.getIn(['header', 'focused']),
		//focused: state.get('header').get('focused')
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn'])
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		handleInputFocus(list){
			/*
			const action = {
				type: 'search_focus'
			}*/
			//const action = actionCreators.searchFocus();
			console.log(list);
			if(list.size == 0){
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.searchFocus());		
		},
		handleInputBlur(){
			/*
			const action = {
				type: 'search_blur'
			}*/
			const action = actionCreators.searchBlur();
			dispatch(action);
		},
		handelMouseInter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin){
			console.log(page, totalPage);
			console.log(spin);
			//spin.style.transform = 'rotate(360deg)';
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle){
				originAngle = parseInt(originAngle, 10);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
			if(page < totalPage){
				dispatch(actionCreators.changePage(page+1));
			}
			else{
				dispatch(actionCreators.changePage(1));
			}
		}
	}
}
//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);