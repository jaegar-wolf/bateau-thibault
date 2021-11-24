export class Restaurant {
    id: number;
    name: string;
    img: string;
    comments: string;
    owner: string;

    constructor(name: string) {
        this.name = name;
    }
}