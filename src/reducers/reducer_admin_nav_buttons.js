import { fetchCourses } from '../actions/Course Designer/course_dashboard_action';

const defaultObject = { type: "VOID", payload: "" };

export default function () {
    return [
        { title: "Designer", navnumber: 102, icon: "fa fa-book", url: "/CourseDesigner", onclick: fetchCourses() }
    ];
}

// { title: "Editor", navnumber: 105, icon: "fa fa-clone", url: ""}