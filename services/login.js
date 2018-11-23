import { Observable } from 'rxjs';

const apiUrl = 'http://rex-test.vaiwan.com/login';

const doLogin = (auth_code)=> {
  return Observable.create((observer) => {
    dd.httpRequest({
      url: apiUrl, method: 'POST', dataType: 'json', data: { auth_code },
      complete: () => observer.complete(),
      success: res=> observer.next(res.data),
      fail: res=> observer.error(res.data.error.errmsg),
    });
  });
};

export default (cb)=> {
  dd.getAuthCode({
    fail: (err)=> cb(err.message),
    success: ({ authCode })=> doLogin(authCode).subscribe(dat=> cb(null, dat), err=> cb(err))
  });
}
