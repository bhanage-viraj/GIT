import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => (
  <div className="error" role="alert">
    {message}
  </div>
);

export default ErrorMessage;