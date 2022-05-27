import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5' >
            <div className="p-5 bg-dark text-white mb-5">
                <div className="p-5">
                    <h2 className='text-info mb-5' >How will you improve the performance of a React Application?</h2>
                    <p>We may Keep component state local where necessary to improve the performance of a React Application.</p>
                    <p>We may memoize React components to prevent unnecessary re-renders.</p>
                    <p>We may use dynamic import for Code-splitting in React</p>
                    <p>Windowing or list virtualization in React helps to improve the performance of a React Application.</p>
                    <p>We may use lazy loading images in React to improve the performance.</p>
                </div>
            </div>
            <div className="p-5 bg-dark text-white mb-5">
                <div className="p-5">
                    <h2 className='text-info mb-5'>What are the different ways to manage a state in a React application?</h2>
                    <p>To manage state we may use useState from react.</p>
                    <p>We may use react context api.</p>
                    <p>We may use redux with react for state management.</p>
                </div>
            </div>
            <div className="p-5 bg-dark text-white mb-5">
                <div className="p-5">
                    <h2 className='text-info mb-5'>How does prototypical inheritance work?</h2>
                    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.</p>
                    <p>
                        The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                    </p>
                </div>
            </div>
            <div className="p-5 bg-dark text-white mb-5">
                <div className="p-5">
                    <h2 className='text-info mb-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>First I take the search text from the input field.</p>
                    <p>Then I check search text if it includes in product name.</p>
                    <p>Then return it.</p>
                    <p>And finally set into the state.</p>
                </div>
            </div>
            <div className="p-5 bg-dark text-white mb-5">
                <div className="p-5">
                    <h2 className='text-info mb-5'> What is a unit test? Why should write unit tests?</h2>
                    <p>Unit test is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.</p>
                    <p>
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;