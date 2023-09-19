### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
	The purpose of React Router is to provide navigation and routing capabilities to React applications, allowing users to navigate between different 	views or pages while maintaining a single-page application feel. 	

- What is a single page application?
	A single-page application is a web application that loads a single HTML page and dynamically updates its content without requiring a full page 	reload.

- What are some differences between client side and server side routing?
	Client-side routing handles navigation within the browser, while server-side routing involves the server generating and serving different HTML pages 	for each route.

- What are two ways of handling redirects with React Router? When would you use each?
	1.Using the <Redirect> component to programmatically redirect users based on conditions or user actions.
	2.Using the history object to push a new route onto the history stack. Use <Redirect> for declarative redirects and history.push for imperative 		redirects.

- What are two different ways to handle page-not-found user experiences using React Router? 
	1.Define a "404" route that matches any unknown routes and displays a custom "Page Not Found" component.
	2.Use the <Switch> component to wrap route definitions, ensuring that only the first matching route is rendered. Place a "404" route at the end to 	catch unmatched routes

- How do you grab URL parameters from within a component using React Router?
	To grab URL parameters from within a component using React Router, you can access the match object's params property, which contains the parsed 	parameters for the current route.

- What is context in React? When would you use it?
	Context in React is a mechanism for sharing state or data between components without the need to pass props explicitly through the component tree.

- Describe some differences between class-based components and function
  components in React.
	- Class-based components use the class keyword for component declaration, while function components are declared as plain JavaScript functions.
	- Function components can use React Hooks to manage state and side effects, whereas class-based components use lifecycle methods.

- What are some of the problems that hooks were designed to solve?
	- Reusing stateful logic between components.
	- Eliminating the need for class-based components for state management.
	- Managing side effects and component lifecycle in function components.
	