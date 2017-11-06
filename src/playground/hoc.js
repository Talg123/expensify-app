import React from 'react';
import ReactDOM from 'react-dom';

const info = (props) => (
    <div>
        <h1>Info</h1>
        <p>{props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) =>(
        <div>
            {props.isAuth === true ?<WrappedComponent {...props} /> : <p>You have to loggin to see the info</p>}
        </div>
    );
};
const AuthInfo = requireAuthentication(info);

ReactDOM.render(<AuthInfo isAuth={true} info="bla bla" />,document.getElementById('app'));