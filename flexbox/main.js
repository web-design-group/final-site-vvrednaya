function stop(e){
	e.stopPropagation()
	e.preventDefault()
}

window.onload = function() {

	// оверлей авторизации
	const registraciya = $("#registraciya");
	const login = $("#login");
	registraciya.on('click', (event) => stop(event))
	login.on('click', (event) => stop(event))

	$("#openLogin").on("click", (event) => {
			stop(event);
			login.show()
			registraciya.hide()
	})

	$("#openReg").on("click", (event) => {
			stop(event);
			registraciya.show()
			login.hide()
	})

	const overlay = $("#overlay");

	const elementsIdToOpen = ['openoverlay']
	const elementsIdToClose = ['overlay', 'voiti', 'zareg']

	elementsIdToOpen.forEach(element => {
			$(`#${element}`).on('click', (event) => {
					stop(event);
					overlay.show()
			})
	})

	elementsIdToClose.forEach(element => {
			$(`#${element}`).on('click', (event) => {
					stop(event);
					overlay.hide()
			})
	})
}