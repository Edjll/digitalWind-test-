
window.onscroll = function() {
	var scrollY = window.pageYOffset || document.documentElement.scrollTop;
	var innerHeight = document.documentElement.clientHeight;
	var scrollFull = document.documentElement.scrollHeight;
	var elementLink = document.getElementById('link');
	var elementScroll = document.getElementById('scrollButton');


	if (elementLink != undefined) {
		
		var elementsLink = link.getElementsByTagName('a');
		if (elementsLink[0].className !== 'static back') {
			if (scrollY < innerHeight) {
				if (elementsLink.length === 1) {
					if (elementsLink[0].className.indexOf('back') >= 0) {
						elementsLink[0].className = 'absoluteTop back';
					}
					if (elementsLink[0].className.indexOf('next') >= 0) {
						elementsLink[0].className = 'absoluteTop next';
					}
				} else {
					elementsLink[0].className = 'absoluteTop back';
					elementsLink[1].className = 'absoluteTop next';
				}
			}

			if (scrollY > innerHeight) {
				if (elementsLink.length === 1) {
					if (elementsLink[0].className.indexOf('back') >= 0) {
						elementsLink[0].className = 'fixed back';
					}
					if (elementsLink[0].className.indexOf('next') >= 0) {
						elementsLink[0].className = 'fixed next';
					}
				} else {
					elementsLink[0].className = 'fixed back';
					elementsLink[1].className = 'fixed next';
				}
			}
		}
	}

	var tmp = scrollFull - innerHeight - 30;

	switch (elementScroll.className) {
		case 'button':
			if (scrollY > innerHeight) {
				elementScroll.className = 'button up';
			}
			if (scrollY >= tmp) {
				elementScroll.className = 'button foot';
			}
		break;

		case 'button down':
			if (scrollY > innerHeight) {
				elementScroll.className = 'button up';
			}
			if (scrollY >= tmp) {
				elementScroll.className = 'button foot';
			}
		break;

		case 'button foot': 
			if (scrollY < tmp) {
				elementScroll.className = 'button up';
			}
			if (scrollY < innerHeight) {
				elementScroll.className = 'button';
			}
		break;

		case 'button up':
			if (scrollY < innerHeight) {
				elementScroll.className = 'button';
			}
			if (scrollY >= tmp) {
				elementScroll.className = 'button foot';
			}
		break;
	}
}



var pageYLabel = 0;

scrollButton.onclick = function() {

 	var scrollY = window.pageYOffset || document.documentElement.scrollTop;
 	var flag = false;
  	switch (this.className) {
   		case 'button up':
     		pageYLabel = scrollY;
     		window.scrollTo(0, 0);
     		this.className = 'button down';
      	break;

    	case 'button down':
      		window.scrollTo(0, pageYLabel);
      	(flag)?(this.className = 'button up'):(this.className = 'button foot');
      	break;

      	case 'button foot':
      		flag = true;
      		pageYLabel = scrollY;
      		window.scrollTo(0, 0);
      	this.className = 'button down';
      	break;
  }

}














