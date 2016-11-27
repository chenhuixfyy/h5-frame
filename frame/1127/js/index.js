$(function() {
	var $textItem = $('.text-wrap .text-item'),
		pageW=parseInt($('body').width()),
    	pageH=parseInt($('body').height()),
    	$content = $('.content'),
    	page = 0;
    $('section').css('height',pageH);


    // Hammer.js
 	delete Hammer.defaults.cssProps.userSelect;
    var hammerElement = new Hammer(document.getElementById('wrapper'));
    hammerElement.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

    var box1 = $('.box-1');
    // 动画
    var animationAll = {
    	page1: function(argument) {
    		// 第一屏动画
    		// 盒子进来音效
    		TweenMax.to(box1, 2, {left:'50%', opacity:1, ease: Elastic.easeOut,onComplete:function(e){
    			box1.addClass('shake');
    			// 打开盒子
			    new Hammer(document.getElementsByClassName('box-1')[0]).on('tap', function(ev) {
			    	$('.page-box-1').hide();
			    	$('.page-box-2').show();
				    // 打开盒子音效
				    
				    // 盒盖弹起动画
				    $('.box-top').addClass('shadow');
    				TweenMax.to($('.box-top'), 1.5, {rotation:2,x:300, y:-350, ease: Power4.easeOut});
    				// // 彩带动画
    				// TweenMax.to($('.ribbon-1'), 1.5, {opacity:1,scale:1, y:-60, x:-100, ease: Power4.easeOut});
    				// TweenMax.to($('.ribbon-2'), 1.5, {opacity:1,scale:1, y:-10, x:-100, ease: Power4.easeOut});
    				// TweenMax.to($('.ribbon-3'), 1.5, {opacity:1,scale:1, y:-5, x:40, ease: Power4.easeOut});
    				// TweenMax.to($('.ribbon-4'), 1.5, {opacity:1,scale:1, y:-10, x:-200, ease: Power4.easeOut});
    				// TweenMax.to($('.ribbon-5'), 1.5, {opacity:1,scale:1, y:-30, x:15, ease: Power4.easeOut});
    				TweenMax.to($('.ribbon-1'), 1.5, {opacity:1,scale:1, bottom:60, left:0, ease: Power4.easeOut});







	    			// 文字标题出现动画
	    			TweenMax.to($('.text-1'), 1, {opacity:1, delay:1});
	    			TweenMax.to($('.text-2'), 1, {opacity:1, delay:1.5});
			    });
			    
    		}});
    		TweenMax.to($('.box-1-sd'), 1.5, {display:'block'});

    	}
    };
    setTimeout(function(){

	    animationAll.page1();
	},1000)





	function page2() {
	 	TweenMax.fromTo($textItem.eq(0), 8, {left:'100%', top:0}, {left:-pageW*2, top:0});
		  TweenMax.fromTo($textItem.eq(1), 8, {left:'100%', top:40}, {left:-pageW*2, top:40, delay:0.5});
		  TweenMax.fromTo($textItem.eq(2), 8, {left:'100%', top:80}, {left:-pageW*2, top:80, delay:0.8});
		  TweenMax.fromTo($textItem.eq(3), 8, {left:'100%', top:120}, {left:-pageW*2, top:120, delay:0.2});
		  TweenMax.fromTo($textItem.eq(4), 8, {left:'100%', top:160}, {left:-pageW*2, top:160, delay:1});
		  TweenMax.fromTo($textItem.eq(5), 8, {left:'100%', top:0}, {left:-pageW*2, top:0, delay:1.5});
		  TweenMax.fromTo($textItem.eq(6), 2, {left:'150%', top:200}, {left:'50%', top:200, delay:1});
	 } 
    // hammerElement.get('pinch').set({
    //     enable: true
    // });
    // hammerElement.get('rotate').set({
    //     enable: true
    // });
    hammerElement.on('swipeup', function(ev) {
    	page++;
        if(page<5){
	        $content.css({
	        	'-webkit-transition':'-webkit-transform 1s ease-in-out',
	            'transition':'transform 1s ease-in-out',
	            '-webkit-transform' : 'translate3d(0, -'+ page*pageH +'px, 0)',
	            'transform' : 'translate3d(0, -'+ page*pageH +'px, 0)'
	        });
	       	$('.section',$content).removeClass('page-active').eq(page).addClass('page-active');
        }else{
        	page = 4;
        }
    	console.log(page);
        console.log(ev.type);
    });
    hammerElement.on('swipedown', function(ev) {
    	page--;
        if(page>-1){
	        $content.css({
	        	'-webkit-transition':'-webkit-transform 1s ease-in-out',
	            'transition':'transform 1s ease-in-out',
	            '-webkit-transform' : 'translate3d(0, -'+ page*pageH +'px, 0)',
	            'transform' : 'translate3d(0, -'+ page*pageH +'px, 0)'
	        });
	       	$('.section',$content).removeClass('page-active').eq(page).addClass('page-active');
        }else{
        	page = 0;
        }
    	console.log(page);
        console.log(ev.type);
    });
   	






});