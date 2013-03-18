module.exports = (function() {
  var fixed   = "0([1-9]{1}-?[1-9]\\d{3}|[1-9]{2}-?\\d{3}|[1-9]{2}\\d{1}-?\\d{2}|[1-9]{2}\\d{2}-?\\d{1})-?\\d{4}"
  var mobile  = "0[789]0-?\\d{4}-?\\d{4}"
  var ip      = "050-?\\d{4}-?\\d{4}"

  return {
    fixed:  new RegExp("^" + fixed + "$"),
    mobile: new RegExp("^" + mobile + "$"),
    ip:     new RegExp("^" + ip + "$"),
    all:    new RegExp("^(" + [fixed, mobile, ip].join("|") + ")$")
  }
})();
