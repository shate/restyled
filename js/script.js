$(document).ready(function() {

	$('.ico-close, #popup').click(function(e) {
		if(e.target.id != '' || e.target.className == 'ico-close'){
			
		
		$('#popup').fadeOut();
		}
		
	});
	$('.show-form').click(function() {
		$('#popup').fadeIn();
		return false;
	});
	$('form input[type="email"], form input[type="phone"]').focus(function() {
		var self = $(this).parent();
		$('input[type="radio"]', self).attr({
			'checked': 'checked'
		})

	});
$('.slider').slick();

});
$('.offer').scroolly([

	{

		from: 'el-top = vp-top - 200px',
		to: 'el-bottom = vp-bottom + 400px',
		cssFrom: {
			'background-position': '50% 0%'
		},
		cssTo: {
			'background-position': '50% 400%'
		}
	}
]);

$(window).scroll(function() {
	if ($(window).scrollTop() > 0) {
		$(".top").addClass("fixed");
		if ($(window).scrollTop() > 100){
     $('.fix-phone').fadeIn();
		}
	} else {
		$(".top").removeClass("fixed");
		$('.fix-phone').fadeOut();
	}
});

$(window).load(function() {

	var $container = $('.isotope'),
		$imgs = $container.find('img').hide(),
		totalImgs = $imgs.length,
		cnt = 0;

	$imgs.each(function(i) {
		var $img = $(this);
		$img.parent().attr('href',$img.attr('src')).attr('rel', 'group');
		$('<img/>').load(function() {
			++cnt;
			if (cnt === totalImgs) {
				$imgs.show();
				$container.montage({
					fillLastRow: true,
					alternateHeight: false,

					minw: 100,
					minh: 50,
					maxh: 150,
					margin: 0
				});


			}
		}).attr('src', $img.attr('src'));
	});

	$("a.am-wrapper").fancybox();
})