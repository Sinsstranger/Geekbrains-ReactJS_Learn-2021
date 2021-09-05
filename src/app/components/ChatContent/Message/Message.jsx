export const Message = ({author, text}) => {
	return <div className="chat-message__item"><p className="chat-message__author">{author}</p><p className="chat-message__text">{text}</p></div>;
}