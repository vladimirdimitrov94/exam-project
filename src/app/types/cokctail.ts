import { User } from "./user";

export interface Cocktail {
    created: number;
    img: string;
    ingredients: string;
    method: string;
    name: string;
    objectId: string;
    ownerId: User;
    strength: string;
    likes: number;
}