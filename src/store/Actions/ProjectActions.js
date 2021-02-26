import axios from 'axios';

export const addProject = (project) => {
    return (dispatch) => {
        axios.post(process.env.REACT_APP_LINK + "/api/addProject", project,{
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((res) => {
                dispatch({type: 'SUCCESS_ADD_PROJECT', status: res.status})
            }).catch((err) => {
            dispatch({type: 'FAILED_ADD_PROJECT', err: err})
        })
    }
}

export const getProjects = () => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_LINK  +"/api/getProjects")
            .then(({data}) => {
                dispatch({type: 'SUCCESS_GET_PROJECTS', projects: data})
            }).catch((err) => {
            dispatch({type: 'FAILED_GET_PROJECTS', err: err})
        })
    }
}
