import React from 'react';
import ReactDOM from 'react-dom';

// components
import Chat from "./components/Chat";

const App = () => {
	return (
			<>
				<h1>Chat app</h1>
				<Chat />
			</>
	)
			
};

ReactDOM.render(<App />, document.getElementById('mf-react-chat'));