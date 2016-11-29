import Base from '../base';

class Home extends Base {
  data2 = {
    imgData: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
      navs: [
      {
        image: '/image/food.png',
        text: '美食',
      }, {
        image: '/image/film.png',
        text: '电影',
      }, {
        image: '/image/ktv.png',
        text: 'KTV',
      }, {
        image: '/image/take.png',
        text: '外卖',
      },
    ],
     // item
    items: [
      { image: '/image/img.png' },
      {image: '/image/img.png'},
      {image: '/image/img.png'},
      {image: '/image/img.png'},
      {image: '/image/img.png'},
      {image: '/image/img.png'},
      {image: '/image/img.png'},
      {image: '/image/img.png'}
    ]
  };

  onLoad() {
    super.onLoad();
    this.context.setData(this.data2);
      wx.setNavigationBarTitle({
      title: '当前页面',
    });
    //this.context.setNavigationBarTitle({ title: '在线音乐' });
  }

  handleTap = (event) => {
      wx.navigateTo({
      url: '../logs/logs?type=' + event.currentTarget.dataset.type,
    });
  }
 /** bindViewTap = () => {
    //this.context.setData({ motto: 'onTap' });
  }*/




}

Home.newPage();