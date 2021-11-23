export class Recette {
    id: number;
    name: string;
    img: string;
    comments: string;

    constructor(name: string) {
        this.name = name;
    }
}