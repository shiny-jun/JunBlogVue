function getDate(time) {
  let dt = new Date(time);
  let year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  let date = dt.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  return `${year}-${month}-${date}`;
}

function getLogoImg(type) {
  let logo = [
    'http://120.78.235.137/images/logo/js.jpg',
    'http://120.78.235.137/images/logo/vue.jpg',
    'http://120.78.235.137/images/logo/jquery.jpg',
    'http://120.78.235.137/images/logo/web.jpg',
    'http://120.78.235.137/images/logo/applet.jpg',
    'http://120.78.235.137/images/logo/node.jpg',
    'http://120.78.235.137/images/logo/angular.jpg',
    'http://120.78.235.137/images/logo/css3.jpg',
    'http://120.78.235.137/images/logo/photoshop.jpg',
  ]
  return logo[type - 1];
}

module.exports = {
  getDate: getDate,
  getLogoImg: getLogoImg
}
