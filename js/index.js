imgScale.onclick = function() {
	var div = document.createElement('div');
	div.className = 'imgFull';

	var img = imgScale.cloneNode(false);
	img.className += ' cloneImg';

	var button = document.createElement('button');
	button.className = 'imgButton';
	button.setAttribute('id', 'imgClose');

	div.insertBefore(img, div.children[0]);
	div.insertBefore(button, div.children[1]);
	terms.insertBefore(div, terms.children[0]);

	imgClose.onclick = function() {
		div.className += ' imgFullClose';
		setTimeout(function view() {
			terms.removeChild(terms.children[0]);
		}, 400);
	}
}
