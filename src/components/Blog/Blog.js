import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Question And Answer About React</h1>
            <div>
                <h3>Q 01. How does react works?</h3>
                <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            </div>
            <div>
                <h3>Q 02. what is the difference between props and state?</h3>
                <p>props:
                    Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.

                    state:
                    The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

                    A Component manages its own state internally. Besides setting an initial state, it has no business fiddling with the state of its children. You might conceptualize state as private to that component.</p>
            </div>
            <div>
                <h3>Q 03. Where uses useeffect?</h3>
                <p>useEffect() is for side-effects. A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.</p>
            </div>
            
        </div>
    );
};

export default Blog;