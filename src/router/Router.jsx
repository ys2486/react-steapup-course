import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Top } from '../components/Pages/Top';
import { Users } from '../components/Pages/Users';
import { DefaultLayout } from '../components/templetes/DefaultLayout';
import { HeaderOnly } from '../components/templetes/HeaderOnly';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
