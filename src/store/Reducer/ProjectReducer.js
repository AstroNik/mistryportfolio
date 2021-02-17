const initState = {
    projects: []
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SUCCESS_GET_PROJECTS':
            console.log("Projects Retrieved");
            return {
                ...state,
                projects: action.projects
            }
        default:
            return state;
    }
}

export default ProjectReducer;
