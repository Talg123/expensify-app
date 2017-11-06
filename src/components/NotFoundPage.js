import React from 'react';
import { Link, Route } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Not Found! 404 <Link to="/">Go Home</Link>
    </div>
);
export default NotFoundPage;