import axios from 'axios';

export const addProject = (project) => {
    return (dispatch) => {
        axios.post("http://localhost:8080/api/addProject", {
            project: project
        }, {
            header: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            dispatch({type: 'SUCCESS_ADD_PROJECT'})
        }).catch((err) => {
            dispatch({type: 'FAILED_ADD_PROJECT', err: err})
        })
    }
}

export const getProjects = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/api/getProjects")
            .then(({data}) => {
                dispatch({type: 'SUCCESS_GET_PROJECTS', projects: data})
            }).catch((err) => {
            dispatch({type: 'FAILED_GET_PROJECTS', err: err})
        })
    }
}
