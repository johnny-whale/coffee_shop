import React from 'react';
import {Route, Switch} from "react-router-dom";
import AdminPanel from "../containers/admin/AdminPanel";
import {Intro} from "../Intro";
import Catalog from "../Catalog";
import SignIn from "../containers/user/SignIn";
import SignUp from "../containers/user/SignUp";
import AdminEnter from "../containers/admin/AdminEnter";
import ModeratorEnter from "../containers/moderator/ModeratorEnter";
import ModeratorPanel from "../containers/moderator/ModeratorPanel";

export const Router = () => {
  return (
      <Switch>
          {/*User Routes*/}
          <Route path={'/'} exact>
              <Intro />
          </Route>
          <Route path={'/catalog'}>
              <Catalog />
          </Route>
          <Route path={'/signIn'}>
              <SignIn />
          </Route>
          <Route path={'/signUp'}>
              <SignUp />
          </Route>
          {/*Admin Routes*/}
          <Route path={'/adminEnter'}>
              <AdminEnter />
          </Route>
          <Route path={'/adminPanel'}>
              <AdminPanel />
          </Route>
          {/*Moderator Enter*/}
          <Route path={'/moderEnter'}>
              <ModeratorEnter />
          </Route>
          <Route path={'/moderPanel'}>
              <ModeratorPanel />
          </Route>
      </Switch>
  )
};