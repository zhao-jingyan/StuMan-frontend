import type { UserInfo, LoginInfo, ClassInfo } from "@/types"
import { mock } from "./mockData";

export const dataService = {
    fetchProfile,
    fetchStudents,
    fetchClasses
}

function fetchProfile(id : string) {
    console.log("using mockUserData");
    return mock.mockUserData;
}

function fetchStudents(classid : string) {
    console.log("using mockStudentsList");
    return mock.mockStudentList;
}

function fetchClasses(teacherid : string) {
    console.log("using mockClassList");
    return mock.mockClassList;
}

