import login from '../../services/login';

const app = getApp();

Page({
  data: { tips: 'Loading...', img: '../../images/loading.gif' },

  onReady() {
    const showErrorMsg = (dat) => this.setData({ img: '../../images/error.png', tips: dat});
    const handle = (dat)=> {
      if (dat.errcode > 0) {
        return showErrorMsg(dat.errmsg);
      }

      app.setUserData(dat);
      dd.redirectTo({ url: '../main/main' });
    }
    login((err, dat) => err ? showErrorMsg(err) : handle(dat));
  },
  onImageLoad(event) {
    // console.log('image loaded:', event);
  }
})
