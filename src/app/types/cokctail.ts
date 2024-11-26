export interface User {
    lastLogin: null,
    userStatus: string,
    created: number,
    accountTyp: string,
    socialAccoun: string,
    ownerId: string,
    oAuthIdentities: null,
    name: null,
    ___class: string,
    blUserLocale: string,
    updated: number,
    objectId: string,
    email: string;

}

export interface Cocktail {
    created: number;
    img: string;
    ingredients: string;
    method: string;
    name: string;
    objectId: string;
    ownerId: User;
    strength: number;
    updated: number;
    ___class: string;
    likes: number;
}