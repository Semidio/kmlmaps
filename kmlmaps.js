(function($) {
var link = $("#link"),
	dialog = $("<div>")
		.hide()
		.click(function() { $(this).fadeOut('fast'); })
		.appendTo($('#inner'));
var code = $('<a>', {href: 'javascript:void(0);', 'class': 'kd-button right small','title':chrome.i18n.getMessage("kml_title")})
	.append($('<img>').addClass("bar-icon").attr('src', chrome.extension.getURL("kml.png")))
	.click(function() { location=link.attr('href') + '&output=kml'; return false; });

link.removeClass('right').addClass('mid');
link.parent().width(142);
link.parent().append(code);
})(jQuery);