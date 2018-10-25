import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchTodos } from '../store/actions/actionCreators';

import TodoHome from '../components/TodoHome'
import EditTodo from '../containers/EditTodo'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path ='/' component={TodoHome} />
                        <Route path = '/edit/:id' component={EditTodo} />
                        <Redirect path = '*' to='/'/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos())
})

export default connect(null, mapDispatchToProps)(App)

// export default App;
