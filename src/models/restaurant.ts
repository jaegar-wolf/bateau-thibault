export class Restaurant {
    id: number;
    name: string;
    img: string;
    open: boolean;
    comments: string;
    owner: string;

    constructor(name: string) {
        this.name = name;
        this.open = false;
    }
}