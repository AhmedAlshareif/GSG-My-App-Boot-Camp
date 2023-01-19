import React, { useState } from 'react';

function Palette() {
    const [color, setColor] = useState("white");
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    const handleClick = (color) => {
        setColor(color);
    };

    return (
        <div>
            <div style={{ backgroundColor: color }}>
                <p>Current Color: {color}</p>
            </div>
            {colors.map((color, index) => (
                <button key={index} onClick={() => handleClick(color)} style={{ backgroundColor: color }}>
                    {color}
                </button>
            ))}
        </div>
    );
}

export default Palette;