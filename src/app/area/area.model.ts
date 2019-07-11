export class Area {
    id: string;
    description: string;
    geometry: string;
    soil;

    constructor(id: string, description: string, geometry: string, tipoSoil: number = 1, descriptionSoil: string){
        this.id = id;
        this.description = description;
        this.geometry = geometry;
        this.soil = {
            id: tipoSoil,
            description: descriptionSoil
        };
    }
}