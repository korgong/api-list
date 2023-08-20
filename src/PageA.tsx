import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageA() {
    const navigate = useNavigate();

    const navigatePage = () => {
        navigate('/pageB');
    };
    return (
        <div>
            <div>Page A</div>
            <button onClick={navigatePage}>go to page B</button>
        </div>
    );
}

export default PageA;