import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageB() {
    const navigate = useNavigate();

    const navigatePage = () => {
        navigate('/pageA');
    };
    return (
        <div>
            <div>Page B</div>
            <button onClick={navigatePage}>go to page A</button>
        </div>
    );
}

export default PageB;