webpackJsonp([2,4],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Arima+Madurai:100,200,300,400,500,700,800,900);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  /*margin-top: 60px;*/\n  font-size: 14px;\n  /*font-family: 'Arima Madurai', cursive;*/\n  background-color: #E5E9ED;\n    background: url(" + __webpack_require__(196) + ");\n    /*background-repeat: no-repeat;*/\n    /*background-size: contain;*/\n\n}\n.btn:hover,\n.btn:focus,\n.btn:active{\n    outline: 0 !important;\n}\n\n.margin30-t{\n  margin-top:30px;\n}\n\n/* entire container, keeps perspective */\n.card-container {\n    -webkit-perspective: 800px;\n     -o-perspective: 800px;\n        perspective: 800px;\n        margin-bottom: 30px;\n}\n.card {\n   transition: -webkit-transform .5s;\n   transition: transform .5s;\n   transition: transform .5s, -webkit-transform .5s;\n-webkit-transform-style: preserve-3d;\n        transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n.front, .back {\n  -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #FFF;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);\n}\n\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n}\n\n/* back, initially hidden pane */\n.back {\n    -webkit-transform: rotateY( 180deg );\n        transform: rotateY( 180deg );\n        z-index: 3;\n}\n\n.back .btn-simple{\n    position: absolute;\n    left: 0;\n    bottom: 4px;\n}\n/*        Style       */\n\n\n.card{\n    background: none repeat scroll 0 0 #FFFFFF;\n    border-radius: 4px;\n    color: #444444;\n}\n.card-container, .front, .back {\n  width: 100%;\n  height: 438px;\n  border-radius: 4px;\nbox-shadow: 0px 0px 19px 0px rgba(0,0,0,0.16);\n}\n.card .cover{\n    height: 105px;\n    overflow: hidden;\n    border-radius: 4px 4px 0 0;\n}\n.card .cover img{\n    width: 100%;\n}\n.card .user{\n    border-radius: 50%;\n    display: block;\n    height: 120px;\n    margin: -55px auto 0;\n    overflow: hidden;\n    width: 160px;\n}\n.card .user img{\n    background: none repeat scroll 0 0 #FFFFFF;\n    border: 4px solid #FFFFFF;\n    width: 160px;\n    height: 120px\n}\n\n.card .content{\n    background-color: rgba(0, 0, 0, 0);\n    box-shadow: none;\n    padding: 10px 20px 20px;\n}\n.card .content .main {\n    min-height: 160px;\n}\n.card .back .content .main {\n    height: 215px;\n}\n.card .name {\n    font-family: 'Arima Madurai', cursive;\n    font-size: 20px;\n    line-height: 28px;\n    margin: 10px 0 0;\n    text-align: center;\n    /*text-transform: capitalize;*/\n    overflow:hidden;\n    white-space:nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n}\n.card h5{\n    margin: 5px 0;\n    font-weight: 400;\n    line-height: 20px;\n}\n.card .profession{\n    color: #999999;\n    text-align: center;\n    margin-bottom: 12px;\n    display:block;    \n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.card .footer {\n    border-top: 1px solid #EEEEEE;\n    color: #999999;\n    margin: 20px 0 0;\n    padding: 10px 0 0;\n    text-align: center;\n}\n.card .footer .social-links{\n    font-size: 18px;\n}\n.card .footer .social-links a{\n    margin: 0 7px;\n}\n.card .footer .btn-simple{\n    margin-top: -6px;\n}\n.card .header {\n    padding: 15px 20px;\n    height: 90px;\n}\n.card .motto{\n    font-family: 'Arima Madurai', cursive;\n    border-bottom: 1px solid #EEEEEE;\n    color: #999999;\n    font-size: 14px;\n    font-weight: 400;\n    padding-bottom: 10px;\n    text-align: center;\n}\n\n.card .stats-container{\n  width: 100%;\n  margin-top: 50px;\n}\n.card .stats{\n  display: block;\n  float: left;\n  width: 33.333333%;\n  text-align: center;\n}\n\n.card .stats:first-child{\n  border-right: 1px solid #EEEEEE;\n}\n.card .stats:last-child{\n  border-left: 1px solid #EEEEEE;\n}\n.card .stats h4{\n    font-family: 'Arima Madurai', cursive;\n  font-weight: 300;\n  margin-bottom: 5px;\n}\n.card .stats p{\n  color: #777777;\n}\n/*      Just for presentation        */\n\n.title{\n    color: #506A85;\n    text-align: center;\n    font-weight: 300;\n    font-size: 44px;\n    margin-bottom: 90px;\n    line-height: 90%;\n}\n.title small{\n    font-size: 17px;\n    color: #999;\n    text-transform: uppercase;\n    margin: 0;\n}\n.space-30{\n  height: 30px;\n  display: block;\n}\n.space-50{\n    height: 50px;\n    display: block;\n}\n.space-200{\n    height: 200px;\n    display: block;\n}\n.white-board{\n    background-color: #FFFFFF;\n    min-height: 200px;\n    padding: 60px 60px 20px;\n}\n.ct-heart{\n    color: #F74933;\n}\n\n pre.prettyprint{\n    background-color: #ffffff;\n    border: 1px solid #999;\n    margin-top: 20px;\n    padding: 20px;\n    text-align: left;\n}\n.atv, .str{\n    color: #05AE0E;\n}\n.tag, .pln, .kwd{\n     color: #3472F7;\n}\n.atn{\n  color: #2C93FF;\n}\n.pln{\n   color: #333;\n}\n.com{\n    color: #999;\n}\n\n.btn-simple{\n    opacity: .8;\n    color: #666666;\n    background-color: transparent;\n}\n\n.btn-simple:hover,\n.btn-simple:focus{\n    background-color: transparent;\n    box-shadow: none;\n    opacity: 1;\n}\n.btn-simple i{\n    font-size: 16px;\n}\n\n.navbar-brand-logo{\n    padding: 0;\n}\n.navbar-brand-logo .logo{\n    border: 1px solid #333333;\n    border-radius: 50%;\n    float: left;\n    overflow: hidden;\n    width: 60px;\n}\n.navbar .navbar-brand-logo .brand{\n    color: #FFFFFF;\n    float: left;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 20px;\n    margin-left: 10px;\n    margin-top: 10px;\n    width: 60px;\n}\n.navbar-default .navbar-brand-logo .brand{\n    color: #555;\n}\n\n\n/*       Fix bug for IE      */\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    .front, .back{\n        -webkit-backface-visibility: visible;\n                backface-visibility: visible;\n    }\n\n    .back {\n        visibility: hidden;\n        -ms-transition: all 0.2s cubic-bezier(.92,.01,.83,.67);\n    }\n    .front{\n        z-index: 4;\n    }\n    .card-container:not(.manual-flip):hover .back,\n    .card-container.manual-flip.hover .back{\n        z-index: 5;\n        visibility: visible;\n    }\n}\n\n.span1 {\n    float:left;\n    margin-right:10px;\n}\n\n.footer a.social{\n    height:30px;\n    margin-top: 0px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.margin0-b{\n    margin-bottom: 0;\n}\n\n.margin5-b{\n    margin-bottom: 5px;\n    display: block;\n}\n\n.text-center.margin5-b{\n    display: block;\n/*    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;*/\n}\n\nimg.imagen-ultimos{\n    height:158px;\n}\n\na{\n    cursor:pointer;\n}\n\n/*Estilos para la home*/\nh1.h1-customized {\n  color:white;\n  font-size: 5em;\n  font-weight: 800;\n}\n\ndiv.custom {\n  background-color:#2d3c51;\n  border-color:#2d3c51;\n}\n\n/* \nCUSTOM.CSS\nAWESOME LANDING PAGE\n[Bootstrap 3] \n----------------------------------\nCreated by https://clemensotto.com\n----------------------------------\n*/\nbody, html {\n  /* BACKGROUND */\n  /*background: url(//cdn.clemensotto.com/codepen/img/blurred-bg1.jpg)*/\n}\n/*.container {\n  padding-top:50px;\n}*/\nh1.h1-customized {\n  color:white;\n  font-size: 4em;\n  font-weight: 800;\n}\n@media (max-width: 700px) {\n  h1.h1-customized {\n  color:white;\n  font-size: 2em;\n  font-weight: 400;\n}\n.label-movil{\n    font-size:48%;\n}\n}\nh2.h2-customized {\n  color:white;\n  font-size: 3em;\n  font-weight: 800;\n}\n\nh3.h3-customized {\n  color:white;\n  font-size: 2.5em;\n  font-weight: 800;\n}\nspan.custo {\n  color: lightgrey;\n  font-size: 1.5em;\n  font-weight: 800;\n}\n.inset {\n  text-shadow: 1px 4px 6px grey, 0 0 0 #000, 1px 4px 6px grey\n}\nsmall.col {\n  font-size:0.8em;\n  color:#333;\n}\nspan.download {\n  color:white;\n}\na.download {\n  color:#333;\n}\na.download:hover {\n  color:#333;\n  text-decoration:none;\n  font-weight:1000;\n}\ndiv.custom {\n  background-color:#5cb85c;\n  border-color:#fff;\n}\n.img-responsive, .panel {\n  margin: 0 auto;\n}\ndiv.custom-bg {\n  padding-top:250px;\n  background: url(//cdn.clemensotto.com/codepen/img/blurred-bg1-preview.jpg);\n  background-repeat:no-repeat;\n  background-size:100%;\n}\n\n/*Estilos menu superior*/\n.enlace-menu{\n    font-family: cursive;\n    font-size: 17px;  \n    border-right:1px solid #e1e1e1;  \n}\n.enlace-menu:not(:nth-child(1)){\n  border-right: none;\n}   \n\n    \n /************************PRONOSTICOS***************************************/\n.fondo-tenis{\n  background-size: cover !important;\n  background: url(" + __webpack_require__(195) + ");\n}\n.fondo-futbol{\n  background-size: cover !important;\n  background: url(" + __webpack_require__(194) + ");\n}\n.fondo-basket{\n  background-size: cover !important;\n  background: url(" + __webpack_require__(193) + ");\n}\n\n/*************** POST IT***************/\n* {\n  box-sizing: border-box;\n}\n\n.post-it {\n  width: 50px;\n  height: 54px;\n  position: relative;\n  float:right;\n  background: #ffa;\n  overflow: hidden;\n  margin: 0px 0px;\n  border-radius: 0 0 0 30px/45px;\n  box-shadow: inset 0 -40px 40px rgba(0, 0, 0, 0.2), inset 0 25px 10px rgba(0, 0, 0, 0.2), 0 5px 6px 5px rgba(0, 0, 0, 0.2);\n  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);\n  /*color: #130d6b;*/\n}\n\n.post-it .-texto-post-ganada {\n  cursor: pointer;\n  font-size: 24px;\n  padding-left: 14px;\n  color:green;\n}\n.post-it .-texto-post-perdida {\n  cursor: pointer;\n  font-size: 24px;\n  padding-left: 14px;\n  color:red;\n}\n\n.post-it:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: #ffa;\n  box-shadow: 3px -2px 10px rgba(0, 0, 0, 0.2), inset 15px -15px 15px rgba(0, 0, 0, 0.3);\n  left: 0;\n  bottom: 0;\n  z-index: 2;\n  -webkit-transform: skewX(25deg);\n          transform: skewX(25deg);\n}\n\n.post-it:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 75%;\n  height: 20px;\n  border-top: 3px solid #130d6b;\n  border-radius: 50%;\n  bottom: 0px;\n  left: 10%;\n}\n\n.margint8{\n  margin-top:8px;\n}\n\n.texto-logo{\n  color:#5cb85c;\n  font-family: fantasy; \n  /*margin-left: 8px;*/\n  color: #177CCA;\n  line-height: 70px;\n}\n\n.-padding25t{\n    padding-top:25px!important;\n}\n\n.ftl{\n  float:left;\n}\n\nh3.h3-titulomenu{\n  font-family: impact;\n  color: #5cb85c;\n  float: left;\n  font-size: 19px;\n  margin-top: 15px;\n}\n\n.padding10l{\n  padding-top:10px;\n}\n\n.padding10b{\n  padding-bottom: 10px;\n}\n\n#contenedorSvg1{\n    width:50px;\n    height:50px;\n}\n\n#contenedorSvg2{\n    width:120px;\n    height:120px;\n}\n\n.ftl{\n    float:left;\n}\n\n/*FILTRADO POR DEPORTES EN PRONOSTICOS COMPONENT*/\n/*Texto de filtrado por deportes en pronosticos componente*/\n.filter-nav{\n    height: 50px;\n    padding-left: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.filter-icon{\n    margin-right: 15px;\n    cursor:pointer;\n    margin-top:4px;\n}\n.texto-filtrado{\n    margin-left: 20px;\n    font-family: cursive;\n    font-size: 14px;\n    text-align: center;\n    margin-top: 17px;\n    color:darkgreen;\n}\n/********************************************/\n.sombra-blanca {\n  text-shadow: 1px 4px 6px white, 0 0 0 #000, 1px 4px 6px white;\n}\n\n.icon-menu-mobile{\n  margin-top: 19px;\n  background: #1B7ECA;\n}\n.icon-menu-mobile:focus{\n background: #1B7ECA; \n}\n.icon-menu-mobile:hover{\n background: #1B7ECA; \n}\n\n:root:root:root .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus{\n background: #1B7ECA;  \n}\n\n.ultimos-pronosticos-text{\n    color: white;\n    margin-left: 12px;\n    font-family: verdana;\n    text-align: center;\n    /* text-decoration: underline; */\n    margin-bottom: 18px;\n    font-size: 29px;\n}\n\n@media (max-width: 900px) {\n   .texto-logo{\n      margin-left: 8px;\n    }\n}\n\n@media (max-width: 767px){\n    .boton-filtro1{\n        margin-left: 28px;\n    }\n    \n    .boton-filtro{\n        margin-top: 4px;\n    }\n\n    .hide-mobile {\n       display:none;\n    }\n    \n}\n\n.radio15{\n  border-radius:15px;\n}\n\n/**********************************************SPINER******************************/\n\n.texto-carga{\n  color:darkslategray; text-align:center;\n}\n.uil-spin-css {\n    background: none;\n    position: relative;\n    width: 200px;\n    height: 200px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n@-webkit-keyframes uil-spin-css {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes uil-spin-css {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes uil-spin-css {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.uil-spin-css > div {\n  width: 24px;\n  height: 24px;\n  margin-left: 4px;\n  margin-top: 4px;\n  position: absolute;\n}\n.uil-spin-css > div > div {\n  width: 100%;\n  height: 100%;\n  border-radius: 100px;\n  background: #000;\n}\n.uil-spin-css > div:nth-of-type(1) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0.87s;\n  animation-delay: -0.87s;\n}\n.uil-spin-css > div:nth-of-type(1) {\n  -webkit-transform: translate(84px, 84px) rotate(45deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(45deg) translate(70px, 0);\n}\n.uil-spin-css > div:nth-of-type(2) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n.uil-spin-css > div:nth-of-type(2) {\n  -webkit-transform: translate(84px, 84px) rotate(90deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(90deg) translate(70px, 0);\n}\n.uil-spin-css > div:nth-of-type(3) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0.62s;\n  animation-delay: -0.62s;\n}\n.uil-spin-css > div:nth-of-type(3) {\n  -webkit-transform: translate(84px, 84px) rotate(135deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(135deg) translate(70px, 0);\n}\n.uil-spin-css > div:nth-of-type(4) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.uil-spin-css > div:nth-of-type(4) {\n  -webkit-transform: translate(84px, 84px) rotate(180deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(180deg) translate(70px, 0);\n}\n.uil-spin-css > div:nth-of-type(5) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0.37s;\n  animation-delay: -0.37s;\n}\n.uil-spin-css > div:nth-of-type(5) {\n  -webkit-transform: translate(84px, 84px) rotate(225deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(225deg) translate(70px, 0);\n}\n.uil-spin-css > div:nth-of-type(6) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s;\n}\n.uil-spin-css > div:nth-of-type(6) {\n  -webkit-transform: translate(84px, 84px) rotate(270deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(270deg) translate(70px, 0);\n}\n.uil-spin-css > div:nth-of-type(7) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0.12s;\n  animation-delay: -0.12s;\n}\n.uil-spin-css > div:nth-of-type(7) {\n  -webkit-transform: translate(84px, 84px) rotate(315deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(315deg) translate(70px, 0);\n}\n.uil-spin-css > div:nth-of-type(8) > div {\n  -webkit-animation: uil-spin-css 1s linear infinite;\n  animation: uil-spin-css 1s linear infinite;\n  -webkit-animation-delay: -0s;\n  animation-delay: -0s;\n}\n.uil-spin-css > div:nth-of-type(8) {\n  -webkit-transform: translate(84px, 84px) rotate(360deg) translate(70px, 0);\n  transform: translate(84px, 84px) rotate(360deg) translate(70px, 0);\n}\n/********************************************SPINER-*-*********************************/    \n\n.navbar-default .navbar-toggle .icon-bar{\n    background:white;\n}\n\n.btn-lg{\n  min-width: 50px;\n}\n\n#scroll-to-top{\n    color: #fff;\n    position: fixed;\n    bottom: 10px;\n    background: #5cb85c;\n    padding: 13px;\n    border: 2px solid #fff;\n    right: 10px;\n    border-radius: 50%;\n    font-size: 25px;\n}\n\n/*Mejora en la cabecera mobile*/\n#cabecera-menu{\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ 192:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fondo-basket.9518327237cbf1cc7afa.jpg";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fondo-futbol.c4691d8ea258f07b3962.jpg";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fondo-tenis.5714b25f409293345f8f.jpg";

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fondoazul.6ad87d404e14dc269443.jpg";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(192)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[200]);
//# sourceMappingURL=styles.bundle.js.map