import React, { useState } from 'react';
import './Greeting.css';

const Greeting = (props: GreetingProps) => {
    const [name, setName] = useState<string>(props.name);

    const changeName = () => {
        setName('Jim');
        console.log(`button was clicked by ${name}`);
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`button event: ${event.currentTarget.id} was clicked with text ${event.currentTarget.textContent}`)
    }

    return (
        <div>
            <p className='greeting-paragraph'>Hello {name}. You are {props.age} years old.</p>
            <button onClick={changeName}>Change my name</button>

            <button id='b1' onClick={handleButtonClick}>button 1</button>
            <button id='b2' onClick={handleButtonClick}>button 2</button>
            <button id='b3' onClick={handleButtonClick}>button 3</button>
        </div>
    );
};

type GreetingProps = {
    name: string,
    age: string
}

export default Greeting;