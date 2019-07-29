import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
	background: pink;
`;

export const HomeLeft = styled.div`
	float: left;
	width: 625px;
	margin-left: 15px;
	padding-top: 0px;
	background: lightblue;
	overflow: hidden;
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	height: 32px;
	margin-left: 18px;
	margin-bottom: 10px;
	line-height: 32px;
	font-size: 14px;
	padding-right: 10px;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		width: 32px; 
		height: 32px;
		display: block;
		float: left;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	.pic{
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;
export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title{
		display: block;
		text-decoration: none;
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.abstract{
		font-size: 13px;
		line-height: 24px;
		color: #999;

	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin-bottom: 5px;
	.pic{
		width: 280px;
		height: 50px;
	}
`;
