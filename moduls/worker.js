import {Person} from "./person.js";

export class Worker extends Person {

    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
    }

    get userRate() {
        return `Ставка: ${this.#rate}`;
    }

    set userRate(rate) {
        if (rate < 1000) {
            console.log(`Ставка менее 1000 не может быть`);
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

        if (day > daysInMonth) {
            console.log(`Количество дней: ${day} не соответствует текущему месяцу, либо меньше 0`)
            return this.#days;
        }
        this.#days += day;

        if (this.#days > daysInMonth) {
            console.log(`Общее количество дней: ${this.#days} указано больше, чем в текущем месяце, устанавливаю количество дней равное количеству дней в месяце: ${daysInMonth}`);
            return this.#days = daysInMonth;
        }

        if (this.#days < 0) {
            console.log('Количество отработанных дней не может быть отрицательным')
            return this.#days = 0
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
        let maxDays = 0;
        const maxDaysArray = [];

        // Тут делаю сортировку, чтобы сначала шли пользователи с большим количеством отработанных дней,
        // т.к. так будет проще будет их перебирать и добавлять максимальное количество дней в переменную maxDays
        let usersWorkingDays = item.sort((a, b) => {
            return b.#days - a.#days
        });

        // Тут прохожусь по массиву и пользователей с большим количеством отработанных дней добавляю в массив maxDaysArray
        usersWorkingDays.forEach(person => {
            if (person.#days >= maxDays) {
                maxDays = person.#days
                maxDaysArray.push(person)
            }
        });

        // Вывожу в консоль этих пользователей
        maxDaysArray.forEach(user => {
            console.log(`Больше всех отработал ${user.getFullName()}. Количество рабочих дней - ${user.#days}`)
        });
    }

    static whoIsYounger(item) {
        let maxAge = Infinity;
        const minAgesArray = [];

        // Тут делаю сортировку, чтобы сначала шли пользователи с меньшим возрастом,
        // т.к. так будет проще будет их перебирать и добавлять минимальный возраст в переменную maxAge
        let usersAge = item.sort((a, b) => {
            return parseInt(a.getAge()) - parseInt(b.getAge())
        });

        // Тут прохожусь по массиву и самых молодых пользователей добавляю в массив minAgesArray
        usersAge.forEach(person => {
            if (parseInt(person.getAge()) <= maxAge) {
                maxAge = parseInt(person.getAge())
                minAgesArray.push(person)
            }
        });

        // Вывожу в консоль этих пользователей
        minAgesArray.forEach(user => {
            console.log(`${user.getFullName()} ${user.getAge()}`)
        });
    }
}


