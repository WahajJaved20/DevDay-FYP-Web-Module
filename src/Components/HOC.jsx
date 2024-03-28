import React from 'react';

const HOC = (WrappedComponent) => {
    return (props) => {
        return <div style={{ margin: '16px' }}><WrappedComponent {...props} /></div>;
    };
};

export default HOC;
