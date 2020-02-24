// typeof - могу использовать для задания четкого типа
/*
const person = {
    name: 'Max',
    age: 30
};

type Person = typeof person;

const me: Person = {
    name: 'Max',
    age: 30
};

const wife: Person = {
    name: 'Aliya',
    age: 31
};

const dog: typeof person = {
    name: 'fluffy',
    age: 5
};
*/

export const animal = {
    walk() {},
    smile: true
};

export type AnimalType = typeof animal;

const dog: AnimalType = {smile: true, walk() {}};
/***************************************/



// keyof
/*
const person = {
    name: 'Max',
    age: 30
};

type Person = typeof person; // создает что-то вроде интерфейса Person, те {name: string, age, number}
type PersonKeys = keyof Person; // создает "name" | "age", причем надо указать конкретно значения name или age
type PersonTypes = Person[PersonKeys]; // string | number - могу указать теперь эти типы, смотри пример ниже

const string1: PersonKeys = 'name';
const string: PersonTypes = 'name';
const number: PersonTypes = 123;
*/

// const me: Person = {
//     name: 'Max',
//     age: 30
// };
//
// const wife: Person = {
//     name: 'Aliya',
//     age: 31
// };
//
// const dog: typeof person = {
//     name: 'fluffy',
//     age: 5
// };

/***************************************/





// Как создать интерфейс из интерфейса, удалив ненужные проперти
interface IUser {
    _id: string;
    name: string;
    age: number;
    layout: string;
}

// в этом типе останется только name и age, указываем тип и какие поля исключить, получаю keyof набор
type UserKeysNoMeta1 = Exclude<keyof IUser, '_id' | 'layout'> // 'name' | 'email'
// тоже но через Omit, получаю интерфейс без ненужных свойств
type UserKeysNoMetaOmit = Omit<IUser, '_id' | 'layout'> // 'name' | 'email'
// тоже но через Pick, указываем тип и какие поля надо забрать
type UserKeysNoMeta2 = Pick<IUser, 'age' | 'name'> // 'name' | 'email'

const userProp: UserKeysNoMeta1 = "name";
// const userProp1: UserKeysNoMeta1 = "naфывme"; // error

const newUser: UserKeysNoMeta2 = {
    name: "Max",
    age: 32
};

const newUser1: UserKeysNoMetaOmit = {
    name: "Max",
    age: 32
};


// TODO http://www.typescriptlang.org/docs/handbook/utility-types.html#excludetu
