const initState = {
    projects: []
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Get_Projects':
            console.log("Projects Retrieved");
            return {
                ...state,
                projects: null
            }
        default:
            return state;
    }
}

export default ProjectReducer;