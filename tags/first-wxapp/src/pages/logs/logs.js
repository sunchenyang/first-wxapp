import Base from '../base';

class List extends Base {
  data3 = {
   items: [{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"肯德基","imgs":["/image/kfc.png"],"unit":"只","id":302,"quantity":"1"},{"mprice":0,"maxpacks":14,"price":1600,"subcate":410,"remains":14,"type":4,"freight":1000,"title":"必胜客","imgs":["/image/plzza.png"],"unit":"g","id":93,"quantity":"400"},{"mprice":0,"maxpacks":100,"price":4800,"subcate":202,"remains":5,"type":1,"freight":1000,"title":"汉堡王","imgs":["/image/burg.png"],"unit":"g","id":69,"quantity":"300"},{"mprice":2200,"maxpacks":100,"price":1980,"subcate":410,"remains":42,"type":1,"freight":1000,"title":"小黑冒菜","imgs":["/image/list3.png"],"unit":"g","id":91,"quantity":"220"},{"mprice":2280,"maxpacks":100,"price":1880,"subcate":410,"remains":29,"type":1,"freight":1000,"title":"披萨","imgs":["/image/list2.png"],"unit":"g","id":90,"quantity":"215"},{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"肯德基","imgs":["/image/kfc.png"],"unit":"只","id":302,"quantity":"1"},{"mprice":0,"maxpacks":14,"price":1600,"subcate":410,"remains":14,"type":4,"freight":1000,"title":"必胜客","imgs":["/image/plzza.png"],"unit":"g","id":93,"quantity":"400"},{"mprice":0,"maxpacks":100,"price":4800,"subcate":202,"remains":5,"type":1,"freight":1000,"title":"汉堡王","imgs":["/image/burg.png"],"unit":"g","id":69,"quantity":"300"},{"mprice":2200,"maxpacks":100,"price":1980,"subcate":410,"remains":42,"type":1,"freight":1000,"title":"小黑冒菜","imgs":["/image/list3.png"],"unit":"g","id":91,"quantity":"220"},{"mprice":2280,"maxpacks":100,"price":1880,"subcate":410,"remains":29,"type":1,"freight":1000,"title":"披萨","imgs":["/image/list2.png"],"unit":"g","id":90,"quantity":"215"},{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"肯德基","imgs":["/image/kfc.png"],"unit":"只","id":302,"quantity":"1"},{"mprice":0,"maxpacks":14,"price":1600,"subcate":410,"remains":14,"type":4,"freight":1000,"title":"必胜客","imgs":["/image/plzza.png"],"unit":"g","id":93,"quantity":"400"},{"mprice":0,"maxpacks":100,"price":4800,"subcate":202,"remains":5,"type":1,"freight":1000,"title":"汉堡王","imgs":["/image/burg.png"],"unit":"g","id":69,"quantity":"300"},{"mprice":2200,"maxpacks":100,"price":1980,"subcate":410,"remains":42,"type":1,"freight":1000,"title":"小黑冒菜","imgs":["/image/list3.png"],"unit":"g","id":91,"quantity":"220"},{"mprice":2280,"maxpacks":100,"price":1880,"subcate":410,"remains":29,"type":1,"freight":1000,"title":"披萨","imgs":["/image/list2.png"],"unit":"g","id":90,"quantity":"215"},{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"肯德基","imgs":["/image/kfc.png"],"unit":"只","id":302,"quantity":"1"},{"mprice":0,"maxpacks":14,"price":1600,"subcate":410,"remains":14,"type":4,"freight":1000,"title":"必胜客","imgs":["/image/plzza.png"],"unit":"g","id":93,"quantity":"400"},{"mprice":0,"maxpacks":100,"price":4800,"subcate":202,"remains":5,"type":1,"freight":1000,"title":"汉堡王","imgs":["/image/burg.png"],"unit":"g","id":69,"quantity":"300"},{"mprice":2200,"maxpacks":100,"price":1980,"subcate":410,"remains":42,"type":1,"freight":1000,"title":"小黑冒菜","imgs":["/image/list3.png"],"unit":"g","id":91,"quantity":"220"},{"mprice":2280,"maxpacks":100,"price":1880,"subcate":410,"remains":29,"type":1,"freight":1000,"title":"披萨","imgs":["/image/list2.png"],"unit":"g","id":90,"quantity":"215"}]

  };

  onLoad() {
    console.debug('list');
    super.onLoad();
    this.context.setData(this.data3);
  }

  onReady() {
      wx.setNavigationBarTitle({
      title: '列表',
    });
  }
 /** bindViewTap = () => {
    //this.context.setData({ motto: 'onTap' });
  }*/




}

List.newPage();