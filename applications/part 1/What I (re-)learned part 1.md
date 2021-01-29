### What I (re-)learned this week
React components must be capitalized (otherwise they will not render)
React components' parameters must be defined as either ```props``` or ```{ variables, surrounded, by, brackets }``` 
Do not define React components inside other react components (causes optimization problems)
Scope of ```var```  is function scope (or global if declared outside a function). For example:
``` 
for (var i = 0; i<10; i++) {
    console.log(i) // prints 1-9
}
console.log(i) // prints 10
``` 
Scope of ```let``` is block scope. For example:
```
for (var i = 0; i<10; i++) {
    console.log(i) // prints 1-9
}
console.log(i) // prints undefined
```
State variables are set like this using hooks:
```
cons [ x, setX ] = useState(0)
// x is the variable itself
// setX is the function which you call to change the value of x (calling this 
// function causes the React component to be re-rendered)
// useState sets up the variable and initializes it with the value 0 (however on 
subsequent rerenders variable x is not set up with 0 again but it's new value 
after re-rendering) (rerendering a React component causes it's code to be run 
again)
```
State variables must be treated as immutable, i.e. do not change them directly. For example:
```
array.push(10) // don't do this
array = array.concat(10) // do this instead
```

or
```
int++ // don't do this
int = int + 1 // do this instead
```
Immutablity is also useful for thread-safety.
DO NOT use function ```useState()``` inside if- and other conditional statements, loops and other functions besides the React component-defining function itself (e.g. not like this:)
```
const App = (props) => {
    const notGood = () => {
        const [x, setX] = useState(-1000) // DON'T DO THIS
    }
    ...
}
```