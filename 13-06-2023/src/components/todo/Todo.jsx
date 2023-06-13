import './index.css'

const Todo = ({data}) => {

    return (
      <div className="Todo">
        <p>{data.id}</p>
        <h3>{data.todo}</h3>
        <div className="Todo__actions">
          <button className="Todo__button--complete">Completa</button>
          <button className="Todo__button--delete">Elimina</button>
        </div>
      </div>
    );
  };
  
  export default Todo;