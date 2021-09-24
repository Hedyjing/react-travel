import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DetailPage, HomePage, RegisterPage, SignInPage } from './pages'



function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/signIn' component={SignInPage} />
          {/* Route中用冒号来引导参数, 参数名称必须和组件内使用的参数名一样 */}
          <Route path='/detail/:touristRouteId' component={DetailPage} />

          <Route render={() => <h1>404 not found 页面去火星了!</h1>} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
