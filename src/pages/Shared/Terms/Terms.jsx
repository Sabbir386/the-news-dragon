import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>our terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor laborum maiores quae inventore, necessitatibus ducimus.</p>
            <p>Go Back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;