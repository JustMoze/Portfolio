import React, {useState} from 'react'
import { projectsData } from '../../utils/data'
import Modal from '../Modal'
import ProjectCard from '../ProjectCard'

import './styles.css'

export default function Projects() {
    const [openModal, setOpenModal] = useState(true)
    const [activeProject, setActiveProject] = useState('')
    return (
        <div className="projectsContainer" id="projects">
            <div className="mainProjectsContainer">
                <h1>FEATURED PROJECT</h1>
                <div
                    style={{
                        height: 2,
                        width: '100%',
                        marginBottom: 50,
                        backgroundColor: '#dddddd',
                    }}
                />
            </div>
            {openModal && activeProject !== '' && <Modal open={openModal} name={activeProject} handleClose={() => {
                setOpenModal(false)
                setActiveProject('')
            }}/>}
            <div style={{ marginTop: 50 }}>
                {projectsData.map((element, index) => {
                    return (
                        <div key={element.name}>
                            <ProjectCard
                                index={index}
                                key={element}
                                data={element}
                                onClick={(name) => {
                                    setActiveProject(name.toLowerCase());
                                    setOpenModal(true)
                                }}
                            />
                            {index !== projectsData.length - 1 && (
                                <div
                                    style={{
                                        height: 2,
                                        width: '100%',
                                        marginBottom: 50,
                                        backgroundColor: '#dddddd',
                                    }}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
