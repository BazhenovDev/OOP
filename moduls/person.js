export class Person {
    // #birthday = {
    //     month: null,
    //     day: null,
    //     year: null,
    // };
    #birthday = null;
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.#birthday.month = month;
        // this.#birthday.day = day;
        // this.#birthday.year = year;
        this.#birthday = birthday;
    }

    get birthday() {
        // return `${this.#birthday.day}.${this.#birthday.month}.${this.#birthday.year}`
        // return `Дата рождения: ${this.#birthday}`
        return this.#birthday;
    }

    getFullName() {
        // return `${this.firstName} ${this.lastName}`
        console.log(`${this.firstName} ${this.lastName}`);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        let wordAge = 'лет';
        // if (this.#birthday.year) {
        if (this.#birthday) {
            // const userAge = currentYear - this.#birthday.year;
            const userAge = currentYear - this.#birthday.split('.')[2];
            if (userAge.toString().slice(-1) === '1') {
                wordAge = 'год';
            } else if (userAge.toString().slice(-1) === '2' || userAge.toString().slice(-1) === '3' || userAge.toString().slice(-1) === '4') {
                wordAge = 'года';
            }
            console.log(`${userAge} ${wordAge}`);
        } else {
            console.log(`Не можем получить возраст пользователя, так как год рождения не указан`);
        }
    }

}

// const persons = [
//     {
//         name: 'Иван',
//         lastName: 'Иванов',
//         birthday: '12.30.2001',
//     },
//     {
//         name: 'Евгений',
//         lastName: 'Бубнов',
//         birthday: '07.17.1998',
//     }
// ]
//
// persons.forEach(item => {
//     // const person = new Person(item.name, item.lastName, item.birthday.split('.')[0], item.birthday.split('.')[1], item.birthday.split('.')[2])
//     const person = new Person(item.name, item.lastName, item.birthday)
//     console.log(person)
//     person.getFullName();
//     person.birthday;
//     person.getAge();
// })

