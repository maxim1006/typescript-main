// interface BasePizza {
//     size: number;
// }
//
// interface Pizza extends BasePizza {
//     name: string;
//     getNumber(): number;
//     [key: string]: any;
// }
//
// function getPizza(): Pizza {
//     return {
//         name: 'New',
//         size: 10,
//         getNumber() {
//             return this.size;
//         }
//     };
// }




export interface IExample {
    readonly read: string;
    id: string;
}

// привидение типов (тут нет реации тайпскрипта на отсутствие переменных в объекте, но отреагирует на неправильные типы)
const a = {} as IExample;
const a1: IExample = {read: "1", id: ""};
const b = <IExample>{};
const b1: IExample = {read: "1", id: ""};



// пример интерфейса с методом
interface WithMethodModel<T> {
    method: () => T;
}

class A implements WithMethodModel<number> {
    method() {
        return 1;
    }
}
