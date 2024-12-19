
export interface Cocktail {
    created: string;
    img: string;
    ingredients: string;
    method: string;
    name: string;
    objectId: string;
    ownerId: string;
    strength: number;
    likes: { [key: string]: string };
}