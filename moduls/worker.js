import {Person} from "./person.js";

export class Worker extends Person {

    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
    }

    get userRate() {
        console.log(`Ставка: ${this.#rate}`);
    }

    set userRate(rate) {
        if (rate < 1000) {
            console.log(`Ставка менее ${this.#rate} не может быть`);
            return this.#rate;
        }
        this.#rate = rate;
    }

    daysInMonth() {
        const currentMonth = new Date().getMonth() + 1;
        let daysInMonth = 28;
        switch (currentMonth) {
            // case 1 || 3 || 5 || 7 || 8 || 10 || 12:
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                daysInMonth = 31
                break;
            case 2:
                if (new Date().getFullYear() % 4 === 0) {
                    daysInMonth = 28
                }
                daysInMonth = 29
                break;
            // case 4 || 6 || 9 || 11:
            case 4:
            case 6:
            case 9:
            case 11:
                daysInMonth = 30
                break;
            default:
                console.log(`Error`);
        }
        return daysInMonth;
    }

    addDays(day) {
        const daysInMonth = this.daysInMonth();
        if (day < 0 || day > daysInMonth) {
            console.log(`Количество дней: ${day} не соответствует текущему месяцу, либо меньше 0`)
            return this.#days;
        }
        this.#days += day;
        if (this.#days > daysInMonth) {
            console.log(`Общее количество дней: ${this.#days} указано больше, чем в текущем месяце, устанавливаю количество дней равное количеству дней в месяце: ${daysInMonth}`);
            return this.#days = daysInMonth;
        }

    }

    getSalary() {
        const currentMonth = new Date().getMonth() + 1;
        if (+this.birthday.split('.')[0] === currentMonth) {
            return (this.#days * this.#rate) * 1.1;
        } else {
            return this.#days * this.#rate;
        }
    }

    static whoWorkedMore(item) {
        item.forEach(personItem => {
            let persons = new Worker(personItem.name, personItem.lastName, personItem.birthday, personItem.position);
            // persons.addDays()
            // persons.addDays(33)
            console.log(persons)
            console.log(persons.#days)
            console.log(persons.getFullName())
        });
        // console.log(`Больше всех отработал ${person.getFullName}. Количество рабочих дней - ${person.#days}`)
    }

    static whoIsYounger(person) {
        person.forEach(personItem => {
            let persons = new Worker(personItem.name, personItem.lastName, personItem.birthday, personItem.position);

        });
    }
}

// const test = new Worker()
// test.getSalary()
// console.log(test.getSalary())

