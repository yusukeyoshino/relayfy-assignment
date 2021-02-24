
# Relayfy Assignment

## How to start
Clone this repository and run the command.

    npm install 
   Then run the local server using VSCode live server extension.


## Dependencies
- gulp
- gulp-sass

## Notes
It seems the main.js on line 105 

    if (orderLineItem.count == 0) disableNonApplePayButton(true);
This checks if ANY of the selected item's count is zero, then disables "place order" button. 
So instead of that, I replace the codes to check if all of the selected items count is zero, then disable the "place order" button

``` 
function checkOrderLineItemsIsEmpty() {
	for (const [key, value] of Object.entries(orderLineItems)) {
		if (value.count !== 0) {
		return  false;
		}
	}
	return  true;
}
```

