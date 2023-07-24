const acc_name = document.querySelectorAll('.mn_link');

function activeAcc () {
	const AccordeonCont = this.nextElementSibling;
	
	if(AccordeonCont.style.display === 'block') {
		AccordeonCont.style.display = 'none';
	} else {
		AccordeonCont.style.display = 'block';
	}
}

acc_name.forEach(items => {
	const AccContext = items.querySelector('.content');
	AccContext.addEventListener('click', activeAcc);
})