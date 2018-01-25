import todoAction from '../actions/todoAction'

const INITIAL_STATE ={
        task: {value: '', isEdit: false},
        tasks: [],
}

  let toggleEdit = (index) => {
        const tasks = this.state.tasks;
        tasks[index].isEdit = !tasks[index].isEdit;
        
        this.setState({
            tasks: tasks,
        });
    }


function edittodo(state = INITIAL_STATE, action) {
  switch (action.type) {
      case todoAction.ADDTODO:
      return Object.assign({}, state, { tasks : state.tasks + toggleEdit });

        default:
         return state
  }
}

export default edittodo;