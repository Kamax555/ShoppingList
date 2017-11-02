export class NewRecipe {
    public _id: number;
    public name: string;
    public description: string;
    public img: string;

    constructor(_id: number, name: string, description: string, img: string) {
       this._id = _id;
       this.name = name;
        this.description = description;
        this.img = img;
    }
}
