function waitForWhichBrowser(cb) {
  var callback = cb;

  function wait() {
    if (typeof WhichBrowser == 'undefined')
      window.setTimeout(wait, 100)
    else
      callback();
  }

  wait();
}

waitForWhichBrowser(function() {

  try {
    Browsers = new WhichBrowser({
      useFeatures: true,
      detectCamouflage: true
    });

    var txt = "";
    txt += "/*---------- Browser and OS Details ----------*/<br>";
    txt += "<b>Browser: </b>" + Browsers.browser + "<br>";
    txt += "<b>OS: </b>" + Browsers.os + "<br>";
    txt += "<b>Platform:</b> " + navigator.platform + "<br>";
    txt += "<b>IP Address:</b> " + myip + "<br>";
    txt += "/*---------- Browser Options and Plugins ----------*/<br>";
    txt += "<b>Javascript Enabled:</b> true<br>";
    txt += "<b>Cookies Enabled:</b> " + navigator.cookieEnabled + "<br>";
    txt += "<b>Browser Language:</b> " + navigator.language + "<br>";
    txt += "/*---------- Browser Faking ----------*/<br>";
    txt += "<b>Browser CodeName:</b> " + navigator.appCodeName + "<br>";
    txt += "<b>Browser Name:</b> " + navigator.appName + "<br>";
    txt += "<b>Browser Version:</b> " + navigator.appVersion + "<br>";
    txt += "<b>User-agent header:</b> " + navigator.userAgent;

    document.getElementById("text").innerHTML = txt;

    new TypingText(document.getElementById("text"), 40, function(i) {
      var ar = new Array(" ", "|");
      return " " + ar[i.length % ar.length];
    });

    TypingText.runAll();

  } catch (e) {}
});

(function() {
  var p = [],
    w = window,
    d = document,
    e = f = 0;
  p.push('ua=' + encodeURIComponent(navigator.userAgent));
  e |= w.ActiveXObject ? 1 : 0;
  e |= w.opera ? 2 : 0;
  e |= w.chrome ? 4 : 0;
  e |= 'getBoxObjectFor' in d || 'mozInnerScreenX' in w ? 8 : 0;
  e |= ('WebKitCSSMatrix' in w || 'WebKitPoint' in w || 'webkitStorageInfo' in w || 'webkitURL' in w) ? 16 : 0;
  e |= (e & 16 && ({}.toString).toString().indexOf("\n") === -1) ? 32 : 0;
  p.push('e=' + e);
  f |= 'sandbox' in d.createElement('iframe') ? 1 : 0;
  f |= 'WebSocket' in w ? 2 : 0;
  f |= w.Worker ? 4 : 0;
  f |= w.applicationCache ? 8 : 0;
  f |= w.history && history.pushState ? 16 : 0;
  f |= d.documentElement.webkitRequestFullScreen ? 32 : 0;
  f |= 'FileReader' in w ? 64 : 0;
  p.push('f=' + f);
  p.push('r=' + Math.random().toString(36).substring(7));
  p.push('w=' + screen.width);
  p.push('h=' + screen.height);
  var s = d.createElement('script');
  s.src = 'http://whichbrowser.net/lib/detect.js?' + p.join('&');
  d.getElementsByTagName('head')[0].appendChild(s);
})();