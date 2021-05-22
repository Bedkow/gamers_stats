(()=>{var t=[,function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",o="month",a="quarter",u="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:o,y:u,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:a}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",v={};v[$]=h;var y=function(t){return t instanceof S},p=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},M=m;M.l=p,M.i=y,M.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function h(t){this.$L=p(t.locale,null,!0),this.parse(t)}var l=h.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return M},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return g(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<g(t)},l.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,a){var d=this,f=!!M.u(a)||a,h=M.p(t),l=function(t,e){var n=M.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return f?n:n.endOf(i)},m=function(t,e){return M.w(d.toDate()[t].apply(d.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},$=this.$W,v=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case u:return f?l(1,0):l(31,11);case o:return f?l(1,v):l(0,v+1);case s:var g=this.$locale().weekStart||0,S=($<g?$+7:$)-g;return l(f?y-S:y+(6-S),v);case i:case c:return m(p+"Hours",0);case r:return m(p+"Minutes",1);case n:return m(p+"Seconds",2);case e:return m(p+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,a){var d,f=M.p(s),h="set"+(this.$u?"UTC":""),l=(d={},d[i]=h+"Date",d[c]=h+"Date",d[o]=h+"Month",d[u]=h+"FullYear",d[r]=h+"Hours",d[n]=h+"Minutes",d[e]=h+"Seconds",d[t]=h+"Milliseconds",d)[f],m=f===i?this.$D+(a-this.$W):a;if(f===o||f===u){var $=this.clone().set(c,1);$.$d[l](m),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[M.p(t)]()},l.add=function(t,a){var c,d=this;t=Number(t);var f=M.p(a),h=function(e){var n=g(d);return M.w(n.date(n.date()+Math.round(e*t)),d)};if(f===o)return this.set(o,this.$M+t);if(f===u)return this.set(u,this.$y+t);if(f===i)return h(1);if(f===s)return h(7);var l=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,m=this.$d.getTime()+t*l;return M.w(m,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),i=this.$locale(),s=this.$H,o=this.$m,a=this.$M,u=i.weekdays,c=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return M.s(s%12||12,t,"0")},l=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:d(i.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,u,2),ddd:d(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:M.s(s,2,"0"),h:h(1),hh:h(2),a:l(s,o,!0),A:l(s,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||m[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,d){var f,h=M.p(c),l=g(t),m=6e4*(l.utcOffset()-this.utcOffset()),$=this-l,v=M.m(this,l);return v=(f={},f[u]=v/12,f[o]=v,f[a]=v/3,f[s]=($-m)/6048e5,f[i]=($-m)/864e5,f[r]=$/36e5,f[n]=$/6e4,f[e]=$/1e3,f)[h]||$,d?v:M.a(v)},l.daysInMonth=function(){return this.endOf(o).$D},l.$locale=function(){return v[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return M.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h}(),b=S.prototype;return g.prototype=b,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",o],["$y",u],["$D",c]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,S,g),t.$i=!0),g},g.locale=p,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=v[$],g.Ls=v,g.p={},g}()},function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,o,a){for(var u,c,d,f=s.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=h.length,m=0;m<l;m+=1){var $=h[m];$.d&&(u=o?n(e).diff(s,$.d,!0):s.diff(e,$.d,!0));var v=(t.rounding||Math.round)(Math.abs(u));if(d=u>0,v<=$.r||!$.r){v<=1&&m>0&&($=h[m-1]);var y=f[$.l];a&&(v=a(""+v)),c="string"==typeof y?y.replace("%d",v):y(v,r,$.l,d);break}}if(r)return c;var p=d?f.future:f.past;return"function"==typeof p?p(c):p.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var o=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(o(this),t)},r.fromNow=function(t){return this.from(o(this),t)}}}()}],e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r);var t=n(1),e=n.n(t),i=n(2),s=n.n(i);e().extend(s());document.querySelector(".input_btn");var o=document.querySelector(".game_info"),a=document.querySelector("#inputForm");document.querySelector("#gameName");a.addEventListener("submit",(function(){o.innerHTML="";var t=document.querySelector("#gameName").value;u(t).then((function(t){return c(t)}))}));var u=function(t){return fetch('https://api.rawg.io/api/games?key=3a4e64a027444e258be25283e5bd967a&search_precise=true&search="'.concat(t,'"')).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return console.log("error: ".concat(t))}))},c=function(t){console.log(t.results[0].id);var n=t.results[0].id;fetch("https://api.rawg.io/api/games/".concat(t.results[0].id,"?key=3a4e64a027444e258be25283e5bd967a")).then((function(t){return t.json()})).then((function(t){console.log(t);var r=t.released,i='\n\t\t\t\t<div class="imgtitle">\n\n\t\t\t\t<img class="game_art" src='.concat(t.background_image,'>\n\n\t\t\t\t<div class="art_title">').concat(t.name,'</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="info_container">\n\t\t\t\t<div class="released">Released: ').concat(t.released," (").concat(e()().to(e()(r)),')</div><br>\n\n\t\t\t\t<div class="description"> ').concat(t.description,'\n\t\t\t\t</div><br>\n\n\t\t\t\t<div class="metacritic"> Metacritic score: ').concat(t.metacritic,'\n\t\t\t\t \x3c!-- fix: undefined when empty!!!!!!!!!!!!!!!!! --\x3e\n\t\t\t\t</div><br>\n\n\t\t\t\t<div class="platforms"> Platforms:\n\t\t\t\t</div><br>\n\n\t\t\t\t<div class="pcRequirements"> Requirements:<br> Minimum: xxx <br>\n\t\t\t\tRecommended: xxx <br>\n\t\t\t\t</div><br>\n\n\t\t\t\t<div class="screenshots">\n\t\t\t\t</div><br>\n\t\t\t');return o.insertAdjacentHTML("beforeend",i),fetch("https://api.rawg.io/api/games/".concat(n,"/screenshots?key=3a4e64a027444e258be25283e5bd967a")).then((function(t){return t.json()})).then((function(t){console.log(t);for(var e=[],n=0;n<=t.results.length&&n<=4;n++)console.log(n),e[n]=document.createElement("img"),e[n].src=t.results[n].image,document.querySelector(".screenshots").appendChild(e[n])}))}))}})()})();