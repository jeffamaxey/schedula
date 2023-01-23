/*! For license information please see 3195.3b3ecbed.chunk.js.LICENSE.txt */
(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[3195],{31752:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(1413),i=r(72791),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},a=r(54291),o=function(e,t){return i.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};o.displayName="EditOutlined";var u=i.forwardRef(o)},79286:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(1413),i=r(72791),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},a=r(54291),o=function(e,t){return i.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};o.displayName="PlusOutlined";var u=i.forwardRef(o)},41783:function(e,t,r){"use strict";var n=r(29439),i=r(98368),s=r(72791),a=r(87309),o=r(82816);function u(e){return!(!e||!e.then)}t.Z=function(e){var t=e.type,r=e.children,f=e.prefixCls,c=e.buttonProps,l=e.close,h=e.autoFocus,d=e.emitEvent,p=e.quitOnNullishReturnValue,g=e.actionFn,y=s.useRef(!1),m=s.useRef(null),_=(0,i.Z)(!1),v=(0,n.Z)(_,2),b=v[0],k=v[1],w=function(){null===l||void 0===l||l.apply(void 0,arguments)};s.useEffect((function(){var e=null;return h&&(e=setTimeout((function(){var e;null===(e=m.current)||void 0===e||e.focus()}))),function(){e&&clearTimeout(e)}}),[]);return s.createElement(a.ZP,Object.assign({},(0,o.n)(t),{onClick:function(e){if(!y.current)if(y.current=!0,g){var t;if(d){if(t=g(e),p&&!u(t))return y.current=!1,void w(e)}else if(g.length)t=g(l),y.current=!1;else if(!(t=g()))return void w();!function(e){u(e)&&(k(!0),e.then((function(){k(!1,!0),w.apply(void 0,arguments),y.current=!1}),(function(e){return k(!1,!0),y.current=!1,Promise.reject(e)})))}(t)}else w()},loading:b,prefixCls:f},c,{ref:m}),r)}},1025:function(e,t){var r,n,i;n=[],r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=t.IS_PAPA_WORKER||!1,i={},s=0,a={parse:function(r,n){var o=(n=n||{}).dynamicTyping||!1;if(k(o)&&(n.dynamicTypingFunction=o,o={}),n.dynamicTyping=o,n.transform=!!k(n.transform)&&n.transform,n.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,n,o=(r=t.URL||t.webkitURL||null,n=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=y,u.id=s++,i[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void u.postMessage({input:r,config:n,workerId:u.id})}var d=null;return a.NODE_STREAM_INPUT,"string"==typeof r?(r=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(r),d=n.download?new f(n):new l(n)):!0===r.readable&&k(r.read)&&k(r.on)?d=new h(n):(t.File&&r instanceof File||r instanceof Object)&&(d=new c(n)),d.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",s="\r\n",o='"',u=o+o,f=!1,c=null,l=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(f=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(l=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var h=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return d(null,e,f);if("object"==typeof e[0])return d(c||Object.keys(e[0]),e,f)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),d(e.fields||[],e.data||[],f);throw new Error("Unable to serialize unrecognized input");function d(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&n){for(var f=0;f<e.length;f++)0<f&&(a+=i),a+=g(e[f],f);0<t.length&&(a+=s)}for(var c=0;c<t.length;c++){var l=o?e.length:t[c].length,h=!1,d=o?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!o&&(h="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&o){for(var p=[],y=0;y<l;y++){var m=u?e[y]:y;p.push(t[c][m])}h=""===p.join("").trim()}if(!h){for(var _=0;_<l;_++){0<_&&!d&&(a+=i);var v=o&&u?e[_]:_;a+=g(t[c][v],_)}c<t.length-1&&(!r||0<l&&!d)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var n=!1;l&&"string"==typeof e&&l.test(e)&&(e="'"+e,n=!0);var s=e.toString().replace(h,u);return(n=n||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(i)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=d,a.NetworkStreamer=f,a.FileStreamer=c,a.StringStreamer=l,a.ReadableStreamStreamer=h,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:o.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,u,f=n[0];if(k(e.before)){var c=e.before(f.file,f.inputElem);if("object"==typeof c){if("abort"===c.action)return t="AbortError",r=f.file,i=f.inputElem,u=c.reason,void(k(e.error)&&e.error({name:t},r,i,u));if("skip"===c.action)return void s();"object"==typeof c.config&&(f.instanceConfig=o.extend(f.instanceConfig,c.config))}else if("skip"===c)return void s()}var l=f.instanceConfig.complete;f.instanceConfig.complete=function(e){k(l)&&l(e,f.file,f.inputElem),s()},a.parse(f.file,f.instanceConfig)}else k(e.complete)&&e.complete()}function s(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var f=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:o,workerId:a.WORKER_ID,finished:f});else if(k(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!f||!k(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),f||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function f(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function c(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,r,n,i=Math.pow(2,53),s=-i,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,f=this,c=0,l=0,h=!1,d=!1,y=[],m={data:[],errors:[],meta:{}};if(k(e.step)){var _=e.step;e.step=function(t){if(m=t,C())w();else{if(w(),0===m.data.length)return;c+=t.data.length,e.preview&&c>e.preview?r.abort():(m.data=m.data[0],_(m,f))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){return m&&n&&(E("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(m.data=m.data.filter((function(e){return!b(e)}))),C()&&function(){if(m)if(Array.isArray(m.data[0])){for(var t=0;C()&&t<m.data.length;t++)m.data[t].forEach(r);m.data.splice(0,1)}else m.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),y.push(t)}}(),function(){if(!m||!e.header&&!e.dynamicTyping&&!e.transform)return m;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var s=n,a=t[n];e.header&&(s=n>=y.length?"__parsed_extra":y[n]),e.transform&&(a=e.transform(a,s)),a=O(s,a),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(a)):i[s]=a}return e.header&&(n>y.length?E("FieldMismatch","TooManyFields","Too many fields: expected "+y.length+" fields but parsed "+n,l+r):n<y.length&&E("FieldMismatch","TooFewFields","Too few fields: expected "+y.length+" fields but parsed "+n,l+r)),i}var r=1;return!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(t),r=m.data.length):m.data=t(m.data,0),e.header&&m.meta&&(m.meta.fields=y),l+=r,m}()}function C(){return e.header&&0===y.length}function O(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<i)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var n}function E(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),m.errors.push(i)}this.parse=function(i,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<n[0].length;if(1===n.length||s)return"\n";for(var a=0,o=0;o<n.length;o++)"\n"===n[o][0]&&a++;return a>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(i),m.meta.delimiter=e.delimiter);else{var f=function(t,r,n,i,s){var o,u,f,c;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var l=0;l<s.length;l++){var h=s[l],d=0,p=0,y=0;f=void 0;for(var m=new g({comments:i,delimiter:h,newline:r,preview:10}).parse(t),_=0;_<m.data.length;_++)if(n&&b(m.data[_]))y++;else{var v=m.data[_].length;p+=v,void 0!==f?0<v&&(d+=Math.abs(v-f),f=v):f=v}0<m.data.length&&(p/=m.data.length-y),(void 0===u||d<=u)&&(void 0===c||c<p)&&1.99<p&&(u=d,o=h,c=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);f.successful?e.delimiter=f.bestDelimiter:(n=!0,e.delimiter=a.DefaultDelimiter),m.meta.delimiter=e.delimiter}var c=v(e);return e.preview&&e.header&&c.preview++,t=i,r=new g(c),m=r.parse(t,s,o),w(),h?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){f.streamer._halted?(h=!1,f.streamer.parseChunk(t,!0)):setTimeout(f.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,r.abort(),m.meta.aborted=!0,k(e.complete)&&e.complete(m),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,s=e.step,o=e.preview,u=e.fastMode,f=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(f=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var c=0,l=!1;this.parse=function(a,h,d){if("string"!=typeof a)throw new Error("Input must be a string");var g=a.length,y=r.length,m=n.length,_=i.length,v=k(s),b=[],w=[],C=[],O=c=0;if(!a)return K();if(e.header&&!h){var E=a.split(n)[0].split(r),R=[],S={},x=!1;for(var T in E){var A=E[T];k(e.transformHeader)&&(A=e.transformHeader(A,T));var j=A,I=S[A]||0;for(0<I&&(x=!0,j=A+"_"+I),S[A]=I+1;R.includes(j);)j=j+"_"+I;R.push(j)}if(x){var F=a.split(n);F[0]=R.join(r),a=F.join(n)}}if(u||!1!==u&&-1===a.indexOf(t)){for(var L=a.split(n),P=0;P<L.length;P++){if(C=L[P],c+=C.length,P!==L.length-1)c+=n.length;else if(d)return K();if(!i||C.substring(0,_)!==i){if(v){if(b=[],N(C.split(r)),V(),l)return K()}else N(C.split(r));if(o&&o<=P)return b=b.slice(0,o),K(!0)}}return K()}for(var D=a.indexOf(r,c),M=a.indexOf(n,c),U=new RegExp(p(f)+p(t),"g"),z=a.indexOf(t,c);;)if(a[c]!==t)if(i&&0===C.length&&a.substring(c,c+_)===i){if(-1===M)return K();c=M+m,M=a.indexOf(n,c),D=a.indexOf(r,c)}else if(-1!==D&&(D<M||-1===M))C.push(a.substring(c,D)),c=D+y,D=a.indexOf(r,c);else{if(-1===M)break;if(C.push(a.substring(c,M)),Z(M+m),v&&(V(),l))return K();if(o&&b.length>=o)return K(!0)}else for(z=c,c++;;){if(-1===(z=a.indexOf(t,z+1)))return d||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:c}),H();if(z===g-1)return H(a.substring(c,z).replace(U,t));if(t!==f||a[z+1]!==f){if(t===f||0===z||a[z-1]!==f){-1!==D&&D<z+1&&(D=a.indexOf(r,z+1)),-1!==M&&M<z+1&&(M=a.indexOf(n,z+1));var q=W(-1===M?D:Math.min(D,M));if(a.substr(z+1+q,y)===r){C.push(a.substring(c,z).replace(U,t)),a[c=z+1+q+y]!==t&&(z=a.indexOf(t,c)),D=a.indexOf(r,c),M=a.indexOf(n,c);break}var B=W(M);if(a.substring(z+1+B,z+1+B+m)===n){if(C.push(a.substring(c,z).replace(U,t)),Z(z+1+B+m),D=a.indexOf(r,c),z=a.indexOf(t,c),v&&(V(),l))return K();if(o&&b.length>=o)return K(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:c}),z++}}else z++}return H();function N(e){b.push(e),O=c}function W(e){var t=0;if(-1!==e){var r=a.substring(z+1,e);r&&""===r.trim()&&(t=r.length)}return t}function H(e){return d||(void 0===e&&(e=a.substring(c)),C.push(e),c=g,N(C),v&&V()),K()}function Z(e){c=e,N(C),C=[],M=a.indexOf(n,c)}function K(e){return{data:b,errors:w,meta:{delimiter:r,linebreak:n,aborted:l,truncated:!!e,cursor:O+(h||0)}}}function V(){s(K()),b=[],w=[]}},this.abort=function(){l=!0},this.getCharIndex=function(){return c}}function y(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){n=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(k(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!n);a++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!n&&m(t.workerId,t.results)}function m(e,t){var r=i[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function _(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=v(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=a.parse(r.input,r.config);n&&t.postMessage({workerId:a.WORKER_ID,results:n,finished:!0})}}),(f.prototype=Object.create(u.prototype)).constructor=f,(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(l.prototype)).constructor=l,(h.prototype=Object.create(u.prototype)).constructor=h,a},void 0===(i="function"===typeof r?r.apply(t,n):r)||(e.exports=i)},80888:function(e,t,r){"use strict";var n=r(79047);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,s,a){if(a!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return r.PropTypes=r,r}},52007:function(e,t,r){e.exports=r(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98472:function(e,t,r){e.exports=r(23561)},98015:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(72791),a=(n=s)&&n.__esModule?n:{default:n},o=r(51509),u=r(58333);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"buildURI",value:function(){return o.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.headers,n=e.separator,i=e.enclosingCharacter,s=e.uFEFF,a=e.target,o=e.specs,u=e.replace;this.state.page=window.open(this.buildURI(t,s,r,n,i),a,o,u)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(a.default.Component);f.defaultProps=Object.assign(u.defaultProps,{target:"_blank"}),f.propTypes=u.propTypes,t.default=f},39088:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(72791),o=(n=a)&&n.__esModule?n:{default:n},u=r(51509),f=r(58333);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.buildURI=r.buildURI.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"buildURI",value:function(){return u.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var r=this.props,n=r.data,i=r.headers,s=r.separator,a=r.filename,o=r.enclosingCharacter,f=r.uFEFF,c=t&&"function"===typeof n?n():n,l=new Blob([f?"\ufeff":"",(0,u.toCSV)(c,i,s,o)]);return window.navigator.msSaveBlob(l,a),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(r){!1!==r?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.data,n=t.headers,s=t.separator,a=t.filename,u=t.uFEFF,f=t.children,c=(t.onClick,t.asyncOnClick,t.enclosingCharacter),l=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),h="undefined"===typeof window?"":this.buildURI(r,u,n,s,c);return o.default.createElement("a",i({download:a},l,{ref:function(t){return e.link=t},target:"_self",href:h,onClick:this.handleClick()}),f)}}]),t}(o.default.Component);c.defaultProps=f.defaultProps,c.propTypes=f.propTypes,t.default=c},51509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var i=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},s=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&!(e instanceof Array)}))},a=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},o=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(n(e),n(t)))}),[]))},u=t.jsons2arrays=function(e,t){var r=t=t||o(e),i=t;s(t)&&(r=t.map((function(e){return e.label})),i=t.map((function(e){return e.key})));var a=e.map((function(e){return i.map((function(t){return f(t,e)}))}));return[r].concat(n(a))},f=t.getHeaderValue=function(e,t){var r=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,r,n){var i=e[t];if(void 0!==i&&null!==i)return i;n.splice(1)}),t);return void 0===r?e in t?t[e]:"":r},c=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},l=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return c(e)})).map((function(e){return""+r+e+r})).join(t)})).join("\n")},h=t.arrays2csv=function(e,t,r,i){return l(t?[t].concat(n(e)):e,r,i)},d=t.jsons2csv=function(e,t,r,n){return l(u(e,t),r,n)},p=t.string2csv=function(e,t,r,n){return t?t.join(r)+"\n"+e:e.replace(/"/g,'""')},g=t.toCSV=function(e,t,r,n){if(s(e))return d(e,t,r,n);if(a(e))return h(e,t,r,n);if("string"===typeof e)return p(e,t,r);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,r,n,s){var a=g(e,r,n,s),o=i()?"application/csv":"text/csv",u=new Blob([t?"\ufeff":"",a],{type:o}),f="data:"+o+";charset=utf-8,"+(t?"\ufeff":"")+a,c=window.URL||window.webkitURL;return"undefined"===typeof c.createObjectURL?f:c.createObjectURL(u)}},23561:function(e,t,r){"use strict";t.CSVLink=void 0;var n=s(r(98015)),i=s(r(39088));function s(e){return e&&e.__esModule?e:{default:e}}n.default,t.CSVLink=i.default},58333:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var n,i=r(72791),s=((n=i)&&n.__esModule,r(52007));t.propTypes={data:(0,s.oneOfType)([s.string,s.array,s.func]).isRequired,headers:s.array,target:s.string,separator:s.string,filename:s.string,uFEFF:s.bool,onClick:s.func,asyncOnClick:s.bool,enclosingCharacter:s.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}}]);
//# sourceMappingURL=3195.3b3ecbed.chunk.js.map