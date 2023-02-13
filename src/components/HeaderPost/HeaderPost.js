import React from 'react';
import {useSelector} from "react-redux";

const HeaderPost = () => {
    const {selectedPost} = useSelector(state => state.posts);
    return (
        <div>
            {selectedPost&&selectedPost.title}
        </div>
    );
};

export {HeaderPost};