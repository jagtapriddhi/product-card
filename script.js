const decrementBtn = document.querySelector('.decrement-btn');
const incrementBtn = document.querySelector('.increment-btn');
const quantityInput = document.getElementById('quantity');

decrementBtn.addEventListener('click', () => {
	let quantity = parseInt(quantityInput.value);
	if (quantity > 1) {
		quantity--;
		quantityInput.value = quantity;
	}
});

incrementBtn.addEventListener('click', () => {
	let quantity = parseInt(quantityInput.value);
	quantity++;
	quantityInput.value = quantity;
});