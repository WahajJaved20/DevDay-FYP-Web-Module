import React from "react";

const HOC = (WrappedComponent) => {
    return(
        <div className="m-4">
            <WrappedComponent />
        </div>
    );
}

export default HOC;