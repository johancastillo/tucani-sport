import React from 'react';

const SingleCategory = ({params}) => {
    return (
        <div className="container page">
            <h1>Single Categorie {params.id}</h1>
        </div>
    );
}

export default SingleCategory;
