import todoAction from '../actions/todoAction'

const INITIAL_STATE ={
        task: {value: '', isEdit: false},
        tasks: [],
}

let dltTask = (index) => {
        const tasks = this.state.tasks;
        tasks.splice(index, 1);

        this.setState({
            tasks: tasks,
        });
    }

function deletetodo(state = INITIAL_STATE, action) {
  switch (action.type) {
      case todoAction.ADDTODO:
      return Object.assign({}, state, { tasks : state.tasks + dltTask });

        default:
         return state
  }
}
export default deletetodo;