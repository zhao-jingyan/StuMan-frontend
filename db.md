# 数据库设计

```text
.
├── students
│   ├── class1
│   │   ├── student 1
│   │   └── student 2
│   ├── class2
│   │   ├── student 3
│   │   └── student 4
│   └── noclass
│       ├── student 5
│       └── student 6
└── teachers
    ├── teacher 1
    └── teacher 2
```

教师用户统一管理，包含以下字段:
```json
{
    //teacher
    id : string / number,
    password : string,
    name : string,
    classes : ?
}
```

由于classes是一个可变的数组（可append），我不知道最佳的维护方式是什么，或者我们维护一个classes表

```json
{
    //classes
    id : number, // class 1,2,...
    count : number, // how many students
    teacher : string // teacher id (who is in charge)
}
```
最后是学生模型

```json
{
    //student
    id : number / string,
    name : string,
    password : string,
    nickname : string,
    class : number,
}

```

需要维护的数据模型如上，所以我们或许需要维护一些表

- class table
- teacher table
- student table
