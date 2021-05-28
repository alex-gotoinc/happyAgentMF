import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

// components
const Chat = lazy(() => import('mfReactChat/Chat'));

// lazy
import('./index.scss')

const App = () => {
	return (
		<div id="app-wrapper">
			<h1>Main App</h1>
			
			<div id="chat-container">
				<Suspense fallback={<div>Loading...</div>}>
					<Chat />
				</Suspense>
			</div>
			
		</div>
	)
}
ReactDOM.render(<App/>, document.getElementById('mf-react'));