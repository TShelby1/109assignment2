import "./todo.css";

const Todo = () => {
    return(
        <div className="todo">
            <h3>Shopping List</h3>

            <div className="form">
                <input type="text"></input>
                <button className="btn btn-sm btn-primary">Add</button>

            </div>

            <div className="list">
                
            </div>
        </div>
        
    );
};

export default Todo;


// need to add the function to grab stuff from the todo list