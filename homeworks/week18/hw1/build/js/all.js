/* eslint-disable */
"use strict";function asyncGeneratorStep(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(a,r)}function _asyncToGenerator(o){return function(){var e=this,i=arguments;return new Promise(function(t,n){var a=o.apply(e,i);function r(e){asyncGeneratorStep(a,t,n,r,s,"next",e)}function s(e){asyncGeneratorStep(a,t,n,r,s,"throw",e)}r(void 0)})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var qs=function(e){return document.querySelector(e)},offset=0,gameName="League%20of%20Legends",TwitchAPI=function(){function t(e){_classCallCheck(this,t),this.baseUrl="https://api.twitch.tv/kraken",this.clientId=e}return _createClass(t,[{key:"sendRequest",value:function(e){var t={headers:new Headers({"Client-Id":this.clientId})};return fetch(this.baseUrl+e,t).then(function(e){return e.ok?e.json():null})}},{key:"getPopularGames",value:function(){return this.sendRequest("/games/top?limit=5")}},{key:"getLiveStreams",value:function(e,t){var n="/streams/?game=".concat(e,"&limit=20&offset=").concat(t);return this.sendRequest(n)}}]),t}(),twitchApi=new TwitchAPI("z97jvca5asox81v22jbb24eziykct5");function showNavbarTop5Games(e){for(var t=qs(".game__list"),n=0;n<5;n+=1){var a=document.querySelector("li");a.innerHTML="".concat(e.top[n].game.name),t.appendChild(a)}}function renderStreamCards(e){for(var t=qs("main"),n=0;n<20;n+=1){var a=document.createElement("div");a.classList.add("stream__card"),a.innerHTML='\n      <a href="'.concat(e.streams[n].channel.url,'" target="_blank"> \n        <img src="').concat(e.streams[n].preview.medium,'" class="stream__img">\n        <div class="stream__info">\n          <img src="').concat(e.streams[n].channel.logo,'" class="stream__avatar">\n          <div class="stream__name text__overflow">\n            <div class="text__overflow">').concat(e.streams[n].channel.status,"</div>\n            <div>").concat(e.streams[n].channel.display_name,"</div>\n          </div>\n        </div>\n      </a>\n    "),t.appendChild(a)}}function getTop5Games(){return _getTop5Games.apply(this,arguments)}function _getTop5Games(){return(_getTop5Games=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,twitchApi.getPopularGames();case 3:showNavbarTop5Games(e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("錯誤，請重新整理 ".concat(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}function getTop20Streams(){return _getTop20Streams.apply(this,arguments)}function _getTop20Streams(){return(_getTop20Streams=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,twitchApi.getLiveStreams(gameName,offset);case 3:renderStreamCards(e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("錯誤，請重新整理 ".concat(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}qs(".btn").addEventListener("click",function(){offset+=20,getTop20Streams()}),qs(".game__list").addEventListener("click",function(e){"LI"===e.target.tagName&&(offset=0,qs("main").innerHTML="",qs(".main__title").innerText=e.target.innerText,gameName=e.target.innerText.split(" ").join("%20"),getTop20Streams())}),getTop5Games(),getTop20Streams();