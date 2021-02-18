const initState = {
    projects: [
        {
            _id: "602d7d910918e1600452d2a8",
            banner: "https://nkwebapp.nyc3.digitaloceanspaces.com/mistry/2021-02-17/267521129.png",
            date: "2021-02-17T20:33:21.822Z",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            files: [
                "https://nkwebapp.nyc3.digitaloceanspaces.com/mistry/2021-02-17/513626483.png",
                "https://nkwebapp.nyc3.digitaloceanspaces.com/mistry/2021-02-17/991532140.png",
                "https://nkwebapp.nyc3.digitaloceanspaces.com/mistry/2021-02-17/397656596.png",
                "https://nkwebapp.nyc3.digitaloceanspaces.com/mistry/2021-02-17/106988366.png",
                "https://nkwebapp.nyc3.digitaloceanspaces.com/mistry/2021-02-17/826056331.png",
                "https://nkwebapp.nyc3.digitaloceanspaces.com/mistry/2021-02-17/284148620.png"
            ],
            layout: 1,
            projectId: 1058488271,
            tDFiles: "",
            title: "Test Project"
        }
    ]
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
