import React, { useState } from 'react';

const MessageForm: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const onClick = () => {
        setInputText(inputText.toUpperCase());
    };

    return (
        <div>
            <input type="text" data-testid="newMessageText" value={inputText} onChange={onInput} />
            <button type="submit" data-testid="messageTextButton" onClick={onClick}>Submit</button>
            <h2 data-testid="result">{inputText}</h2>
        </div>
    )
};
export default MessageForm;