import { mock } from "./mockData";

export const dataService = {
    fetchProfile,
    fetchStudents,
    fetchClasses
}

function fetchProfile(id) {
    console.log("using mockUserData");
    return mock.mockUserData;
}

function fetchStudents(classid) {
    console.log("using mockStudentsList");
    return mock.mockStudentList;
}

function fetchClasses(teacherid) {
    console.log("using mockClassList");
    return mock.mockClassList;
}

