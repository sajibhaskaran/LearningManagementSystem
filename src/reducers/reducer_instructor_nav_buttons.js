import { fetchCourses } from '../actions/Course Designer/course_dashboard_action';

const defaultObject = { type: "VOID", payload: "" };

export default function () {
    return [
        { title: "Dashboard", navnumber: 100, icon: "fa fa-home", url: "/", onclick: defaultObject },
        { title: "Inbox", navnumber: 101, icon: "fa fa-inbox", url: "/Inbox", onclick: defaultObject },
        { title: "Courses", navnumber: 102, icon: "fa fa-book", url: "", onclick: fetchCourses() },
    ];
}

// { title: "Editor", navnumber: 105, icon: "fa fa-clone", url: ""}