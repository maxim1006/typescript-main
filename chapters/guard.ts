class A {
    test = "1";
    aProp = "a";
}

class B {
    test = "2";
    bProp = "b";
}

function a(arg: A | B) {
    if (arg instanceof A) {
        return arg.test + arg.aProp;
    }

    // тут проверяю через instanceof так как непонятно от какого класса отталкиваться
    // в случае такой проверки тайпскрипт будет корректно отрабатывать
    if (arg instanceof B) {
        return arg.test + arg.bProp;
    }
}
