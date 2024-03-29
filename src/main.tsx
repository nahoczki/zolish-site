import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ProjectsProvider} from "./providers/ProjectsProvider";

ReactDOM.render(
  <React.StrictMode>
      <ProjectsProvider>
          <App/>
      </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
