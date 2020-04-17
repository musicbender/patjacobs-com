import React from 'react';

export default ({ error }) => {
    // const errMessage = error || 'Sorry, there was an unexpected error';
    // const hasIcon = withIcon !== undefined ? withIcon : true;

    return (
        <div>
            <p>{error}</p>
        </div>
    );
};
