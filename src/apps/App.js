import React, { Suspense, useRef, useState } from 'react';
import movePlayer from '../components/features/movePlayer';
import Menu from '../components/shared/Menu';
import { config, views } from './config';
import './App.css';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  const spline = useRef();

  let view = 0;
  let lastView = 0;
  const [viewState, setViewState] = useState(view);
  const [lastViewState, setLastViewState] = useState(lastView);
  const [menuState, setMenuState] = useState(false);

  function onLoad(splineApp) {
    spline.current = splineApp;
    setMenuState(true);
  }

  //click on the spline scene
  function onMouseDown(e) {}

  //hovering on the spline scene
  function onMouseHover(e) {}

  //click on a button
  function handleClick(e) {
    view = viewState;
    lastView = lastViewState;
    console.log(view);

    switch (e.name) {
      case 'right':
        view++;
        if (view > views.length - 1) {
          if (config.LOOP_VIEWS === true) {
            view = 0;
          } else {
            view = views.length - 1;
          }
        }
        setViewState(view);
        movePlayer(spline, views[view], lastView, 'easeOut', config);
        setLastViewState(view);
        break;
      case 'left':
        view--;
        if (view < 0) {
          if (config.LOOP_VIEWS === true) {
            view = views.length - 1;
          } else {
            view = 0;
          }
        }
        setViewState(view);
        movePlayer(spline, views[view], lastView, 'easeOut', config);
        // lastView = view;
        setLastViewState(view);
        break;
      case 'close-popup':
        break;
      default:
        break;
    }
  }

  return (
    <div className={'splineContainer'}>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          className="splineContainer"
          scene={config.SCENE}
          onLoad={onLoad}
          onMouseDown={onMouseDown}
          onMouseHover={onMouseHover}
        />
        <Menu handleClick={handleClick} menuState={menuState} />
      </Suspense>
    </div>
  );
}
