/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	"use strict";

	var	$body = document.querySelector('body');

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// 根据设备类型设置背景图片
	function setBackgroundImage() {
		const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		const apiUrl = isMobile ? 'https://bing.img.run/m.php' : 'https://bing.img.run/1920x1080.php';
		const fallbackUrl = isMobile ? 'images/Mobile.jpg' : 'images/1.jpg';

		const img = new Image();
		img.src = apiUrl;
		img.onload = function() {
			document.body.style.backgroundImage = `url('${apiUrl}')`;
		};
		img.onerror = function() {
			document.body.style.backgroundImage = `url('${fallbackUrl}')`;
		};

		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundPosition = 'center center';
		document.body.style.backgroundAttachment = 'fixed';

		// 直接设置版权颜色为白色并添加阴影，以确保在任何背景下都可见
		const footerElement = document.getElementById('footer');
		if (footerElement) {
			footerElement.style.color = 'rgba(255, 255, 255, 0.85)'; // 白色
			footerElement.style.textShadow = '0 0 5px rgba(0,0,0,0.5)'; // 黑色阴影
		}
	}

	// 页面加载时调用
	window.onload = setBackgroundImage;

	// 高级选项切换函数
	window.toggleAdvanced = function() {
		const fields = document.getElementById('advanced-fields');
		fields.classList.toggle('visible');
	};

})();
