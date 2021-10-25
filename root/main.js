//Will reset size properties of last selected option to original state when another option is selected
function resetSize() {
	var tiny = document.getElementById('tSizeContainer')
	tiny.style.background = '#EAEAEA'
	tiny.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0);'
	var small = document.getElementById('sSizeContainer')
	small.style.background = '#EAEAEA'
	small.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0);'
	var medium = document.getElementById('mSizeContainer')
	medium.style.background = '#EAEAEA'
	medium.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0);'
	var large = document.getElementById('lSizeContainer')
	large.style.background = '#EAEAEA'
	large.style.boxShadow = 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0);'
}

//Applies selection properties to Tiny option
function selectTiny() {
	resetSize()
	var tiny = document.getElementById('tSizeContainer')
	tiny.style.background = '#C0C0C0'
	tiny.style.boxShadow = 'inset 0px 4px 5px -1px rgba(0, 0, 0, 0.2);'
}

//Applies selection properties to Small option
function selectSmall() {
	resetSize()
	var small = document.getElementById('sSizeContainer')
	small.style.background = '#C0C0C0'
	small.style.boxShadow = 'inset 0px 4px 5px -1px rgba(0, 0, 0, 0.2);'
}

//Applies selection properties to Medium option
function selectMedium() {
	resetSize()
	var medium = document.getElementById('mSizeContainer')
	medium.style.background = '#C0C0C0'
	medium.style.boxShadow = 'inset 0px 4px 5px -1px rgba(0, 0, 0, 0.2);'
}

//Applies selection properties to Large option
function selectLarge() {
	resetSize()
	var large = document.getElementById('lSizeContainer')
	large.style.background = '#C0C0C0'
	large.style.boxShadow = 'inset 0px 4px 5px -1px rgba(0, 0, 0, 0.2);'
}

//Applies selection properties to Strawberry option
function selectStrawberry() {
	var blackberry = document.getElementById('blackBerryCircle')
	blackberry.style.opacity = '35%'
	var crazyberry = document.getElementById('crazyBerryCircle')
	crazyberry.style.opacity = '35%'
	var fireorange = document.getElementById('fireOrangeCircle')
	fireorange.style.opacity = '35%'
	var strawberry = document.getElementById('strawberryCircle')
	strawberry.style.opacity = '100%'
	strawberry.style.boxShadow = 'inset 0px 4px 7px 2px rgba(0, 0, 0, 0.18)'
}

//Applies selection properties to Blackberry option
function selectBlackBerry() {
	var blackberry = document.getElementById('blackBerryCircle')
	blackberry.style.opacity = '100%'
	blackberry.style.boxShadow = 'inset 0px 4px 7px 2px rgba(0, 0, 0, 0.18)'
	var crazyberry = document.getElementById('crazyBerryCircle')
	crazyberry.style.opacity = '35%'
	var fireorange = document.getElementById('fireOrangeCircle')
	fireorange.style.opacity = '35%'
	var strawberry = document.getElementById('strawberryCircle')
	strawberry.style.opacity = '35%'
}

//Applies selection properties to Crazyberry option
function selectCrazyBerry() {
	var blackberry = document.getElementById('blackBerryCircle')
	blackberry.style.opacity = '35%'
	var crazyberry = document.getElementById('crazyBerryCircle')
	crazyberry.style.opacity = '100%'
	crazyberry.style.boxShadow = 'inset 0px 4px 7px 2px rgba(0, 0, 0, 0.18)'
	var fireorange = document.getElementById('fireOrangeCircle')
	fireorange.style.opacity = '35%'
	var strawberry = document.getElementById('strawberryCircle')
	strawberry.style.opacity = '35%'
}

//Applies selection properties to Fire Orange option
function selectFireOrange() {
	var blackberry = document.getElementById('blackBerryCircle')
	blackberry.style.opacity = '35%'
	var crazyberry = document.getElementById('crazyBerryCircle')
	crazyberry.style.opacity = '35%'
	var fireorange = document.getElementById('fireOrangeCircle')
	fireorange.style.opacity = '100%'
	fireorange.style.boxShadow = 'inset 0px 4px 7px 2px rgba(0, 0, 0, 0.18)'
	var strawberry = document.getElementById('strawberryCircle')
	strawberry.style.opacity = '35%'
}

//Updates cart count
function updateCart() {
	document.getElementById('cartCount').innerHTML = '1'
	var cartCount = document.getElementById('cartCount')
	cartCount.style.color = '#7472B6'

}