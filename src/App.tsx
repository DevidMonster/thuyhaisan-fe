import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return <BrowserRouter>
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={route.element}>
            {route?.children && route.children.length > 0 ?
              route.children.map((routeChild, idx) => {
                return (
                  <Route key={idx} path={routeChild.path} element={routeChild.element}></Route>
                )
              })
              :
              <></>}
          </Route>
        );
      })}
    </Routes>
  </BrowserRouter>
}

export default App
