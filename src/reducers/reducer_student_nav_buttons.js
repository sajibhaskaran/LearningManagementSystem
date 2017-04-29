const defaultObject = { type: "VOID", payload: "" };

const userNavigations = [
    [
        // Students
        { title: "Dashboard", navnumber: 100, icon: "fa fa-home", url: "/", onclick: defaultObject },
        { title: "Inbox", navnumber: 101, icon: "fa fa-inbox", url: "/Inbox", onclick: defaultObject },
        { title: "Progress", navnumber: 103, icon: "fa fa-tasks", url: "/Progress", onclick: defaultObject },
        { title: "Resources", navnumber: 104, icon: "fa fa-info-circle", url: "/Resources", onclick: defaultObject },
        { title: "Report", navnumber: 105, icon: "fa fa-file", url: "/DailyReport", onclick: defaultObject },
        { title: "Survey", navnumber: 106, icon: "fa fa-file-o", url: "/weeklySurvey", onclick: defaultObject },
		{ title: "Profile", navnumber: 107, icon: "fa fa-user", url: "/Profile", onclick: defaultObject }
    ],
	
    [
        // Instructors
        { title: "Dashboard", navnumber: 100, icon: "fa fa-home", url: "/", onclick: defaultObject },
        { title: "Inbox", navnumber: 101, icon: "fa fa-inbox", url: "/Inbox", onclick: defaultObject },
        { title: "Testing", navnumber: 103, icon: "fa fa-pencil-square", url: "/Testing", onclick: defaultObject }
    ],
    [
        // Admin
        { title: "Dashboard", navnumber: 100, icon: "fa fa-home", url: "/", onclick: defaultObject },
        { title: "Inbox", navnumber: 101, icon: "fa fa-inbox", url: "/Inbox", onclick: defaultObject },
        { title: "Designer", navnumber: 102, icon: "fa fa-book", url: "/CourseDesigner", onclick: defaultObject },
        { title: "Progress", navnumber: 103, icon: "fa fa-tasks", url: "/Progress", onclick: defaultObject },
        { title: "Resources", navnumber: 104, icon: "fa fa-info-circle", url: "/Resources", onclick: defaultObject },
        { title: "Report", navnumber: 105, icon: "fa fa-file", url: "/DailyReport", onclick: defaultObject },
        { title: "Survey", navnumber: 106, icon: "fa fa-file-o", url: "/weeklySurvey", onclick: defaultObject }
    ]
];

export default function (role) {
    switch(role) {
        case 'TechAcademyStudent':
            return userNavigations[0];
        case 'UniversityStudent':
            return userNavigations[0];
        case 'LocalInstructor':
            return userNavigations[1];
        case 'RemoteInstructor':
            return userNavigations[1];
        case 'Admin':
            return userNavigations[2];
            
    }

}



// Original Working code 4/20/17
//export default function () {
//    return [
//        { title: "Dashboard", navnumber: 100, icon: "fa fa-home", url: "/", onclick: defaultObject },
//        { title: "Inbox", navnumber: 101, icon: "fa fa-inbox", url: "/Inbox", onclick: defaultObject },
//        { title: "Progress", navnumber: 103, icon: "fa fa-tasks", url: "/Progress", onclick: defaultObject },
//        { title: "Resources", navnumber: 104, icon: "fa fa-info-circle", url: "/Resources", onclick: defaultObject },
//        { title: "Report", navnumber: 105, icon: "fa fa-file", url: "/DailyReport", onclick: defaultObject },
//        { title: "Survey", navnumber: 106, icon: "fa fa-file-o", url: "/weeklySurvey", onclick: defaultObject }
//    ];
//}

// { title: "Editor", navnumber: 105, icon: "fa fa-clone", url: ""}