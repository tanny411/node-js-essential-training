# MERN Stack Notes

## [React Crash Course](https://www.youtube.com/watch?v=sBws8MSXN7A&ab_channel=TraversyMedia)
- React provides much more interactive UIs, modular components, JSX includes HTML, CSS, JS for a components all together.
- Components have `state` and `render` life cycle method. Components can be class style or functional. In functional though, you can't simply stre state, you need hooks for that.
- To handle inter-component states we need state manager like `redux` ot use context API. We can have application-level states with these guys.
- `npm run build` will build your react app and turn it into all static assets to deploy in production.
- **Components**	
	- We create components and directly, or through other components add them to `App` components. 
	- We can send `props` to other components as we call them and acess in those respective components by `this.props.prop_name`
	- From components that use the props we can set PropType to define what props we want and also optionally set props as requires. Think of it like calling a function if you will.
    	```
    	Todos.propTypes = {
    	  todos: PropTypes.array.isRequired,
    	  markComplete: PropTypes.func.isRequired,
    	  delTodo: PropTypes.func.isRequired,
    	}
    	```
	- We return JSX in render function. JSX can have Js in `{ }` braces inside html. And css by `style={{ backgroundColor: 'gray' }}` or `style={styleAttr}` and set `const styleAttr = { backgroundColor: 'gray' }`.
	- For custom function inside component we dont have access to `this`. We can either bind this keyword to the function while calling by `this.funcCall.bind(this)` or simply use arrow functions.
	- with the return statement, we have to have everything wrapped in a single element like div. But if we don't want to create a real element in html we can use `<React.Fragment>`. It doesn't show in DOM.
- **Data Flow**
	- To use state of a parent or higher component, we need to send those down as props. BUT, we cannot alter them from the child components, so we declare functions in the cmponent that CAN change the state. And then send those functions down as props to be used in child components.
	- To pass parameters to these functions we have to `funcName.bind(this, params)` and on function signature will be as such `funcName = (id) => {//stuff}`. So `this` is a default param we have to send. Kind of like python `self`.
- **Router**
	- `npm install react-router-dom`
	- `import { BrowserRouter as Router, Route } from 'react-router-dom';`
	- We have to wrap everything in our return statement in `<Router>` for example in About component return.
	- In your App component or wherever you wanna place a link to the component page you just created (About page) instead of just <About/> you gotta do
    	```
    	<Route path='/about' render = {props => (
    		<React.Fragment > 
    			<About/>
    			<AboutDesc/>
    		</React.Fragment>
    	)} />
    	```
	- If you have just one component in that route you can do this. Also add `exact` in side the <Route> of the `/` link route.
    	```
    	<Route path='/about' component = {About}/>
    	```
	- To link to that page, in react using router, you can't simply put <a> tag, you need to use Link.
    	```
    	import { Link } from 'react-router-dom';
    	
    	<Link to='/about'>About Page</Link>
    	```
- **Http Requests**
	- We can use Fetch APi with regular Js. Or better yet, axios library.
	- `npm install axios`
	- We gotta use another lifecycle method `componentDidMount()` that runs right when the component is loaded.
    	```
    	import axios from 'axios';
    
    	componentDidMount() {
    		axios.get(url)
    			.then(res => //grab-data-here)
    	}
    
    	//in some other place
    	axios.post(url, send-object)
    		.then(res => //set-data-in-UI)
    	```
- **Deploy**
	- If you're not using any backend you can deploy anywhere, like github pages, or netlify etc. But first `npm run build`. It's gonna create a `build` folder with your assets.








