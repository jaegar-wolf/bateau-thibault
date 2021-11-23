export class Restaurant {
    name: string;
    description: string[];
    isOpen: boolean;

    constructor(name: string) {
        this.name = name;
        this.isOpen = false;
    }
}