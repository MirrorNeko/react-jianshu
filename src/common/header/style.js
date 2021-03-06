import styled from 'styled-components';
import logoPic from '../../img/logo.png';

export const HeaderWrapper = styled.div`
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	height: 56px;
	width: 100px;
	background: orange;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	paddingleft: 100px;
	padding-right: 60px; 
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left{
		float: left;
	}
	&.right{
		float: right;
		color: #969696;
	}
	&.active{
		color: #ea6f5a;
	}
`;
export const SearchWrapper = styled.div`
	position: relative;
	float: left;
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	margin-top: 9px;
	margin-left: 20px;
	padding: 0 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 13px;
	&::placeholder{
		color: #999;
	}
	&.focused{
		width: 240px; 
	}
	&.slide-enter{
		width: 160px;
		transition: all .2s ease-out;
	}
	&.slide-enter-active{
		width: 240px;
	}
	&.slide-exit{
		transition: all .2s ease-out;
	}
	&.slide-exit-active{
		width: 160px;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0; 
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	line-height: 38px;
	margin-right: 15px; 
	padding: 0 10px; 
	border-radius: 19px;
	margin-top: 9px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg{
		color: #ec6149;
	}
	&.writing{
		color: #fff;
		background: #ec6149;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 20px;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	display:block;
	width: 50px;
	height: 20px;
	line-height: 20px;
	float: right;
	font-size: 11px; 
	cursor: pointer;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 2px;
	margin-right: 15px;
	margin-bottom: 15px;
`;