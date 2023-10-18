"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employees_1 = require("./Classes/Employees");
const Students_1 = require("./Classes/Students");
const Users_1 = require("./Classes/Users");
const students = new Students_1.Students();
const employees = new Employees_1.Employees();
students.add({
    id: 12,
    firstname: 'София',
    surname: 'Назимова',
    age: 18,
    year: 1,
    specialty: 'Designer',
});
students.add({
    id: 13,
    firstname: 'Артур',
    surname: 'Шамров',
    age: 20,
    year: 3,
    specialty: 'Programmer',
});
students.add({
    id: 14,
    firstname: 'Евгения',
    surname: 'Юрченко',
    age: 30,
    year: 3,
    specialty: 'Designer',
});
students.add({
    id: 15,
    firstname: 'Дмитрий',
    surname: 'Кухлий',
    age: 17,
    year: 1,
    specialty: 'Programmer',
});
students.add({
    id: 16,
    firstname: 'Владислав',
    surname: 'Байбуз',
    age: 19,
    year: 2,
    specialty: 'Programmer',
});
employees.add({
    id: 12,
    firstname: 'Арсен',
    surname: 'Хачатурян',
    age: 35,
    post: 'Programmer',
});
employees.add({
    id: 13,
    firstname: 'Дмитрий',
    surname: 'Диденко',
    age: 40,
    post: 'Designer',
});
console.log('Студенты: ', students, '\n');
console.log('Студент id=13: ', students.get(13));
students.remove(13);
console.log('\nСтуденты: ', students, '\n');
students.sorted(Users_1.sortedList.decreasing);
console.log('Сортировка по убыванию, студенты: ', students, '\n');
students.sorted(Users_1.sortedList.increase);
console.log('Сортировка по возрастанию, студенты: ', students, '\n');
