export class Bateau {
 
    id: number;
    name: string;
    color: string;
    img: string;
    availability: boolean;
    comments: string;
    owner: string;
    

    constructor(name: string){
        this.name = name;
        this.availability = false;
    }
}