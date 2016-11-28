$(function() {
	var $barrageItem = $('.barrage-wrap .barrage-item'),
		pageW=parseInt($('body').width()),
    	pageH=parseInt($('body').height()),
    	$content = $('.content'),
    	page = 0,
    	canSwipe = false,
    	page2Init = true;
    $('section').css('height',pageH);
    // 音频元素
    var myAudio = $('#musicfx').get(0),
    	mcPlay = $('#mc_play');
   	new Hammer(document.getElementById('mc_play')).on('tap',function (ev) {
        if (mcPlay.hasClass('on')){
            myAudio.pause();
            mcPlay.attr('class','stop');
        }else{
            myAudio.play();
            mcPlay.attr('class','on');
        }
        // if(myAudio.paused){
        //     myAudio.play();
        //     mcPlay.attr('class','on');
        // }else{
        //     myAudio.pause();
        //     mcPlay.attr('class','stop');
        // }
   	})
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
			myAudio.src='media/duang.mp3';
        	myAudio.play();
			// myAudio.addEventListener('canplaythrough',function() {
   //          	myAudio.play();
			// })
    		TweenMax.to(box1, 2, {left:'50%', opacity:1, ease: Elastic.easeOut,onComplete:function(e){
    			box1.addClass('shake');
    			// 打开盒子
			    new Hammer(document.getElementsByClassName('box-1')[0]).on('tap', function(ev) {
			    	$('.page-box-1').hide();
			    	$('.page-box-2').show();
				    // 打开盒子音效Boom音效
					myAudio.src='media/boom.mp3';
		            myAudio.play();
		            /*myAudio.onended = function() {
						myAudio.src='media/bgm.mp3';
			            myAudio.play();
					};*/

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
					TweenMax.to($('.ribbon-34'), 1, {opacity:1,scale:1, x:40, y:10, ease: Power4.easeOut, delay:0.1,onComplete:function () {
						myAudio.src='media/bgm.mp3';
						$('#musicControl').show().find('a').addClass('on');
						$('#musicfx').attr('loop','loop');
			            myAudio.play();
					}});





	    			// 文字标题出现动画
	    			TweenMax.to($('.text-1'), 1, {opacity:1, delay:1});
	    			TweenMax.to($('.text-2'), 1, {opacity:1, delay:1.5,onComplete:function () {
	    				canSwipe = true;

	    				// 不手动话的话5秒后自动滑到第二页
	    				setTimeout(function () {
    						if(canSwipe){
	    						page++;
						        $content.css({
						        	'-webkit-transition':'-webkit-transform 1s ease-in-out',
						            'transition':'transform 1s ease-in-out',
						            '-webkit-transform' : 'translate3d(0, -'+ page*pageH +'px, 0)',
						            'transform' : 'translate3d(0, -'+ page*pageH +'px, 0)'
						        });
						       	$('.section',$content).removeClass('page-active').eq(page).addClass('page-active');
			    					animationAll.page2();
			    				}
	    				},5000);
	    			}});
			    });
			    
    		}});
    		TweenMax.to($('.box-1-sd'), 1.5, {display:'block'});

    	},
    	page2: function() {

    		canSwipe = false;
    		page2Init = false;
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
		 	TweenMax.to($('.barrage-card'), 3, {left:'50%', delay:4,onComplete:function () {
	 			$('.barrage-card').addClass('shadow');
		 	}});
		 	TweenMax.to($('.barrage-help'), 3, {left:'50%', delay:5,onComplete:function () {
		 			$('.barrage-help').addClass('shadow');
			 		// 引导分享
					new Hammer(document.getElementsByClassName('barrage-help')[0]).on('tap', function(ev) {
						showPopup('popup-share');
					});
		 			// 礼物框隐藏
				 	TweenMax.to($('.page2-icon'), 1, {opacity:0});
				 	// 规则按钮
				 	TweenMax.to($('.active-prize'), 1, {opacity:1});

				 	canSwipe = true;
			 		// 奖品规则弹层
					new Hammer(document.getElementsByClassName('active-prize')[0]).on('tap', function(ev) {
						showPopup('popup-prize');
					});
					    
				 	// 手型按钮
				 	TweenMax.to($('.hand'), 1, {opacity:1,onComplete:function () {
				 		$('.hand').addClass('show');
				 	}});
				 	// 查看我的心愿卡
				 	TweenMax.to($('.active-prize'), 1, {opacity:1,onComplete:function () {
				 		// 心愿卡弹层
						new Hammer(document.getElementsByClassName('barrage-card')[0]).on('tap', function(ev) {
							// ajax请求后台数据判断当前几颗心
							// $.ajax({
							// 	url: '/path/to/file',
							// 	type: 'default GET (Other values: POST)',
							// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
							// 	data: {param1: 'value1'},
							// 	success:function () {
							// 		// 请求成功显示心的数量和弹层
							// 		// $('.heart-wrap').addclass('total-1');  total-1 total-2 total-3
							// 		// showPopup('popup-card');
							// 	}
							// });
							




							showPopup('popup-card');



							// 临时听心跳音乐
							myAudio.src='media/heart.mp3';
							$('#musicControl').hide().find('a').removeClass('on');
							// $('#musicfx').attr('loop','1');
							// myAudio.addEventListener("ended",function() {
						 //        myAudio.pause();
						 //    });
					        myAudio.play();
						});
				 	}});
				 	
		 	}});
		 	// 参与活动按钮
		 	
	    }
    };
    setTimeout(function(){

	    animationAll.page1();
	    // animationAll.page2();
	},1000);
	    // $content.css({
	    // 	'-webkit-transition':'-webkit-transform 1s ease-in-out',
	    //     'transition':'transform 1s ease-in-out',
	    //     '-webkit-transform' : 'translate3d(0, -'+ 1*pageH +'px, 0)',
	    //     'transform' : 'translate3d(0, -'+ 1*pageH +'px, 0)'
	    // });
    

	

 
    // hammerElement.get('pinch').set({
    //     enable: true
    // });
    // hammerElement.get('rotate').set({
    //     enable: true
    // });
    hammerElement.on('swipeup', function(ev) {
    	if(canSwipe){
    		page++;
	        if(page<2){
		        $content.css({
		        	'-webkit-transition':'-webkit-transform 1s ease-in-out',
		            'transition':'transform 1s ease-in-out',
		            '-webkit-transform' : 'translate3d(0, -'+ page*pageH +'px, 0)',
		            'transform' : 'translate3d(0, -'+ page*pageH +'px, 0)'
		        });
		       	$('.section',$content).removeClass('page-active').eq(page).addClass('page-active');
		       	canSwipe = false;
		       	if(page2Init){
		       		animationAll.page2();
		       	}
		       	
	        }else{
	        	page = 1;
	        }
    	}
	    	
    	console.log(page);
        console.log(ev.type);
    });
    hammerElement.on('swipedown', function(ev) {
    	if(canSwipe){
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
	    }    
    	console.log(page);
        console.log(ev.type);
    });
   	
    // 弹层关闭
    var popups = document.getElementsByClassName('popup');

  	for(var i = 0; i < popups.length; i++) {
        var hammerPopup = new Hammer(popups[i]);
        hammerPopup.on('tap',function(ev) {
			var elem = $(ev.target);
			// console.log(elem);
			if(elem.hasClass('popup')){
				$('.popup-wrap').fadeOut(function() {
					// elem.hide();
					$('.popup').hide().css('z-index', '1');
				});
			}
        }.bind(popups[i]));
   	}


	// 弹层显示
	/**
	 * 显示弹层方法
	 * @param  {string} className 需要显示的弹层类名
	 * @return {[type]}           [description]
	 */
	function showPopup(className) {
		var allPopup = $('.popup'),
			zIndex = 1;
	  	for(var i = 0; i < allPopup.length; i++) {
	  		var currentIndex = $(allPopup[i]).css('z-index');
			if(currentIndex > zIndex){
				zIndex = currentIndex;
			}
	  	}
		$('.'+ className +'').show().css('z-index', zIndex+1);;
		$('.popup-wrap').fadeIn();
	}
	// 弹层隐藏
	/**
	 * 显示弹层方法
	 * @param  {string} className 需要隐藏的弹层类名
	 * @return {[type]}           [description]
	 */
	// function hidePopup(className) {
	// 	$('.popup-wrap').fadeOut(function() {
	// 		$('.'+ className +'').hide();
	// 	});
	// }
	



	// 点亮心愿
	new Hammer(document.getElementsByClassName('light')[0]).on('tap', function(ev) {
		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'default GET (Other values: POST)',
		// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// 	data: {param1: 'value1'},
		// 	success:function (argument) {
				
		// 	}
		// });
		
	});
	// 领取奖品
	new Hammer(document.getElementsByClassName('get')[0]).on('tap', function(ev) {
		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'default GET (Other values: POST)',
		// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// 	data: {param1: 'value1'},
		// 	success:function (argument) {
				
		// 	}
		// });
		


		// 临时显示二维码
		// showPopup('popup-code');
	});

});