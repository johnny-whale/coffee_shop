import React from 'react';
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Intro = () => {
  return (
      <div className={'Intro'}>
          <div className="Intro__text">
              <h1>Coffee shop <span>We know all about the best coffee.</span></h1>
              <NavLink to={'/catalog'} exact>
                  <Button variant={'primary'}>Let's Coffee</Button>
              </NavLink>
              <small>*Check out the best coffee!</small>
          </div>
      </div>
  )
};