

window.onscroll = function() {
	var scrollY = window.pageYOffset || document.documentElement.scrollTop;
	var innerHeight = document.documentElement.clientHeight;
	var element = document.getElementById('scrollButton');


	switch (element.className) {
		case 'button':
			if (scrollY > innerHeight) {
				element.className = 'button up';
			}
		break;

		case 'button up':
			if (scrollY < innerHeight) {
				element.className = 'button';
			}
		break;

		case 'button down':
			if (scrollY > innerHeight) {
				element.className = 'button up';
			}
		break;
	}
}

var pageYLabel = 0;

scrollButton.onclick = function() {

 	var scrollY = window.pageYOffset || document.documentElement.scrollTop;
 	
  	switch (this.className) {
   		case 'button up':
     		pageYLabel = scrollY;
     		window.scrollTo(0, 0);
     		this.className = 'button down';
      	break;

    	case 'button down':
      		window.scrollTo(0, pageYLabel);
      	this.className = 'button up';
  }

}














