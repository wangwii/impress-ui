import { find, propEq } from 'ramda';

const app = getApp();

const fakeTags = (tags, cb)=> {
  const num = app.random(1, tags.length);

  const ret = new Array(num);
  for(let i=0; i < num; i++) {
    let item = tags.random();

    // while (find(propEq('name', item.name))(ret)) {
    //   item = tags.random();
    // }
    ret[i] = item;
  }

  return ret;
}

Page({
  data: ()=> {
    const dat = { me: app.globalData.me, users: app.globalData.users };
    dat.users.forEach((u)=> {
      u.taglist = app.globalData.tags;
      u.tags = fakeTags(app.globalData.tags);
    });
    return dat;
  },
  onLoad() {
  },
  onReady() {
    // TODO: 定时 获取用户tags & all taglist
    // TODO: 动态运算用户taglist排序 ..
  }
});
