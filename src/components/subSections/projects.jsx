import './projects.scss'
import { useState } from 'react'



function Project(props) {

    return (

        <div className="project">


            <div className='card-group'>


                <div className="small-card card" >

                </div>
                <div className="big-card card " style={
                    {
                        backgroundImage: `url(${props.images[0].url})`,
                    }
                } >


                </div>
                <div className="small-card card" >

                </div>

                <div className="big-card card " style={
                    {
                        backgroundImage: `url(${props.images[1].url})`,
                    }
                }>


                </div>
                <div className="small-card card" >

                </div>
                <div className="big-card card " style={
                    {
                        backgroundImage: `url(${props.images[2].url})`,
                    }
                }>


                </div>
                <div className="small-card card">


                </div>
                <div className="big-card card " style={
                    {
                        backgroundImage: `url(${props.images[3].url})`,
                    }
                }>


                </div>


            </div>

        </div>

    )

}



function Projects() {

    const [projects] = useState([
        {
            id: 1,
            title: 'Lab Master',
            description: 'A sharing app that allows users to share their study items with others, and also allows users to search for study items. It also allows users to create their own study items. ',
            github: 'https://github.com/AMstyles/lab_master',
            images: [
                {
                    id: 1,
                    url: '3.PNG'
                },
                {
                    id: 2,
                    url: '4.PNG'
                },
                {
                    id: 3,
                    url: '2.PNG'
                },
                {
                    id: 4,
                    url: '1.PNG'
                },
            ],
        }
        ,
        {
            id: 2,
            title: 'Do Better',
            github: 'https://github.com/AMstyles/habit_tracker',
            description: 'Habbit tracker app that allows users to track their daily habits. It also allows users to set goals and track their progress. It also allows users to set reminders for their habits and goals.',
            images: [
                {
                    id: 1,
                    url: '8.PNG'
                },
                {
                    id: 2,
                    url: '7.PNG'
                },
                {
                    id: 3,
                    url: '6.PNG'
                },
                {
                    id: 3,
                    url: '5.PNG'
                },
            ],
        },
        {
            id: 3,
            title: 'Mobile Car Wash',
            github: 'https://github.com/AMstyles/we_wash',
            description: 'Car wash app that allows users to book a car wash, and track their car wash history as well as their car wash points.',
            images: [
                {
                    id: 1,
                    url: '9.PNG'
                },
                {
                    id: 2,
                    url: '10.PNG'
                },
                {
                    id: 3,
                    url: '11.PNG'
                },
                {
                    id: 4,
                    url: '12.PNG'
                },
            ],
        }
    ])





    return (

        <div className="projects">

            {projects.map((project) => (
                <>
                    <h1 style={
                        {
                            color: 'white',
                            textAlign: 'center',
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            margin: '2rem 0'
                        }
                    }>{project.title} </h1>
                    <p style={
                        {
                            color: 'white',
                        }
                    }>

                        {project.description}
                        To get source code on my github, click{' '}

                        <a href={project.github} style={
                            {
                                color: 'blue',
                                textDecoration: 'underline',
                                cursor: 'pointer'

                            }
                        }>  here</a>
                    </p>
                    <Project key={project.id} title={project.title} description={project.description} images={project.images} />
                </>

            ))}

        </div>
    )
}

export default Projects
