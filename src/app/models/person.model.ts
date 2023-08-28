export class Person {
    /* public fname: string;
    public lname: string;

    public constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    } */
    public constructor(public firstName: string, public lastName: string) {}

    public static createEmpty(): Person {
        return new Person("", "");
    }

    public toString(): string {
        return `Person: { firstName: "${this.firstName}", lastName: "${this.lastName}" }`;
    }
}