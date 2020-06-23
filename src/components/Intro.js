import React from 'react';
import {Button} from "react-bootstrap";

export const Intro = () => {
  return (
      <div className={'Intro'}>
          <div className="Intro__text">
              <h1>Coffee shop <span>We know all about the best coffee.</span></h1>
              <Button variant={'primary'}>Let's Coffee</Button>
              <small>*Check out the best coffee!</small>
          </div>
      </div>
  )
};