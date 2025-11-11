import type { UserInfo, LoginInfo, ClassInfo } from "@/types"

export const dataService = {
    fetchProfile,
    fetchStudents,
    fetchClasses
}

function fetchProfile(id : string) {
    console.log("using mockUserData");
    return mockUserData;
}

function fetchStudents(classid : string) {
    console.log("using mockStudentsList");
    return mockStudentList;
}

function fetchClasses(teacherid : string) {
    console.log("using mockClassList");
    return mockClassList;
}

const mockClassList: ClassInfo[] = [
    {
       id: "1",
       count: 23, 
    },
    {
        id: "2",
        count: 34,
    },
    {
        id: "3",
        count: 45,
    }
]

const mockStudentList: UserInfo[] = [
    {
        id: "1",
        name: "Test Name",
        nickname: "nick",
        role: "Student",
        password: "",
        class: "1",
    },
    {
        id: "2",
        name: "Test Name",
        nickname: "nick",
        role: "Student",
        password: "",
        class: "1",
    },
    {
        id: "3",
        name: "Test Name",
        nickname: "nick",
        role: "Student",
        password: "",
        class: "1",
    },
]

const mockUserData: UserInfo = {
    id: "1",
    name: "Test Name",
    nickname: "nick",
    role: "Student",
    password: "",
    class: "1",
}
