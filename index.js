import {Person} from "./moduls/person.js";
import {Worker} from "./moduls/worker.js";

const persons = [
    {
        name: 'Иван',
        lastName: 'Иванов',
        birthday: '12.30.2001',
        position: 'Дизайнер',
    },
    {
        name: 'Евгений',
        lastName: 'Бубнов',
        birthday: '07.17.1998',
        position: 'Разработчик'
    },
    {
        name: 'Александр',
        lastName: 'Сохов',
        birthday: '03.10.1994',
        position: 'Разработчик'
    },
    {
        name: 'Мария',
        lastName: 'Краснова',
        birthday: '03.03.2000',
        position: 'Дизайнер'
    },
    {
        name: 'Сергей',
        lastName: 'Морозов',
        birthday: '12.03.1994',
        position: 'Разработчик'
    },
    {
        name: 'Семён',
        lastName: 'Жезлов',
        birthday: '11.11.1996',
        position: 'Разработчик'
    },
    {
        name: 'Ольга',
        lastName: 'Семёнова',
        birthday: '06.10.1999',
        position: 'Разработчик'
    },
    {
        name: 'Ксения',
        lastName: 'Беляева',
        birthday: '04.11.2001',
        position: 'Разработчик'
    }
]


// console.log(persons)
//
// persons.forEach(item => {
//     // const person = new Person(item.name, item.lastName, item.birthday.split('.')[0], item.birthday.split('.')[1], item.birthday.split('.')[2])
//     const person = new Worker(item.name, item.lastName, item.birthday, item.position);
//     // person.addDays(10);
//
//     // console.log(person)
//     // console.log(person.getSalary())
//     // person.getFullName();
//     // person.birthday;
//     // person.getAge();
//     // person.getSalary()
// })

//
// let u1 = new Worker('Иван','Иванов', '12.30.2001', 'Дизайнер')
// let u2 = new Worker('Евгений', 'Бубнов', '07.17.1998', 'Разработчик')

// console.log(u1)
// console.log(u2)
// Worker.whoIsYounger(u1, u2)

Worker.whoWorkedMore(persons)



