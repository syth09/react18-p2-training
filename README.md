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
## What I've learned for today sessions
### Source code using as an example in this lessions: https://github.com/syth09/react18-p2-training
### Managing State:
- With React, you won’t modify the UI from code directly. For example, you won’t write commands like `disable the button`, `enable the button`, `show the success message`, etc. Instead, you will describe the UI you want to see for the different visual states of your component (`initial state`, `typing state`, `success state`), and then trigger the state changes in response to user input.
- Each components will have it own state

### Passing Props to a Component:
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
  - 
