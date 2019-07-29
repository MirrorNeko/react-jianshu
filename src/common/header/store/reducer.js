import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

/*
const defaultState = {
	focused: false
};*/
const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false
});

export default(state = defaultState, action) => {
	if(action.type === actionTypes.SEARCH_FOCUS){
		/*
		return{
			focused: true
		}*/
		//immutable对象的set方法，会结合之前immutable对象的值和设置的值，
		//返回一个新的对象。
		return state.set('focused', true);
	}
	if(action.type === actionTypes.SEARCH_BLUR){
		/*
		return{
			focused: false
		}*/
		return state.set('focused', false);
	}
	if(action.type === actionTypes.CHANGE_LIST){
		//console.log(action);
		//return state.set('list', action.data).set('totalPage', action.totalPage);
		//
		return state.merge({
			list: action.data,
			totalPage: action.totalPage
		});
	}
	if(action.type === actionTypes.MOUSE_ENTER){
		return state.set('mouseIn', true);
	}
	if(action.type === actionTypes.MOUSE_LEAVE){
		return state.set('mouseIn', false);
	}
	if(action.type === actionTypes.CHANGE_PAGE){
		return state.set('page', action.page)
	}
	return state;
}

