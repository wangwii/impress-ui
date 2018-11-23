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
      if (u.avatar === ''){
        u.avatar = '../../images/anonymous.png';
      }
    });
    return users;
  },
  setUserData(dat) {
    this.globalData.me = dat.user;
    this.globalData.users = this.fixUserPhoto(dat.users);
  },
  globalData: {
    error: '', me: null, users: null, size: null,
  }
});
