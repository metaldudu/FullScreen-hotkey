// ==UserScript==
// @name        F键全屏播放视频
// @namespace   Violentmonkey Scripts
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRoge2ZTU4CMRiGHxF0dGPUxJ16A6/hT1x4ARGDGGNcaryBW0/gKVAuocYDmICCrt2aAcRFS0SkYGk/Z2L6JN9i6LTf+9KfTFsIBAI+mAFKQAV4AZpARyiaOkdF54x8mdgG6oLCR8UzsOVq4gRoJ2iiGy3geFwT2ykx0Wtm09ZEhOrSpMX3RwM1X3/NYQpEm+JgkOCMwciOjes/ZqA2k5E1QSGuDNQ2YXg5BnJyWpxoAlP9P5qMdGS1OPNDt2louXAFLPwiHnwmzfpsTPMOvAFzwOKQ9yZ9JpUw0mUfuBRs/xsSQysRgpG08W+MSE72G+DVULYOFH0mkzTyqGMQS76TSRo5Ai4MZdO+k0kaiYB5wfa/8W8mezCSNoKRIXQnudUhgSthY5U2gpG0EYykjVFG0rR6DdUyykgJ+PCnZWw+UFqsiVH/QBbYAKokd2hdRW3Ecvo5tjHS0JWW9fMskAeugVqPUYmIdY4ysMvXF8KqLq/bGLnRlfI2lYQpoDSVbSqVdKVbzJ8xf0kGuEdpstrr995YnfrXZc05SkuNMbbJW6h7uzZwRjI9k0GZaGst6+M2dKwb6AB3wB6wguzdSU7nKPA1nFqowwwnNoEnklt+azj0RD8R6hKyjFqapZffhs5VRODoKBCw4BPhMH4TDNDMWAAAAABJRU5ErkJggg==
// @version     0.1.4
// @author      MetalDudu
// @match       https://*.thepaper.cn/*
// @match       https://www.aliyundrive.com/*
// @match       https://www.miguvideo.com/*
// @match       https://www.douban.com/people/*
// @match       https://v.youku.com/*
// @match       https://www.ixigua.com/*
// @match       https://www.huxiu.com/*
// @description 支持网站：澎湃、阿里云盘、咪咕视频、豆瓣广播、优酷、西瓜视频、虎嗅
// @description 默认支持F键全屏的网站：B站、新浪微博
// @license MIT
// @description 2022-12-28
// ==/UserScript==

// 获取网站名称 @example: getSiteName('www.baidu.com'); // 'baidu'
const getSiteName = hostname => hostname.match(/([^\.]+)\.[^\.]+$/)[1];


(function() {
    'use strict';
    const siteName = getSiteName(location.hostname);

    window.onkeydown = function (event) {
      if(event.key === "f" || event.key === "F"){
        if(siteName === 'thepaper'){
          document.querySelector(".dplayer-icon.dplayer-full-icon").click();
        }
        if(siteName === 'aliyundrive'){
          document.querySelector(".action--3G9se").click();
        }
        if(siteName === 'miguvideo'){
          document.querySelector(".btn-bg.zoom-out").click();
        }
        if(siteName === 'douban'){
          document.getElementsByClassName("vjs-fullscreen-control vjs-control vjs-button")[0].click();
        }
        if(siteName === 'youku'){
          document.getElementsByClassName("kui-fullscreen-icon-0")[0].click();
        }
        if(siteName === 'ixigua'){
          var arr1 = document.getElementsByClassName("xgplayer-control-item__entry");
          arr1[arr1.length-1].click();
         //取最后一个元素
        }
        if(siteName === 'huxiu'){
          document.getElementsByClassName("plyr__control")[3].click();
        }
    }
}
})();
