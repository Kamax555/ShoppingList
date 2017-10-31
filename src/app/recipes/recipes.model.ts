export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public img: string;

    constructor(_id: number, name: string, description: string, img: string) {
        this.id = _id;
        this.name = name;
        this.description = description;
        this.img = img;
    }
}
