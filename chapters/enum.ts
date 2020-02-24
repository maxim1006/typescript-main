// по умолчанию значения равны 0,1,2... и наоборот
enum EnumExample {
    Prop1,
    Prop2,
    Prop3,
}
console.log(EnumExample[0]); // Prop1
console.log(EnumExample.Prop1); // 0



export enum ToppingsActionTypes {
    Load = '[Products] Load Toppings',
    LoadSuccess = '[Products] Load Success Toppings',
    LoadFail = '[Products] Load Fail Toppings',
    VisualiseToppings = '[Products] Visualize toppings',
}

console.log(ToppingsActionTypes.Load); // Products] Load Toppings



export enum testEnum {
    testEnum = "testEnum",
    testEnum1 = "testEnum1",
    testEnum2 = "testEnum2",
}

export enum Test2Enum {
    test2Enum = "test2Enum"
}

export enum Test3Enum {
    test3Enum = "test3Enum",
    test3Enum1 = "test3Enum1",
}
