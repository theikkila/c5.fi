
(function(){
// http://www.dustindiaz.com/getelementsbyclass
function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

	function startAnimation(element){
		setTimeout(function(){
			element.classList.add('animated');
			element.classList.add('fadeInDown');
		}, Math.random()*800);
	}
	var divs = getElementsByClass('cv-animate');
	for(var i in divs){
		startAnimation(divs[i]);
	}

	window.fitText( document.getElementById("megatitle"), 0.7 );
}());