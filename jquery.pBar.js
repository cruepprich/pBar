/**
 * pBar 1.0
 * pBar is a simple jQuery plugin to show inline progress bar
 *
 * Copyright 2016, Atul Gupta
 * Licensed under the MIT license.
 * https://github.com/lastdates/pBar
 *
 * Date: Mon Jan 4 2016 15:56:11 GMT+0530 (IST)
 */
(function($){

	var color,
		css=';min-height:9px;border-radius:',
		pickColor=function(e){
			return color[parseInt(e*color.length/101)];
		};

	$.fn.pBar = function(){
		return this.each(function(){

			var $bar=$(this),
				from=$bar.data('from'),
				to=$bar.data('to');
				color=($bar.data('color')||'#b32,#d31,#ea6,#fa6,#fd8,#ad6,#9c6,#5b6,#6a7').split(',');

			$bar.html('<div style="width:'+from+'%;background-color:'+pickColor(from)+'"></div>')
				.prop('title',to+'%')
				.attr('onclick','$(this).pBar();');

			$bar.children('div')
				.width(to+'%')
				.css("background-color", pickColor(to));
		});
	}

	$("<style>.pBar{display:inline-block;min-width:50px"+css+"2px;border:1px solid #ccc;padding:1px}.pBar div{height:100%"+css+"1px;transition:all 1s linear 0s;box-sizing:border-box}</style>").appendTo("head");
	$(document).ready(function(){$('.pBar').pBar();});

})(jQuery);
