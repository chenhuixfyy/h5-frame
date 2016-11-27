$(function() {
	var $textItem = $('.text-wrap .text-item');
	var pageW=parseInt($('body').width());
    var pageH=parseInt($('body').height());
    console.log(pageH)
    console.log(pageW)
	$('#start').click(function(argument) {
		// (new TimelineLite())
	 //        .append(
	 //            TweenMax.fromTo($textItem.eq(0), 5, {x:500, y:0}, {x:-500, y:0})
	 //        )
	 //        .append(
	 //            TweenMax.fromTo($textItem.eq(1), 5, {x:500, y:30}, {x:-500, y:30,delay:1})
	 //        )
	 
	  



	})
	function page2() {
	 	TweenMax.fromTo($textItem.eq(0), 8, {left:'100%', top:0}, {left:-pageW*2, top:0});
		  TweenMax.fromTo($textItem.eq(1), 8, {left:'100%', top:40}, {left:-pageW*2, top:40, delay:0.5});
		  TweenMax.fromTo($textItem.eq(2), 8, {left:'100%', top:80}, {left:-pageW*2, top:80, delay:0.8});
		  TweenMax.fromTo($textItem.eq(3), 8, {left:'100%', top:120}, {left:-pageW*2, top:120, delay:0.2});
		  TweenMax.fromTo($textItem.eq(4), 8, {left:'100%', top:160}, {left:-pageW*2, top:160, delay:1});
		  TweenMax.fromTo($textItem.eq(5), 8, {left:'100%', top:0}, {left:-pageW*2, top:0, delay:1.5});
		  TweenMax.fromTo($textItem.eq(6), 2, {left:'150%', top:200}, {left:'50%', top:200, delay:1});
	 } 

   	
	$('#wraper').fullpage({
		afterLoad: function(anchorLink, index){
			console.log(index);
			if(index == 2){
				page2();
			}
		},
		onLeave: function(index, nextIndex, direction){
	        //it won't scroll if the destination is the 3rd section
	        if(nextIndex == 3){

	        	var b = false;
	        	setTimeout(function(argument) {
	        		b = true;
	        	},5000)

	            return b;
	        }
	    }
	});






});