// import Message from './message';
import './App.css';
import { useState, useEffect, useRef } from "react";

function App() {
	const [messageList, setMessageList] = useState([]
		);
	
		
	function pressingProcessing(event) {
		event.preventDefault();
		const target = event.target;
		const author = target.author.value;
		const text = target.text.value;
		setMessageList(prev => [...prev, {
			author: author,
			text: text
		}]);
	}
	useEffect(() => {
		const lastAuthor = messageList[messageList.length - 1];
		if (lastAuthor && lastAuthor.author) {
			setMessageList(prev => [...prev, {
				text: `Уважаемый(ая) ${lastAuthor.author}, Ваше сообщение отправлено` 
			}])
		}
	}, [messageList])


	return (
		<div className='Container'>
			<div>Список сообщений: {messageList.map((item) => {
				return (
					<div key={item.author}>{item.author}: {item.text}</div>
				)
			})}
			</div>
			<div>
				<form className='userForm' onSubmit={pressingProcessing}>
				<input placeholder='Имя автора' name='author'/>
				<input placeholder='Сообщение' name='text' />
				<button type="submit">Отправить сообщение</button>
				</form>
			</div>
		</div>
	);
}
export default App;
