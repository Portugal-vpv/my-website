import React, { useState } from 'react';

const NewMessageForm: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        setInputText('');
    };

    return (
        <div>
            <input type="text" data-testid="messageText" value={inputText} onChange={handleInputChange} />
            <button data-testid="sendButton" type="submit" onClick={handleSubmit} >Send</button>
        </div>
    )
};
export default NewMessageForm;