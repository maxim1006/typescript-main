interface SizeModel {
    availableSizes: string[];
}

interface Size2Model {
    bestSize2?: string;
}

interface Size1Model extends Size2Model {
    bestSize: string;
}


// абстрактный класс нельзя создать через new, нужен только для наследования
abstract class Size implements SizeModel, Size1Model {
    public bestSize: string = '';

    get availableSizes(): string[] {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public abstract getMethod(): boolean;

    constructor(public sizes: string[]) {}
}

class Pizza extends Size {
    public readonly name: string = '';
    static readonly call: string = '';

    public getMethod = () => true;

    constructor(sizes: string[]) {
        super(sizes);
    }
}

console.log(new Pizza(['small', 'medium']));



// public private protected
class Animal {
    private color: string = "black";
    protected canWalk(): void {};
    public like: boolean = false;
}

class Dog extends Animal {
    // color = "red"; // error
    constructor() {
        super();

        this.canWalk();
    }

    like = true;
}

const dog = new Dog();
// dog.canWalk() // error as protected

