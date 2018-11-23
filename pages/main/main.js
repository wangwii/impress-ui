const app = getApp();

Page({
  data: ()=> {
    return { me: app.globalData.me, users: app.globalData.users };
  },
  onLoad() {
  },
  onReady() {
  }
});
