### What I (re-)learned this week
Do not give a list index as ```key``` in ```<li>``` and other elements when mapping, can cause unforeseen consequences if the order of the list is changed later (use an id or another unique identifier instead) https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318

```Array.prototype.reduce()``` Example:
```
const total = parts.reduce((accumulator, part) => accumulator + part.exercises, 0) // 0 is initial value
```
Remember to add ```event.preventDefault()``` first in ```POST```-functions used by forms. This prevents the default behaviour of forms (which include refreshing the page, note that refreshing =/= rerendering of React components)

Operator ```==``` does not always work logically in JS. Use ```===``` instead. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

Do not implement filtering as having a separate "current filtered" and "original" lists in state. Instead keep the filter string in the state and give a filtered copy of the original list as a parameter to the rendered component (see phonebook appliation for an example)

Remember to give parameter ```event``` to event handlers. e.g.
```
const handleFilterChange = (event) => {
	setFilter(event.target.value)
}
```
Save API-keys to environment variables, NOT directly to code

Do not generate ```Dates``` and other timestamps for objects to be saved into databases etc. in the client (due to timezone differences and manually changed internal clocks and such). Generate them serverside instead to keep them consistent

```<button>```uses ```onClick``` and ```<input>``` uses ```onChange```. Remember the difference!!!