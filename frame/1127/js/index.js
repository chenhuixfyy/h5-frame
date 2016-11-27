$(function() {
	var $barrageItem = $('.barrage-wrap .barrage-item'),
		pageW=parseInt($('body').width()),
    	pageH=parseInt($('body').height()),
    	$content = $('.content'),
    	page = 0,
    	canSwipe = false;
    $('section').css('height',pageH);


    // Hammer.js
 	delete Hammer.defaults.cssProps.userSelect;
    var hammerElement = new Hammer(document.getElementById('wrapper'));
    hammerElement.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

    var box1 = $('.box-1');
    // 动画
    var animationAll = {
    	page1: function() {
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
    				TweenMax.to($('.box-top'), 1, {rotation:2,x:300, y:-350, ease: Power4.easeOut});


    				// 彩带动画
    				TweenMax.to($('.ribbon-1'), 1, {opacity:1,scale:1, x:-60, y:-90, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-2'), 1, {opacity:1,scale:1, x:-50, y:-10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-3'), 1, {opacity:1,scale:1, x:100, y:0, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-4'), 1, {opacity:1,scale:1, x:-170, y:-10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-5'), 1, {opacity:1,scale:1, x:50, y:-60, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-6'), 1, {opacity:1,scale:1, x:140, y:-210, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-7'), 1, {opacity:1,scale:1, x:-125, y:-110, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-8'), 1, {opacity:1,scale:1, x:-160, y:10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-9'), 1, {opacity:1,scale:1, x:-110, y:-320, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-10'), 1, {opacity:1,scale:1, x:80, y:-410, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-11'), 1, {opacity:1,scale:1, x:130, y:-300, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-12'), 1, {opacity:1,scale:1, x:220, y:-140, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-13'), 1, {opacity:1,scale:1, x:130, y:-130, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-14'), 1, {opacity:1,scale:1, x:130, y:-70, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-15'), 1, {opacity:1,scale:1, x:20, y:50, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-16'), 1, {opacity:1,scale:1, x:150, y:50, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-17'), 1, {opacity:1,scale:1, x:35, y:-110, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-18'), 1, {opacity:1,scale:1, x:270, y:20, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-19'), 1, {opacity:1,scale:1, x:95, y:30, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-20'), 1, {opacity:1,scale:1, x:-80, y:-40, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-21'), 1, {opacity:1,scale:1, x:-165, y:-70, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-22'), 1, {opacity:1,scale:1, x:-195, y:10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-23'), 1, {opacity:1,scale:1, x:60, y:-110, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-24'), 1, {opacity:1,scale:1, x:240, y:-30, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-25'), 1, {opacity:1,scale:1, x:60, y:-35, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-26'), 1, {opacity:1,scale:1, x:-90, y:-140, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-27'), 1, {opacity:1,scale:1, x:-50, y:-210, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-28'), 1, {opacity:1,scale:1, x:-50, y:-80, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-29'), 1, {opacity:1,scale:1, x:-120, y:-20, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-30'), 1, {opacity:1,scale:1, x:-250, y:-20, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-31'), 1, {opacity:1,scale:1, x:-240, y:-130, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-32'), 1, {opacity:1,scale:1, x:-135, y:45, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-33'), 1, {opacity:1,scale:1, x:-20, y:10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-34'), 1, {opacity:1,scale:1, x:40, y:10, ease: Power4.easeOut, delay:0.1});





	    			// 文字标题出现动画
	    			TweenMax.to($('.text-1'), 1, {opacity:1, delay:1});
	    			TweenMax.to($('.text-2'), 1, {opacity:1, delay:1.5,onComplete:function () {
	    				canSwipe = true;
	    			}});
			    });
			    
    		}});
    		TweenMax.to($('.box-1-sd'), 1.5, {display:'block'});

    	},
    	page2: function() {

		 	TweenMax.to($('.barrage-rocket'), 10, {left:-pageW*2, delay:1.5});
		 	TweenMax.to($barrageItem.eq(0), 8, {left:-pageW*2});
			TweenMax.to($barrageItem.eq(1), 8, {left:-pageW*2, delay:0.5});
			TweenMax.to($barrageItem.eq(2), 8, {left:-pageW*2, delay:0.8});
			TweenMax.to($barrageItem.eq(3), 8, {left:-pageW*3, delay:3});
			TweenMax.to($barrageItem.eq(4), 8, {left:-pageW*4, delay:1});
			TweenMax.to($barrageItem.eq(5), 8, {left:-pageW*2, delay:1.5});
			TweenMax.to($barrageItem.eq(6), 8, {left:-pageW*2, delay:1.2});
			TweenMax.to($barrageItem.eq(7), 8, {left:-pageW*2, delay:3});
			TweenMax.to($barrageItem.eq(8), 8, {left:-pageW*4, delay:1.5});
			TweenMax.to($barrageItem.eq(9), 8, {left:-pageW*3, delay:0.8});
			TweenMax.to($barrageItem.eq(10), 8, {left:-pageW*2, delay:1});
		 	TweenMax.to($('.barrage-bird'), 10, {left:-pageW*2, delay:2});
	    }
    };
    setTimeout(function(){

	    // animationAll.page1();
	    animationAll.page2();
	},1000);
	    $content.css({
    	'-webkit-transition':'-webkit-transform 1s ease-in-out',
        'transition':'transform 1s ease-in-out',
        '-webkit-transform' : 'translate3d(0, -'+ 1*pageH +'px, 0)',
        'transform' : 'translate3d(0, -'+ 1*pageH +'px, 0)'
    });
    

	

 
    // hammerElement.get('pinch').set({
    //     enable: true
    // });
    // hammerElement.get('rotate').set({
    //     enable: true
    // });
    hammerElement.on('swipeup', function(ev) {
    	if(canSwipe){
    		page++;
	        if(page<5){
		        $content.css({
		        	'-webkit-transition':'-webkit-transform 1s ease-in-out',
		            'transition':'transform 1s ease-in-out',
		            '-webkit-transform' : 'translate3d(0, -'+ page*pageH +'px, 0)',
		            'transform' : 'translate3d(0, -'+ page*pageH +'px, 0)'
		        });
		       	$('.section',$content).removeClass('page-active').eq(page).addClass('page-active');
		       	canSwipe = false;
	        }else{
	        	page = 4;
	        }
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