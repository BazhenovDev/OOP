import {Person} from "./moduls/person.js";
import {Worker} from "./moduls/worker.js";

const persons = [
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        birthday: '12.30.2001',
        position: 'Дизайнер',
    },
    {
        firstName: 'Евгений',
        lastName: 'Бубнов',
        birthday: '07.17.1998',
        position: 'Разработчик'
    },
    {
        firstName: 'Александр',
        lastName: 'Сохов',
        birthday: '03.10.1994',
        position: 'Разработчик'
    },
    {
        firstName: 'Мария',
        lastName: 'Краснова',
        birthday: '03.03.2000',
        position: 'Дизайнер'
    },
    {
        firstName: 'Сергей',
        lastName: 'Морозов',
        birthday: '12.03.1994',
        position: 'Разработчик'
    },
    {
        firstName: 'Семён',
        lastName: 'Жезлов',
        birthday: '11.11.1996',
        position: 'Разработчик'
    },
    {
        firstName: 'Ольга',
        lastName: 'Семёнова',
        birthday: '06.10.1999',
        position: 'Разработчик'
    },
    {
        firstName: 'Ксения',
        lastName: 'Беляева',
        birthday: '04.11.2001',
        position: 'Разработчик'
    }
]


const usersArray = []

for (let i = 0; i < persons.length; i++) {
   let user = new Worker(persons[i].firstName, persons[i].lastName, persons[i].birthday, persons[i].position);
   usersArray.push(user)
}


usersArray[0].addDays(11);
usersArray[0].addDays(21);
usersArray[1].addDays(10);
usersArray[2].addDays(10);
usersArray[3].addDays(10);
usersArray[4].addDays(10);
usersArray[5].addDays(10);
usersArray[6].addDays(30);
usersArray[6].addDays(-18);
usersArray[7].addDays(10);

console.log(usersArray)

usersArray[0].userRate = 1400;
usersArray[4].userRate = 900;
usersArray[5].userRate = 1250;
usersArray[7].userRate = 1100;


usersArray.forEach(user => {
    console.log(`${user.getFullName()} ${Math.round(user.getSalary())} рублей`)
})



Worker.whoWorkedMore(usersArray)

Worker.whoIsYounger(usersArray)

