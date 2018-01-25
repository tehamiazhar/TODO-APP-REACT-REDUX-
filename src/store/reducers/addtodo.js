import todoAction from '../actions/todoAction'

const INITIAL_STATE ={
        task: {value: '', isEdit: false},
        tasks: [],
}

let addTask = (e) => {
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            const tasks = this.state.tasks;
            tasks.push(this.state.task);
    
            this.setState({
                tasks: tasks,
                task: {value: '', isEdit: false},
            });
        }
    }

function addtodo(state = INITIAL_STATE, action) {
  switch (action.type) {
      case todoAction.ADDTODO:
      return Object.assign({}, state, { tasks : state.tasks + addTask });

        default:
         return state
  }
}

export default addtodo;