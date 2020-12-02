import { isNil, isEmpty } from 'ramda';

Array.prototype.random = function() {
  return this[Math.floor((Math.random() * this.length))];
}

App({
  onLaunch(options) {
    // this.globalData.corpId = options.query.corpId;
    dd.getSystemInfo({
      success: res=> {
        const { pixelRatio, windowWidth, windowHeight, screenWidth, screenHeight } = res;
        console.log(`size: W:(${windowWidth}/${screenWidth}), H:(${windowHeight}/${screenHeight}), pixe: ${pixelRatio}`);
        this.globalData.size = { width: screenWidth, height: screenHeight, pixel: pixelRatio };
      }
    });
  },
  onShow() {
    // console.log('App Show');
  },
  onHide() {
    // console.log('App Hide');
  },
  onError(err) {
    console.err('App Error', err);
    console.log(JSON.stringify(err));
    this.globalData.error = err.message;
  },
  fixUserPhoto(users) {
    users.forEach((u)=> {
      if (isNil(u.avatar) || isEmpty(u.avatar)) {
        u.avatar = '../../images/anonymous.png';
      }
    });
    return users;
  },
  setUserData(dat) {
    this.globalData.me = dat.user;
    this.globalData.users = this.fixUserPhoto(dat.users);
  },
  random(min, max, isFloat) {
    const range = max - min;
    const value = Math.random() * range + min;
    return isFloat ? value : Math.floor(value);
  },
  globalData: {
    error: '', me: null, users: null, size: null,
    tags: [
      { id: 1, name: '知不道' },
      { id: 2, name: '没话说' },
      { id: 3, name: '万事不求人' },
      { id: 4, name: '不让人说话' },
      { id: 5, name: '特没谱' },
      { id: 6, name: '超准时' },
      { id: 7, name: '技术宅' },
      { id: 8, name: '半边天' },
      { id: 9, name: '逗你玩' },
      { id: 10, name: '怪蜀黍' },
    ],
  }
});
