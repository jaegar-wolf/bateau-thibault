export class Produits {
    
    id: number;
    name: string;
    category: number;
    price: number;
    unit: string;
    availability: boolean;
    sale: boolean;
    discount: number;
    comments: string;
    owner: string;

    constructor(name: string) {
        this.name = name;
        this.availability = false;
        this.sale = false;
        
    }
}