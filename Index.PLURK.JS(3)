(function() {
	let anonymous_css = `
		.list .highlight_owner .plurk_cnt { background: #FAA; }
		.list .highlight_owner .plurk_cnt:hover { background: #E66; }
    `;
	let search_css = `
		.response_box .plurk.highlight_owner { background: #FAA; }
		.response_box .plurk.highlight_owner:hover { background: #E66; }
    `;
    if($('body.anonymous').length) $('head').append('<style>' + anonymous_css + '</style>');
    if($('body.search').length) $('head').append('<style>' + search_css + '</style>');
})();
