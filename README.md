# React day 1:
## What I've learned for today sessions:
### What is React:
- React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
- Components help us write reusable, modular, and better organized code.
### Creating a React app:
- Using the `node -v` command line onto the console in VS code to check the version of nodejs on the machine we're using.
- Type `npm create vit@latest` to create a vite project, then the console will ask us for the project name, a framework for it, and finally a variant.
- Then we hit enter to confirm all of our choices.
- After, we finished creating our vite project we'll have to installed all the third-party dependencies and run our web server.

### Project struture:
##### 1. The key folder:
- The node_modules folder: this is where all the third-party library like React and other tool are install(We never have to touch this).
- The public folder: this is where the public assets of our folder locate(ex: pictures, video files, etc.).
- The src folder: the source folder is where the source code of our application located.
##### 2. The key file:
- The index.html file:  A very basic html template, but in this template we have a div tag with the id of "root" which is the container for our applications, bellow that we have a script element referencing the main.tsx files and this is the entry point for our applications
- The package.json file: in this file we can find information about our project(name of the project, its version, bunch of script, list of dependencies that the project depend on).
- The tsconfig.json file(type script configuration files): Here we have a bunch of settings for telling the compiler how to compile our code to javascript(Only touch this file if you're an advanced user!).
- The viteconfig.ts(for the most part we don't really have to touched this file).

### Creating a React Components:
- To create a React components we simply clicked on the src folder and create a new file with the format like shown `ComponentsName.tsx`
- Name the function by the PascalCasing.

# React day 2
## What I've learned for today sessions:
### 1. How React works: 
- Currently, we have a component tree with the `App` being the root(top level components) and the `Message` being the child. When our application start React takes this component tree and build a Javascript data structure called the `Virtual DOM`.
- This `Virtual DOM` is actually different from the actual `DOM` in the browser. The `Virtual DOM` is a lightweight copy of the real DOM  that allows React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM.
- When the state or the data of a component in the component tree changes, React updated the co-responding node in the `Virtual DOM` to reflect the new state, then it compare the current version of `Virtual DOM` with its previous version to identify the node that should be updated. It'll then update the actual node in the `DOM`.
- React itself cannot update the `DOM`, instead it relies on a compile library called `React-DOM`.

### 2. React Ecosystem:
- React is a Javascript library for building user interfaces. In contrast to React we have other tools like Angular and Vue which are framework
  #### The different between a library and a framework:
  ##### 2.1 Library:
  - A tool that provides a specific functionality.
  - A library is like a tool.
  ##### 2.2 Framework:
  - A set of tools and guidelines for building applications
  - A framework is like a toolset.

  #### *React is just a library use for building user interfaces, so the only thing that it does and is good at is building dynamic, interactive user interfaces.
  - But we hardly use only React to build an modern applications, we often need additional tool for concern such as `Routing` to go from one place to another, making http calls with `HTTP`, managing the application state with `Managing State`, `Internationalization`, `Form Validation`, `Animations`, etc.

### 3. Creating a basic ListGroup components:
- Using bootstrap to build a function List Group.

### 4. Fragments:
- In React a components cannot return more than 1 elements. When we create a `h1` elements, React'll auto compile it into `React.createElement('h1')` and the same thing will happen when we try to return the second elements and it was not allowed in React.
- To solve this problem we can wrap our entire expression inside a `div` or another elements.
- Shortcut to wrap the code we use is by pressing the combination of keys `Ctrl + Shift + P` then we search for the Wrap with Abbreviation then we specify the type of element that we want to use to wrap the entire code.
- A better approach is to use `Fragment` by either importing it then wrap our code inside a `<Fragment></Fragment>`.
- Or we can use another way which is better and shorter by wrapping our code inside an empty angle bracket `<>`. And by using this we telling React to use a `Fragment` to wrap all the children, by doing so we don't ever needed to import `Fragment` again.

### 5. Rendering Lists:
- Our list that we've created prior to this section are basically useless since we have had hard code the list items in our markup.
- Now to render a list of items dynamically:
  + First, we'd had to declared an `Array` of items.
  + In JSX, we don't have a `for` loop so we cannot do a `for` loop in our code, instead we use a different approach by using the methods call `map` for mapping or convert each items to an items of different type in an `Array`.
  + We typed `items.map()` here we can pass a arrow function to take each items and convert it into an items of a different type. In this case we want to convert each items to an `li` element (`items.map((item) => <li>{item}</li>);`)
  #### *In JSX, we can use curly braces to render data dynamically.
  #### *When rendering each list map items we should give each item a unique key to help React keep track of our items so later when we add or remove items dynamically, React'll know what part of the pages should be updated.
  + In our case the project have each items as a unique `String` so we can use the item itself as a unique key.
  #### *Also, inside an JSX expression we can only use `html` elements or other React `components`. The only exception is the curly braces which let us render things dynamically.
### 6. Conditional Rendering:
- Sometime, we want to render different content base on certain condition we can all use the conditional expression of Javascript which include using operator like `?`, `&&`, `|`, etc.

# React day 3:
## What I've learned for today sessions:
### 1. Handling Events:
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
- For example the `onClick()` events:
  + For HTML:
    ```
    <button onclick="activateLasers()">
      Activate Lasers
    </button>
    ```
  + Same thing happens in React, but slightly different:
    ```
    <button onClick={activateLasers}>
      Activate Lasers
    </button>
    ```
- When the handling events get more complex, it's recommended that we move(create) the logic in a separate `function()`
- Example on `ListGroup()` components where we handle an `onClick()` events:
```
import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
```

# React day 4
# What I've learned for today sessions
### Source code using as an example in this lessions: https://github.com/syth09/react18-p2-training
### Managing State:
- With React, you won’t modify the UI from code directly. For example, you won’t write commands like `disable the button`, `enable the button`, `show the success message`, etc. Instead, you will describe the UI you want to see for the different visual states of your component (`initial state`, `typing state`, `success state`), and then trigger the state changes in response to user input.
- Each components will have it own state

### Passing Props to a Component:
- Props is a React feature that allows components to receive and pass data, similar to how you’d pass an argument to a function. 
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. 
- To make our components re-usable we use Props. Props or Properties are the input to our components.

  #### 1. Passing Data via Props:
  - Instead of hard coding components we need to pass an `object` that has two properties and to do that we use one of the TypeScript featured call `interface`.
  - Using `interface` to define the shape or the interfaces of an `object`.
  - We use PascalCasing to name the `interface`, and by convention we name the `interface` Props or some people might prefer to pre-fix it with the name of the components.
  - Inside the `interface` braces we to define various properties and their type, we use the Type Annonation to specify the type of various properties.
  - Next, we give the function a parameter `props` of type `InterfaceName` .
  - After that we'd also needed to pass the props to the components that we declared on our `app.tsx`.

  #### 2. Passing Functions via Props:
  - First, we need to create a properties inside our Props, so let’s create an `onSelectedItem` properties inside our Props.
  ```
  interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
  }
  ```
  - Next, we can pass our Props to the child components in its parent. Now we could write an inline function there just like how we handle a click event or we could write an separate event handler.
  ```
  import ListGroup from "./components/ListGroup";

  function App() {
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    return (
      <div>
        <ListGroup items={items} heading="Cities" onSelectItem={} />
      </div>
    );
  }

  export default App;
  ```
  - In the situation where we want to write an separate event handler here what we need to do:
    + First, we need to create a function in the parent component. Most of the time, we pass down functions to handle events in child components,so let’s create a simple `onSelectItem` event handler.
    ```
    const handleSelectedItem = (item: string) => { console.log(item); };
    ```
    + To pass a function via Props reference the name of the variable that stores the function
    ```
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} />
    ```
  - Now when we get back to our application an select something the console in response to it will print out the name of the selected item.
![image](https://gist.github.com/user-attachments/assets/0aafe50a-f29f-4109-904a-0b0a03faf0cd)

### State vs Props:
  #### 1. State:
  - Internal data managed by a components that can change overtime.
  - State is similar to local variables.
  - State is mutable (We want to tell React that this component has data that could changed overtime)
  #### 2. Props:
  - Props is a input or an argument passed to a components.
  - Props is similar to function args.
  - We should treat Props as immutable (unchangeable and it's read-only).

  #### *One thing they both have in common is that anytime they change React will re-render our component and update our `DOM` accordingly.

### Passing Children:
- Children is a prop, and can be passed in to components in different ways. Children can be an object or an array, etc. 
- Let’s say we have a Alert Component structure like this:
  ```
  interface AlertProps {
    children: string;
  }

  const Alert = ({ children }: AlertProps) => {
    return <div className="alert alert-primary">{children}</div>;
  };

  export default Alert;
  ```
  - Also, by using `ReactNode` class that is define in the React module you can pass  `HTML` elements to our `Alert.tsx` components.

### Inspecting Components with React Dev Tools:
- React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.

### Exercise 1:
- Building a Button Component: https://github.com/syth09/ButtonComponents
- `Button.tsx`:
```
interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```
- Implement it into the `App.tsx`:
```
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </>
  );
}

export default App;
```

### Exercise 2 - Showing an Alert:
- Building a Button Component that show an Alert after being clicked: https://github.com/syth09/ButtonComponents
- Creating the `Alert.tsx` component:

```
import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
```
- Set a useState to apply the `Alert` into `Button` and set it to occured once it was click:
```
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && <Alert>Red Alert</Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </>
  );
}

export default App;
```
- Create a new Props for closing the `Alert` when we clicked the close button:
```
interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
```
```
const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
```
- Final step is to apply the changes to the `App.tsx` components:
```
<>
  {alertVisible && (<Alert onClose={() => setAlertVisibility(false)}>Red Alert</Alert>)}
  <Button color="danger" onClick={() => setAlertVisibility(true)}>
    Red Alert
  </Button>
</>
```

# React day 5:
# What I've learned for today sessions:
### Styling Components:
  #### 1. Vanilla CSS:
  - Styling our components by using the Vanilla CSS methods, which is like styling any other `HTML`, `CSS` code we create a component and it CSS file accordingly and put them inside the same folder then we code them from scratch.
  - First, we create a new folder for our style and component. Then we move our newly create CSS file and our component into the same folder that we've created. next to reduce the redundant import in our `App.tsx` we simply create a `index.tsx` in our folder and use the `index.tsx` to reference the `ListGroup.tsx` components
  
    ![image](https://gist.github.com/user-attachments/assets/418742e1-97d3-49bc-a92f-9e8f2abd0528)
  - Example code for CSS:
  ```
  .list-group {
    list-style: none;
    padding: 0;
  }
  ```
  - `index.tsx` reference `ListGroup.tsx`
  ```
  import ListGroup from "./ListGroup";

  export default ListGroup;
  ```
  - Before the reference: ``` import ListGroup from "./components/ListGroup/ListGroup"; ```
  - After the reference: We can get rid of the file import and simply call the folder then React will automatically looks for the `index.tsx` file.
  ``` import ListGroup from "./components/ListGroup"; ```
  #### 2. CSS Modules:
  - But there is a major problem with Vanilla CSS, the problem is that if somewhere else we had another style sheets where we have a CSS class with the same name we'd going to run into clashes.
  - And this is what `CSS.Modules` try to solve. In CSS Modules, the CSS file in which all class name are scoped locally.
  - To do that, first we simply rename our Vanilla CSS file `cssName.css` to `cssName.module.css`
  - After that we can simply change our import statement from `import from "./ListGroup.css";` to this import statement `import styles from "./ListGroup.module.css";`
  - Then we can switch up our implementations in the className: `  ul className={styles["list-group"]} `
 
  #### 3. CSS-in-JS:
  - Another approach for styling our components call CSS-in-JS.
  - Benifit of CSS-in-JS:
    + Scoped styles so no name conflict.
    + All the CSS and JS/TS code in one place and in a single file.
    + Easier to delete a component.
    + Easier to style based on props/state.
  - Libraries that use this implementation:
    + Styled components.
    + Emotion.
    + Polished.
    + etc.
  - Example using Styled components:
  - First, we install the libraries using these command line `npm i styled-components`, `npm i types@styled-components`.
  - Now with styled-components install we no longer need  to use `className`, instead we create a React components that has all the styled that we want:
    ```
    const List = styled.ul`
      list-style: none;
      padding: 0;
    `;

    interface ListItemProps {
      active: boolean;
    }

    const ListItem = styled.li<ListItemProps>`
      padding: 5px 0;
      background: ${(props) => (props.active ? "blue" : null)};
    `;
    ```
    + Now instead of using the `HTML` element we use the newly created React components. Applying it into the `ul`:
    ```
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    ```
  #### 4. Separation of Concerns:
  - We should divide a program into distinct sections where each section handles a specific functionality, rather than having everything in one place.
  - This principal will make our apps:
    + More modular which help us build and test the module indepently and reuse them in other program.
    + Easier to understand 
    + Easier to maintain
    + Easier to modify
  #### 5. Inline Styles:
  - Inline styles is also a way to style our component, but inline style make our code hard to read and maintain (Not recommend).
  #### 6. Popular UI libraries:
  - Bootstrap: Easy to use component
  - Material UI: Open source that implement google design.
  - Tailwind CSS: Utilities for CSS libraries, instead of giving us a full-fledge component it gives us a really small  utilities class for us to use for styling our components. So with tailwind we basically don't have to write CSS anymore, instead we use the utilities classes.
  - Daisy UI: Similar to Bootstrap.
  - Chakra UI: Similar to Material UI which is build on Tailwind CSS.
  #### 7. Adding Icons:
  - Using `React Icons` libraries to add icons.
  - By using the command line `npm i react-icons@4.7.1` to install the library.
  - `React Icons` is a package of difference icon that come from difference libraries.
  - To use the icon we simply import the name of the icons and its libraries. After we use it like regular React Component.
  #### 8. Exercise - Using CSS Modules:
  ex: https://github.com/syth09/Styling-Button-Using-Module-CSS
  #### 9. Building a Like Component:
  ex: https://github.com/syth09/Building-a-Like-Button
### Understanding the State Hook:
- React updates state asynchronously meaning not immediately and the new update will be send in as an update pending queue where it will get update in the future: This was done for performance reason, because as part of handling an event we could set multiple state variable and it'd be a burden to re-run and re-render. So for performance reason React takes all of its update patches them and apply them in a later time. After an event handler finished execution and at that point React apply all the update as once and then it'll re-render our components with the updated state.
- State is actually stored outside of the components.
- We can only use hooks at the top level of our the components
=> In conclusion:
##### *Firstly, for performance reason React updates state in a asynchronous matter. To minimised unnecessary re-render it batched the update apply it all at once and then re-render the components.
##### *Secondly, when using the state hooks the state variable are created and stored outside of a components in memory. React keeps the state in the memory as long as the component is visible on the screen.
##### *Lastly, it's importance to know that we can only use the state hooks at the top level of our components.

### Choosing the State Structure:
- When you write a component that holds some state, you’ll have to make choices about how many state variables to use and what the shape of their data should be. While it’s possible to write correct programs even with a suboptimal state structure, there are a few principles that can guide you to make better choices:
  + Group related state variables inside an object: If you always update two or more state variables at the same time, consider merging them into a single state variable.
  + Avoid contradictions in state: When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
  + Avoid redundant state variables: If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
  + Avoid duplication in state: When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
  + Avoid deeply nested state structures: Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

### Keeping Components Pure:
- There is a fundamental concept in React call Purity.
- In computer science, a pure function is a function that given the same input its always return the same result, but if we got difference result at difference time we say that function is impure.
- React is design around this concept, it expect every component we created to be a pure function. And this is for performance reason, so if an input of a component haven't changed React can skip re-rendering that components.
