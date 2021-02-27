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

- When reloading the browser, all selected meals get refreshed.
- When a user taps the Stripe element or "Pay in person", the user might want to check what they select to make sure their order is correct. So when users tap those buttons, the pop up modal for selected meals would be shown then they can go pay.
- When the app is opened on small display devices(iPhone5/6/7/8) and select some meals you can hardly see the menu. The selected meals might need to be stored in the other pop up modal or I think the bottom part(tip,Stripe element and "pay in person" button) can be smaller. For example, remove the tip part and show it when the user clicks a pay button. Another example, the Stripe element and "pay in person" button can be in the one line.
- The selected meals list might need to be scrollable. I tried to touch arrows in the selected meals list in iPhone7 but it was really difficult.

I think the last two comments are more about UI improvement.
I made a demo to implement some of the comments above.
I only styled it for mobile devices so please check it in a small display size.

Deployed [here](https://friendly-neumann-a33561.netlify.app/)

[https://friendly-neumann-a33561.netlify.app/](https://friendly-neumann-a33561.netlify.app/)
