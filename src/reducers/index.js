// components
import NavigationRole from './navigation_bar_role_reducer';
import SelectNavButton from './reducer_select_nav_button';
//import StudentNavButtonsReducer from './reducer_student_nav_buttons';
import DailyReport from './dailyreport_reducer';
import WeeklySurvey from './weeklysurvey_reducer';
// profile
import Profile from './profile_reducer';
import GetProfile from './get_profile';
import ProfileAccess from './profile_info_reducer'
import ImageAccess from './get_user_image';
import UserInfo from './user_info_reducer';


// courses
import StudentCourseView from "./student_course_view_reducer";

// Inbox
import InboxUserList from "./Inbox/user_chat_list_reducer";
import SelectedUserChat from "./Inbox/select_user_chat_reducer";
import ChatMessages from "./Inbox/user_chat_session_reducer";
import SelectedUserChatInfo from "./Inbox/select_user_chat_info_reducer";

// course Creation
import CourseDashboard from './Course Designer/course_dashboard_reducer';
import CoursePages from './Course Designer/course_dashboard_course_edit_reducer';
import CourseCreate from './Course Designer/axios_post_reducer';
import CoursePageEditView from './Course Designer/course_fetch_pages_reducer';
import SelectedCourse from './Course Designer/course_dashboard_selected_course_reducer';
import SelectedPage from './Course Designer/course_dashboard_selected_page_reducer';
import PageFields from './Course Designer/course_dashboard_fetch_fields_reducer';
import PageFieldPost from "./Course Designer/page_field_reducer";
import SelectedField from "./Course Designer/page_field_selected_field_reducer";

// Student Course Display Reducers
import StudentCoursesList from './Student Courses/student_courses_list_reducer';
import StudentSelectedCourseId from './Student Courses/student_selected_course_id_reducer';

// Loader 
import Loaded from './Loader/loader_lifecycle_reducer';

// Inbox
import MessageList from "./reducer_mock_messages";
import SelectMessage from "./reducer_message_selected";

// Reports
import CourseDrill from "./Results/course_drill_reducer";
import ResultsInstructorView from "./Results/results_instructor_view_reducer";

// Student Search
import StudentSearch from "./Student Search/student_search_reducer";

// Progress Bars
import Progress from "./Progress/progress_reducer";

// redux and redux form
import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({

    dailyReport: DailyReport,
    weeklySurvey: WeeklySurvey,
    //navBarButtons: StudentNavButtonsReducer,
    selectNavButton: SelectNavButton,
    navigationRole: NavigationRole,

	// profile
    Profile: Profile,
    getProfile: GetProfile,
    userData: ProfileAccess,
    UserInfo: UserInfo,
	ImageAccess: ImageAccess,

    // Inbox
    InboxUserList: InboxUserList,
    SelectedUserChat: SelectedUserChat,
    ChatMessages: ChatMessages,
    SelectedUserChatInfo: SelectedUserChatInfo,

	// Reports
	CourseDrill: CourseDrill,
	ResultsInstructorView: ResultsInstructorView, 

	// Student Search
    StudentSearch: StudentSearch,

    // Progress Bars
    Progress: Progress,

    // Loader
    Loaded: Loaded,

    // courses
    studentCourseView: StudentCourseView,

    // Course creation reducers
    CourseDashboard: CourseDashboard,
    CoursePages: CoursePages,
    CourseCreate: CourseCreate,
    CoursePageEditView: CoursePageEditView,
    SelectedPage: SelectedPage,
    PageFields: PageFields,
    SelectedCourse: SelectedCourse,
    PageFieldPost: PageFieldPost,
	SelectedField: SelectedField,
	MessageList: MessageList,
    SelectMessage: SelectMessage,

    // Student Course Display Reducers
    StudentCoursesList: StudentCoursesList,
    StudentSelectedCourseId: StudentSelectedCourseId

});

export default rootReducer;