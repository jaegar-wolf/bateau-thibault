export class All {
    products: [
        {
            id: number,
            name: string,
            category: number,
            price: number,
            unit: string,
            availability: boolean,
            sale: boolean,
            discount: number,
            comments: string,
            owner: string,
        }
    ];

    boats: [
        {
            id: number,
            name: string,
            color: string,
            img: string,
            availability: boolean,
            comments: string,
            owner: string
        }
    ];

    restaurants: [
        {
            id: number,
            name: string,
            img: string,
            open: boolean,
            comments: string,
            owner: string
        }
    ];

    recipes: [
        {
            id: number,
            name: string,
            img: string,
            comments: string
        }
    ];

    constructor(nameProduct: string) {
        this.products[0][1] = nameProduct;
        this.products[0][5] = false;
    }
}