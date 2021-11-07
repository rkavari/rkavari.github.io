//will reset size properties to original state
function resetSize() {
	var tiny = document.getElementById('tSizeContainer')
	tiny.style.background = '#EAEAEA'
	tiny.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
	var small = document.getElementById('sSizeContainer')
	small.style.background = '#EAEAEA'
	small.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
	var medium = document.getElementById('mSizeContainer')
	medium.style.background = '#EAEAEA'
	medium.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
	var large = document.getElementById('lSizeContainer')
	large.style.background = '#EAEAEA'
	large.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
}

//will reset color properties to original state
function resetColor() {
	var blackberry = document.getElementById('blackBerryCircle')
	blackberry.style.opacity = '35%'
	blackberry.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
	var crazyberry = document.getElementById('crazyBerryCircle')
	crazyberry.style.opacity = '35%'
	crazyberry.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
	var fireorange = document.getElementById('fireOrangeCircle')
	fireorange.style.opacity = '35%'
	fireorange.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
	var strawberry = document.getElementById('strawberryCircle')
	strawberry.style.opacity = '35%'
	strawberry.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0)'
}

//defining variable for next function and later usage in local storage
selectedSize = undefined

//Stores value of selected size and updates styling of the element
function selectSize(size, sizeName) {
	resetSize()
	selectedSize = size
	var sizeElement = document.getElementById(sizeName)
	sizeElement.style.background = '#C0C0C0'
	sizeElement.style.boxshadow = 'inset 0px 4px 5px -1px rgba(0, 0, 0, 0.2)'
}

//defining variable for next function and later usage in local storage
selectedColor = undefined

//stores value of selected color and updates styling of the element
function selectColor(color, colorName) {
	resetColor()
	selectedColor = color
	var colorElement = document.getElementById(colorName)
	colorElement.style.opacity = '100%'
	colorElement.style.boxshadow = 'inset 0px 4px 7px 2px rgba(0, 0, 0, 0.18)'
}

//creating array to store added items 
let cartItems = []

//adds item to cart and updates count
function addToCart(product) {
    if(localStorage.getItem('itemStorage')){
        cartItems = JSON.parse(localStorage.getItem('itemStorage'))
    }
    var productid= product+selectedSize+selectedColor

    cartItems.push({productid: productid, name: product, color: selectedColor, size: selectedSize})

 	localStorage.setItem('itemStorage', JSON.stringify(cartItems))
	var currentCount = document.getElementById('cartCount')
	currentCount.innerHTML = cartItems.length
}

//checks local storage for number of items in cart and updates value if necessary
function showCount() {
	if(localStorage.getItem('itemStorage')){
        cartItems = JSON.parse(localStorage.getItem('itemStorage'))
    }
	var currentCount = document.getElementById('cartCount')
	currentCount.innerHTML = cartItems.length
}

//handles the display of added items in the cart
function showCountAndItems() {
	if(localStorage.getItem('itemStorage')){
        cartItems = JSON.parse(localStorage.getItem('itemStorage'))
    }
	var currentCount = document.getElementById('cartCount')
	currentCount.innerHTML = cartItems.length

	//loops through all items in cart and displays relevant info (product name, price, color, size, etc)
	for (var i = 0; i<cartItems.length; i++)
		{
			var divHtml = ''
			divHtml = divHtml + "<div>"
			divHtml = divHtml + "<img src='photos/catharness.jpg' id='chpCart' alt='Black labrador with a navy blue harness stands in the road in front of the legs of its owner.'>"
			divHtml = divHtml + "<p id='chnCart'>Cat Harness</p>"
			divHtml = divHtml + "<p id='chPriceCart'>$25</p>"
			divHtml = divHtml + "<p>"
			divHtml = divHtml + "<select name='size' id='sizeSelector'>"

			//checks if size value is a match and will accordingly select correct option from dropdown
			if(cartItems[i].size=='T')
				divHtml = divHtml + "<option value='T' selected='true'>Tiny</option>"
			else
				divHtml = divHtml + "<option value='T'>Tiny</option>"

			if(cartItems[i].size=='S')
				divHtml = divHtml + "<option value='S' selected='true'>Small</option>"
			else
				divHtml = divHtml + "<option value='S'>Small</option>"

			if(cartItems[i].size=='M')
				divHtml = divHtml + "<option value='M' selected='true'>Medium</option>"
			else
				divHtml = divHtml + "<option value='M'>Medium</option>"

			if(cartItems[i].size=='L')
				divHtml = divHtml + "<option value='L' selected='true'>Large</option>"
			else
				divHtml = divHtml + "<option value='L'>Large</option>"

			divHtml = divHtml + "</select>"

			divHtml = divHtml + "</p>"

			divHtml = divHtml + "<p>"
			divHtml = divHtml + "<select  name='color' id='colorSelector'>"

			//checks if color value is a match and will accordingly select correct option from dropdowns
			if(cartItems[i].color=='strawberry')
				divHtml = divHtml + "<option value='strawberry' selected='true'>Strawberry</option>"
			else
				divHtml = divHtml + "<option value='strawberry'>Strawberry</option>"

			if(cartItems[i].color=='blackberry')
				divHtml = divHtml + "<option value='blackberry' selected='true'>Blackberry</option>"
			else
				divHtml = divHtml + "<option value='blackberry'>Blackberry</option>"

			if(cartItems[i].color=='crazyberry')
				divHtml = divHtml + "<option value='crazyberry' selected='true'>Crazyberry</option>"
			else
				divHtml = divHtml + "<option value='crazyberry'>Crazyberry</option>"

			if(cartItems[i].color=='fireorange')
				divHtml = divHtml + "<option value='fireorange' selected='true'>Fire Orange</option>"
			else
				divHtml = divHtml + "<option value='fireorange'>Fire Orange</option>"

			divHtml = divHtml + "</select>"

			divHtml = divHtml + "</p>"

			//implements the remove button
			var productid=  cartItems[i].productid.trim()

			var divHtml2 = "<p id='removeButton'><button  id='"+  productid +"' onclick=removeItem()>Remove Item</button></p>"
	
			divHtml = divHtml + divHtml2

			divHtml = divHtml + "</div>"

			var cartDiv = document.getElementById('itemsContainer' + i)

			cartDiv.innerHTML = divHtml

		}

		//loops through cartItems array and handles if div is displayed or not
		for (var i = cartItems.length; i< 10; i++)
		{
			var cartDiv = document.getElementById('itemsContainer' + i)

			cartDiv.visible=false

			cartDiv.style.display = 'none';   
		}
}

//removes item from cart
function removeItem(e){
	var productid=''

	//gets the productid from the button id using the event
	//referenced this following stackoverflow post to assist with this section of code
		//https://stackoverflow.com/questions/10428562/how-to-get-javascript-event-source-element 
	e = e || window.event;
	var element = e.target || e.srcElement;
	productid =element.id;

	if(localStorage.getItem('itemStorage')){
        cartItems = JSON.parse(localStorage.getItem('itemStorage'))
    }
    
	//removes the item from the array
	cartItems = cartItems.filter(function(obj){
		return obj.productid!= productid	})

	//stores in the local storage
 	localStorage.setItem('itemStorage', JSON.stringify(cartItems))

	//updates the count
	var currentCount = document.getElementById('cartCount')
	currentCount.innerHTML = cartItems.length

	//refreshes the page
	showCountAndItems()
}