//import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

/*
const defaultState = {
	focused: false
};*/
const defaultState = fromJS({
    topicList:[{
        id: 1,
        title: '社会热点',
        imgUrl: 'img/topic1.png'
    },{
        id: 2,
        title: '手绘',
        imgUrl: 'img/topic2.png'
    },{
        id: 3,
        title: '简书电影',
        imgUrl: 'img/topic3.png'
    },{
        id: 4,
        title: '读书',
        imgUrl: 'img/topic4.png'
    },{
        id: 5,
        title: '摄影',
        imgUrl: 'img/topic5.png'
    },{
        id: 6,
        title: '旅行-在路上',
        imgUrl: 'img/topic6.png'
    }
    ],
    articleList:[{
        id: 1,
        title: '拿3000工资与30000工资的区别，5张聊天记录让你醍醐灌顶',
        abstract: '有人会问，我们同在一个公司，凭什么别人可以拿30000，我只能拿3000？ 拿3000工资与30000工资，究竟有什么区别？ 5张聊天截图告诉你...',
        imgUrl:'img/con1.png'
    },{
        id: 2,
        title: '最会构图的摄影大师，50张经典范本，看了一次又一次',
        abstract: '来源：狼族摄影 有人说构图很头疼，看了很多，仍然找不到要领。如何才能把构图熟记于心，并熟练地应用？今天我们就从一位中国的摄影大师作品来找找灵感。...',
        imgUrl: 'img/topic5.png'
    },{
        id: 3,
        title: '实操：如何用Excel做一次完整的数据分析',
        abstract: '此文是《10周入门数据分析》系列的第4篇。 想了解学习路线，可以先行阅读“10周计划” 公中号上已更新到第11篇，详情可见文末。 前一篇分享了《...',
        imgUrl: 'img/topic6.png'
    },{
        id: 4,
        title: '书房里的书桌怎么布置才好看实用？',
        abstract: '书房里的书桌怎么布置才好看实用？—大宅兔建材 对于现在很多人生活工作的需求，一般人在买房装修的时候，都会考虑装修出一个书房，用于电脑办公或是看看...',
        imgUrl: 'img/topic3.png'
    }
    ],
    recommendList: [{
        id: 1,
        imgUrl: 'img/re1.png'
    },{
        id: 2,
        imgUrl: 'img/re2.png'
    },{
        id: 3,
        imgUrl: 'img/re1.png'
    },{
        id: 4,
        imgUrl: 'img/re2.png'
    }]
});

export default(state = defaultState, action) => {
	switch(action.type){
        default: 
            return state;
    }
}

