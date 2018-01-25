import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './containers/Todo';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
// import todoAction from './store/actions/todoAction'

ReactDOM.render(
<Provider store={store}>
<div>
<Todo />
</div>
</Provider>
,
 document.getElementById('root'));
registerServiceWorker();
