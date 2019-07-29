import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
});
export const mouseEnter = ()=>({
	type: actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE
});
export const changePage = (page) => ({
	type: actionTypes.CHANGE_PAGE,
	page: page
});
const changeList = (data) =>({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length/10)
});
export const getList = () =>{
	//返回一个函数
	return (dispatch) => {
		axios.get('/api/headerList.json')
		.then((res)=>{
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch((error)=>{
			console.log(error);
		})
	}
}