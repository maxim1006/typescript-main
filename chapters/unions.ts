interface Model1 {
    str: string;
}

interface Model2 {
    str1: string;
}

export type modulesUnion = Model1 | Model2;

const modelTest: modulesUnion = {str: "", str1: ""};




// Union example
interface BaseTest {
    n?: number;
}

interface BaseTestExtended extends BaseTest {
    str: string;
}

interface BaseTestExtended1 extends BaseTest {
    str1: string;
}

export type baseTestUnion = BaseTestExtended | BaseTestExtended1;

const baseTest: BaseTest = {n: 1};
const baseTestExtended: BaseTestExtended = {str: "", n: 1};
const baseTestUnion: baseTestUnion = {str1: ""};
const baseTestUnion1: baseTestUnion = {str: "", n: 1};
