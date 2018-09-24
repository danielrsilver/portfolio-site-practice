import projects from '../data/projects.json';
import React, {Component} from 'react';
import Project from './Project'

export default class Projects extends Component{
  render(){
    return (
      <div id="portfolio">
        {projects.allProjects.map(function(param){
          return <Project title={param.title} imgName = {param.imgName} description = {param.description} />
          })
        }
     </div>
    )
  }
}
