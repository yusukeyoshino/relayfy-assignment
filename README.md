# Relayfy Assignment 1

## How to start

Clone this repository and run the local server using VSCode live server extension.

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

# Relayfy Assignment 2

## UX improvement

- The pop up modal to choose "Dine-in, Take-out and Pre-order" might need to be shown when the app opens.
- When reloading the browser, all selected meals gets refreshed as well. It might be stored in local storage.
- When user tap Stripe element or "Pay in person", user might want to check what they select to make sure thier order is correct. So when user tap those buttons, The pop up modal for selected meals would be shown then they can go pay.
- When the app is opened on small display devices(iPhone5/6/7/8) and select some meals you can hardly see the menu. The selected meals might need to be stored in the other pop up modal or I think the bottom part(tip,Stripe element and "pay in person" button) can be smaller. For example, remove the tip part and show it when user click a pay button. Another example, the Stripe element and "pay in person" button can be in the one line.
