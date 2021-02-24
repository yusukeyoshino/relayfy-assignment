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


The site can be run in three ways:
1) Open site folder in VSCode or any other editor and a live server plugin.
2) Use the default nodejs server or explicitely running server.js. Will not work without node and dependencies installed.
3) Use the gulp command. -> Will not work without node and dependencies installed.

You can feel free to update the gulp file to watch changes to the file and update browser.
