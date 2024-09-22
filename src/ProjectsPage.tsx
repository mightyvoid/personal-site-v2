import React from 'react'
import CardWithImg from './components/CardWithImg';
import './css/projectsPage.css'
import SocialMediaIcons from './SocialMediaIcons';


function ProjectsPage() {
  const listOfProjects = [{
    imgSrc: "https://private-user-images.githubusercontent.com/100024285/369550126-211e8ccf-8670-4b36-89fe-337c6ce48934.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5OTk4MzksIm5iZiI6MTcyNjk5OTUzOSwicGF0aCI6Ii8xMDAwMjQyODUvMzY5NTUwMTI2LTIxMWU4Y2NmLTg2NzAtNGIzNi04OWZlLTMzN2M2Y2U0ODkzNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyMlQxMDA1MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNmY1NzRkOGRmZTFlNTA3YjE4ZDIzZDdkOGJmODgzMTc3OGM5YTkyMmEwMjkyNWYxN2U1NjM5NTUwMzgwNGIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.t7JKFiUfItBVnvkzzL2qALvSC3KN4SDKYCqFIOlCgBM",
    description: "This is just page from my personal site that I created for fun to visualise and get the basic stats from my amazon data.",
    link: "https://github.com/mightyvoid/amazon-spending"
  },
  {
    imgSrc: "https://private-user-images.githubusercontent.com/100024285/369436058-992689ff-d97e-49fa-a13c-337b519ae766.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjcwMDAwMzksIm5iZiI6MTcyNjk5OTczOSwicGF0aCI6Ii8xMDAwMjQyODUvMzY5NDM2MDU4LTk5MjY4OWZmLWQ5N2UtNDlmYS1hMTNjLTMzN2I1MTlhZTc2Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyMlQxMDA4NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZTAyNzA2YWNkZjNmMjE5ZDMzZjhlN2JiMTUwOTg5M2ZhYWQ0M2FmNTljZDdlYzc2ZjMyOTc3OWU1NTQ0ZDQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.xCs3N7K09F0w9dxk2UmLzni4S-yVRHTcNZZCCOVhaZU",
    description: "list-the-thing is a simple chrome extension that will list all the content of the selected element tag",
    link: "https://github.com/mightyvoid/list-the-thing"
  },
  {
    imgSrc: "https://private-user-images.githubusercontent.com/100024285/369679950-4278450d-feba-4118-9e52-3b398f7de142.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjcwMDAzNTIsIm5iZiI6MTcyNzAwMDA1MiwicGF0aCI6Ii8xMDAwMjQyODUvMzY5Njc5OTUwLTQyNzg0NTBkLWZlYmEtNDExOC05ZTUyLTNiMzk4ZjdkZTE0Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyMlQxMDE0MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MzIwM2VkN2QwZGE0MDJkNDI1ZmFiMzUyOTIyYWVhMTBlZTU5ZWFmNjhiYjlmMmY0MzA2YmQ1YmYwZThkZmJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RwNWr9dKGSkYs_xB58HV7thyVTGj-cSc30jNf7hSqLE",
    description: "This is my personal website created using react, vanilla css and some third party libraries, deployed using netilify`",
    link: "https://github.com/mightyvoid/personal-site-v2"
  },

  ]
  return (
    <div className='projects-page-main-container fullscreen' id='projects-page-main-container'>
      <div className='projects-note-div'>
        <p className='project-note-1'>I've been not documenting the projects I do in my leisure, correcting the mistake henceforth, checkout my humble projects and will be adding interesting ones in the future.</p>
      </div>
      <div className='projects-card-container'>

        {listOfProjects.map((project) => {
          return (
            <CardWithImg
              imgSrc={project.imgSrc}
              description={project.description}
              link={project.link}
            />
          )
        })}
      </div>
      <div>
    
        <SocialMediaIcons />
      </div>
    </div>
  )
}

export default ProjectsPage