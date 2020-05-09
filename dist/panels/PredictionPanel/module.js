/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data"],(function(t,e,r){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=21)}([function(e,r){e.exports=t},function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return s}));var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function n(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function o(t,e,r,i){return new(r||(r=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function s(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((i=i.apply(t,e||[])).next())}))}function a(t,e){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function s(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}},function(t,r){t.exports=e},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return a}));var i=r(1),n=r(5),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.b)(e,t),e.prototype.addValues=function(t){this.data.push([t.a,t.b,t.time])},e.prototype.getAt=function(t){return{a:this.data[t][0],b:this.data[t][1],time:this.data[t][2]}},e.fromSeries=function(t){var r,n;if(!t[0]||!t[1])throw Error("Set at least 2 query before");var o=t[0].fields[1].values.toArray(),a=[];t.forEach((function(t){a.push(t.fields[0].values.toArray())}));var s=new e;try{for(var u=Object(i.d)(o.keys()),c=u.next();!c.done;c=u.next()){var p=c.value;s.addValues({a:a[0][p],b:a[1][p],time:o[p]})}}catch(t){r={error:t}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}return s},e}(n.a),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.b)(e,t),e}(n.b)},function(t,e,r){"use strict";var i=r(8),n=function(){function t(t,e,r,i,n){this.algorithm=t,this.coefficients=e,this.predFun=r,this.opt=i,n&&(this.accuracy=n)}return t.prototype.getAlgorithm=function(){return this.algorithm},t.prototype.getCoefficients=function(){return this.coefficients},t.prototype.getPredFun=function(){return this.predFun},t.prototype.getOpt=function(){return this.opt},t.prototype.getAcc=function(){return this.accuracy},t.prototype.setOpt=function(t){var e;null===(e=this.opt)||void 0===e||e.setValueFile(t)},t.fromJSON=function(e){if(!e)throw Error("No file found");var r=JSON.parse(e),n=i.b[r.algorithm];return console.log(e),console.log(r),new t(r.algorithm,r.coefficients,r.predFun||"",n.fromJSON(r.opt||{}),r.accuracy)},t.prototype.toJSON=function(){return JSON.stringify({GroupName:"ProApes",Version:"1.5",PluginName:"PredireInGrafana",algorithm:this.algorithm,coefficients:this.coefficients,predFun:this.predFun,opt:this.opt,accuracy:this.accuracy},null,2)},t}();e.a=n},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n}));var i=function(){function t(){this.data=[]}return t.prototype.clear=function(){this.data=[]},t.prototype.size=function(){return this.data.length},t}(),n=function(){function t(t){this.index=0,this.data=t}return t.prototype.next=function(){return this.index<this.data.size()?this.data.getAt(this.index++):null},t}()},function(t,e,r){"use strict";var i=function(){function t(){this.order=2,this.precision=2,this.toPredict=0}return t.prototype.fromJSON=function(t){return this.order=t.order,this.precision=t.precision,this.toPredict=t.toPredict||0,this},t.prototype.setValueFile=function(t){try{var e=JSON.parse(t);this.order=e.opt.order,this.precision=e.opt.precision}catch(t){throw new Error("Predictor bad formatted")}},t.prototype.getOrder=function(){return this.order},t.prototype.getPrecision=function(){return this.precision},t.prototype.getToPredict=function(){return this.toPredict},t.prototype.setPrecision=function(t){this.precision=t},t.prototype.setToPredict=function(t){this.toPredict=t},t}();e.a=i},,function(t,e,r){"use strict";var i=r(3),n=r(1),o=r(5),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.b)(e,t),e.prototype.addValues=function(t){this.data.push([t.value,t.time])},e.prototype.getAt=function(t){return{value:this.data[t][0],time:this.data[t][1]}},e}(o.a),s=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(n.b)(e,t)}(o.b),function(){function t(){this.predicted=new a}return t.prototype.predict=function(t,e){this.predicted.clear(),this.toPredict=e.getOpt().getToPredict();var r=1-(this.toPredict||0),n=e.getCoefficients();if(!t)throw Error("Data not found");this.data=t;for(var o,a,s=new i.b(this.data);o=s.next();)(o.a||o.b)&&this.predicted.addValues({value:(a=0===r?o.a:o.b,a?a*n[0]+n[1]:0),time:o.time});return this.predicted},t.prototype.saveToInflux=function(){var t=this.predicted.size()-1;$.post({url:"http://localhost:8086/write?db=telegraf",data:"predictionRL value="+this.predicted.getAt(t).value+" "+this.predicted.getAt(t).time+"000000"});var e,r=this.predicted.getAt(t).time;e=this.toPredict&&0!==this.toPredict?this.data.getAt(t).b-this.predicted.getAt(t).value:this.data.getAt(t).a-this.predicted.getAt(t).value,$.post({url:"http://localhost:8086/write?db=telegraf",data:"predictionDiffRL value="+Math.abs(e)+" "+r+"000000"})},t}()),u=function(){function t(){this.predicted=new a}return t.prototype.predict=function(t,e){this.predicted.clear(),this.toPredict=e.getOpt().getToPredict();var r=1-(this.toPredict||0),n=e.getCoefficients();if(!t)throw Error("Data not found");this.data=t;for(var o,a,s=new i.b(this.data);o=s.next();)(o.a||o.b)&&this.predicted.addValues({value:(a=0===r?o.a:o.b,n[0]*Math.exp(n[1]*a)),time:o.time});return this.predicted},t.prototype.saveToInflux=function(){var t=this.predicted.size()-1;$.post({url:"http://localhost:8086/write?db=telegraf",data:"predictionREXP value="+this.predicted.getAt(t).value+" "+this.predicted.getAt(t).time+"000000"});var e,r=this.predicted.getAt(t).time;e=this.toPredict&&0!==this.toPredict?this.data.getAt(t).b-this.predicted.getAt(t).value:this.data.getAt(t).a-this.predicted.getAt(t).value,$.post({url:"http://localhost:8086/write?db=telegraf",data:"predictionDiffREXP value="+Math.abs(e)+" "+r+"000000"})},t}(),c=function(){function t(){this.predicted=new a}return t.prototype.predict=function(t,e){this.predicted.clear(),this.toPredict=e.getOpt().getToPredict();var r=1-(this.toPredict||0),n=e.getCoefficients();if(!t)throw Error("Data not found");this.data=t;for(var o,a,s=new i.b(this.data);o=s.next();)(o.a||o.b)&&this.predicted.addValues({value:(a=0===r?o.a:o.b,n[0]+n[1]*Math.log(a)),time:o.time});return this.predicted},t.prototype.saveToInflux=function(){var t=this.predicted.size()-1;$.post({url:"http://localhost:8086/write?db=telegraf",data:"predictionRLOG value="+this.predicted.getAt(t).value+" "+this.predicted.getAt(t).time+"000000"});var e,r=this.predicted.getAt(t).time;e=this.toPredict&&0!==this.toPredict?this.data.getAt(t).b-this.predicted.getAt(t).value:this.data.getAt(t).a-this.predicted.getAt(t).value,$.post({url:"http://localhost:8086/write?db=telegraf",data:"predictionDiffRLOG value="+Math.abs(e)+" "+r+"000000"})},t}(),p=function(){function t(){this.predicted=new a}return t.prototype.predict=function(t,e){this.predicted.clear();var r=e.getOpt().getFirstQuery()||0,n=e.getCoefficients(),o=function(t,e){return t*n[0]+e*n[1]+n[2]};if(!t)throw Error("Data not found");for(var a,s=new i.b(t);a=s.next();)if(a.a||a.b){var u=0===r?o(a.a,a.b):o(a.b,a.a),c=0===u?0:u>0?1:-1;this.predicted.addValues({value:c,time:a.time})}return this.predicted},t.prototype.saveToInflux=function(){var t=this.predicted.getAt(this.predicted.size()-1);$.post({url:"http://localhost:8086/write?db=telegraf",data:"predictionSVM value="+t.value+" "+t.time+"000000"})},t}(),l=r(0),d=r.n(l),f=r(2),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.b)(e,t),e}(l.PureComponent),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.b)(e,t),e.prototype.getSeriesNames=function(){return this.props.data.series.map((function(t){return t.name||"unknown"}))},e.prototype.renderQueryOptions=function(){var t,e,r,i=this.getSeriesNames(),o=[];try{for(var a=Object(n.d)(i.keys()),s=a.next();!s.done;s=a.next()){var u=s.value;o.push(d.a.createElement("option",{value:u,selected:(null===(r=this.predictor)||void 0===r?void 0:r.getOpt().getToPredict())===u},i[u]))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return o},e.prototype.setToPredict=function(t){var e;(null===(e=this.props.options.predictor)||void 0===e?void 0:e.getOpt()).setToPredict(Number.parseInt(t,10)),this.render()},e.prototype.render=function(){var t,e,r,i,n=this;return this.predictor=this.props.options.predictor,(null===(t=this.predictor)||void 0===t?void 0:t.getOpt().getToPredict())||null===(e=this.predictor)||void 0===e||e.getOpt().setToPredict(0),d.a.createElement(f.PanelOptionsGroup,{title:"RL"},d.a.createElement("p",null,(null===(r=this.predictor)||void 0===r?void 0:r.getPredFun())?"Function: "+(null===(i=this.predictor)||void 0===i?void 0:i.getPredFun()):""),d.a.createElement("label",{className:"gf-form-label width-10",style:{display:"inline-block"}}," ","y (value to predict)"," "),d.a.createElement("div",{className:"gf-form-select-wrapper width-10",style:{display:"inline-block"}},d.a.createElement("select",{className:"input-small gf-form-input",onChange:function(t){return n.setToPredict(t.target.value)}},this.renderQueryOptions())))},e}(h),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.b)(e,t),e.prototype.getSeriesNames=function(){return this.props.data.series.map((function(t){return t.name||"unknown"}))},e.prototype.renderQueryOptions=function(){var t,e,r,i=this.getSeriesNames(),o=[];try{for(var a=Object(n.d)(i.keys()),s=a.next();!s.done;s=a.next()){var u=s.value;o.push(d.a.createElement("option",{value:u,selected:(null===(r=this.predictor)||void 0===r?void 0:r.getOpt().getToPredict())===u},i[u]))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return o},e.prototype.setToPredict=function(t){var e;(null===(e=this.props.options.predictor)||void 0===e?void 0:e.getOpt()).setToPredict(Number.parseInt(t,10)),this.render()},e.prototype.render=function(){var t,e,r,i,n=this;return this.predictor=this.props.options.predictor,(null===(t=this.predictor)||void 0===t?void 0:t.getOpt().getToPredict())||null===(e=this.predictor)||void 0===e||e.getOpt().setToPredict(0),d.a.createElement(f.PanelOptionsGroup,{title:"REXP"},d.a.createElement("p",null,(null===(r=this.predictor)||void 0===r?void 0:r.getPredFun())?"Function: "+(null===(i=this.predictor)||void 0===i?void 0:i.getPredFun()):""),d.a.createElement("label",{className:"gf-form-label width-10",style:{display:"inline-block"}}," ","y (value to predict)"," "),d.a.createElement("div",{className:"gf-form-select-wrapper width-10",style:{display:"inline-block"}},d.a.createElement("select",{className:"input-small gf-form-input",onChange:function(t){return n.setToPredict(t.target.value)}},this.renderQueryOptions())))},e}(h),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.b)(e,t),e.prototype.getSeriesNames=function(){return this.props.data.series.map((function(t){return t.name||"unknown"}))},e.prototype.renderQueryOptions=function(){var t,e,r,i=this.getSeriesNames(),o=[];try{for(var a=Object(n.d)(i.keys()),s=a.next();!s.done;s=a.next()){var u=s.value;o.push(d.a.createElement("option",{value:u,selected:(null===(r=this.predictor)||void 0===r?void 0:r.getOpt().getToPredict())===u},i[u]))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return o},e.prototype.setToPredict=function(t){var e;(null===(e=this.props.options.predictor)||void 0===e?void 0:e.getOpt()).setToPredict(Number.parseInt(t,10)),this.render()},e.prototype.render=function(){var t,e,r,i,n=this;return this.predictor=this.props.options.predictor,(null===(t=this.predictor)||void 0===t?void 0:t.getOpt().getToPredict())||null===(e=this.predictor)||void 0===e||e.getOpt().setToPredict(0),d.a.createElement(f.PanelOptionsGroup,{title:"RLOG"},d.a.createElement("p",null,(null===(r=this.predictor)||void 0===r?void 0:r.getPredFun())?"Function: "+(null===(i=this.predictor)||void 0===i?void 0:i.getPredFun()):""),d.a.createElement("label",{className:"gf-form-label width-10",style:{display:"inline-block"}}," ","y (value to predict)"," "),d.a.createElement("div",{className:"gf-form-select-wrapper width-10",style:{display:"inline-block"}},d.a.createElement("select",{className:"input-small gf-form-input",onChange:function(t){return n.setToPredict(t.target.value)}},this.renderQueryOptions())))},e}(h),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.b)(e,t),e.prototype.getSeriesNames=function(){return this.props.data.series.map((function(t){return t.name||"unknown"}))},e.prototype.renderQueryOptions=function(){var t,e,r,i=this.getSeriesNames(),o=[];try{for(var a=Object(n.d)(i.keys()),s=a.next();!s.done;s=a.next()){var u=s.value;o.push(d.a.createElement("option",{value:u,selected:(null===(r=this.predictor)||void 0===r?void 0:r.getOpt().getFirstQuery())===u},i[u]))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return o},e.prototype.setFirstQuery=function(t){var e;(null===(e=this.props.options.predictor)||void 0===e?void 0:e.getOpt()).setFirstQuery(Number.parseInt(t,10)),this.render()},e.prototype.render=function(){var t,e,r,i,n=this;return this.predictor=this.props.options.predictor,(null===(t=this.predictor)||void 0===t?void 0:t.getOpt().getFirstQuery())||null===(e=this.predictor)||void 0===e||e.getOpt().setFirstQuery(0),d.a.createElement(f.PanelOptionsGroup,{title:"SVM"},d.a.createElement("p",null,(null===(r=this.predictor)||void 0===r?void 0:r.getPredFun())?"Function: "+(null===(i=this.predictor)||void 0===i?void 0:i.getPredFun()):""),d.a.createElement("label",{className:"gf-form-label width-10",style:{display:"inline-block"}}," ","x1 (first query)"," "),d.a.createElement("div",{className:"gf-form-select-wrapper width-10",style:{display:"inline-block"}},d.a.createElement("select",{className:"input-small gf-form-input",onChange:function(t){return n.setFirstQuery(t.target.value)}},this.renderQueryOptions())))},e}(h),b=r(6),P=r(9);r.d(e,"c",(function(){return O})),r.d(e,"a",(function(){return w})),r.d(e,"b",(function(){return E}));var O={RL:new s,SVM:new p,REXP:new u,RLOG:new c},w={RL:y,SVM:g,REXP:v,RLOG:m},E={RL:new b.a,SVM:new P.a,REXP:new b.a,RLOG:new b.a}},function(t,e,r){"use strict";var i=function(){function t(){this.C=1,this.maxiter=1e4,this.numpass=10,this.firstQuery=0}return t.prototype.fromJSON=function(t){return this.C=t.C,this.maxiter=t.maxiter,this.numpass=t.numpass,this.firstQuery=t.firstQuery||0,this},t.prototype.setValueFile=function(t){try{var e=JSON.parse(t);this.C=e.opt.C,this.maxiter=e.opt.maxiter,this.numpass=e.opt.numpass}catch(t){throw new Error("Predictor bad formatted")}},t.prototype.getC=function(){return this.C},t.prototype.getMaxIter=function(){return this.maxiter},t.prototype.getNumPass=function(){return this.numpass},t.prototype.getFirstQuery=function(){return this.firstQuery},t.prototype.setC=function(t){this.C=t},t.prototype.setMaxIter=function(t){this.maxiter=t},t.prototype.setNumPass=function(t){this.numpass=t},t.prototype.setFirstQuery=function(t){this.firstQuery=t},t}();e.a=i},function(t,e){t.exports=r},,,,,,,,,,,function(t,e,r){"use strict";r.r(e);var i=r(10),n=r(1),o=r(0),a=r.n(o),s=r(3),u=r(8),c=function(){function t(){}return t.prototype.setData=function(t){this.data=t},t.prototype.setPredictor=function(t){if(this.predictor=t,!u.c[t.getAlgorithm()])throw Error("Wrong algorithm");this.strategy=u.c[t.getAlgorithm()]},t.prototype.predict=function(){var t;if(!this.data||!this.predictor)throw Error("Predictor not found");if(this.predicted=null===(t=this.strategy)||void 0===t?void 0:t.predict(this.data,this.predictor),!this.predicted||this.predicted.size()<1)throw Error("Data not predicted");return this.predicted.getAt(this.predicted.size()-1).value},t.prototype.saveToInflux=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){if(!this.predicted)throw Error("Predicted data not found");if(!this.strategy)throw Error("Algorithm not found");return this.strategy.saveToInflux(),[2]}))}))},t}(),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pause=function(){e.props.pause(),e.btn_stop&&(e.btn_stop.hidden=!0),e.btn_start&&(e.btn_start.hidden=!1)},e.start=function(){e.props.start(),e.btn_stop&&(e.btn_stop.hidden=!1),e.btn_start&&(e.btn_start.hidden=!0)},e}return Object(n.b)(e,t),e.prototype.componentDidMount=function(){this.btn_stop=document.getElementById("btn_stop"),this.btn_start=document.getElementById("btn_start")},e.prototype.render=function(){var t=this.props,e=t.algorithm,r=t.coefficients,i=t.opt,n=t.lastValue,o=t.accuracy;return a.a.createElement("div",null,a.a.createElement("pre",null,"- Algorithm: ",e+"\n","- Coefficients: ",r+"\n",i?"- Options: "+JSON.stringify(i,null,4)+"\n":"","- Accuracy: ",o+"\n"),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("h1",null,n),a.a.createElement("button",{id:"btn_stop",className:"btn btn-danger",onClick:this.pause},"Stop"),a.a.createElement("button",{id:"btn_start",className:"btn btn-success",onClick:this.start,hidden:!0},"Start")))},e}(o.PureComponent),l=r(4),d=function(t){function e(e){var r=t.call(this,e)||this;return r.paused=!1,r.model=new c,r}return Object(n.b)(e,t),e.prototype.setData=function(){var t=s.a.fromSeries(this.props.data.series);this.model.setData(t)},e.prototype.setPredictor=function(){this.props.options.predictor&&this.model.setPredictor(this.props.options.predictor)},e.prototype.predict=function(){this.lastValue=this.model.predict()},e.prototype.saveToInflux=function(){this.model.saveToInflux()},e.prototype.pause=function(){this.paused=!0},e.prototype.start=function(){this.paused=!1},e.prototype.updatePrediction=function(){this.setData(),this.setPredictor(),this.predict(),this.saveToInflux()},e.prototype.parsePredictor=function(){var t;try{null===(t=this.props.options.predictor)||void 0===t||t.getAlgorithm()}catch(t){var e=this.props.options.predictor;this.props.options.predictor=l.a.fromJSON(e)}},e.prototype.render=function(){var t=this;if(this.parsePredictor(),!this.props.options.predictor)return a.a.createElement("p",null," Select a predictor ");this.paused||this.updatePrediction();var e=this.props.options.predictor;return a.a.createElement("div",null,a.a.createElement(p,{algorithm:e.getAlgorithm(),coefficients:e.getCoefficients(),opt:e.getOpt(),accuracy:e.getAcc(),lastValue:this.lastValue,pause:function(){return t.pause()},start:function(){return t.start()}}))},e}(o.PureComponent),f=r(2);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.b)(e,t),e.prototype.importPredictor=function(t){var e=this,r=new FileReader;if(null==t.files)throw new Error("File not selected");r.readAsText(t.files[0]),r.onload=function(t){var r,i;try{e.props.options.predictor=l.a.fromJSON(null===(i=null===(r=t.target)||void 0===r?void 0:r.result)||void 0===i?void 0:i.toString())}catch(t){alert(t)}e.render()}},e.prototype.parsePredictor=function(){var t;try{null===(t=this.props.options.predictor)||void 0===t||t.getAlgorithm()}catch(t){var e=this.props.options.predictor;this.props.options.predictor=l.a.fromJSON(e)}},e.prototype.render=function(){var t=this;this.parsePredictor();var e,r=this.props.options.predictor,i=null==r?void 0:r.getAlgorithm();return e=i&&u.a[i]?u.a[i]:h(a.a.PureComponent),a.a.createElement("div",null,a.a.createElement(f.PanelOptionsGrid,null,a.a.createElement(f.PanelOptionsGroup,{title:"Import predictor"},a.a.createElement("input",{className:"input gf-input gf-file",type:"file",name:"Import",id:"import",onChange:function(e){return t.importPredictor(e.target)}})),a.a.createElement(e,{data:this.props.data,options:this.props.options})))},e}(o.PureComponent);r.d(e,"plugin",(function(){return v}));var v=new i.PanelPlugin(d).setEditor(y)}])}));
//# sourceMappingURL=module.js.map