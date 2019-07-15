export class Area {
    id: string;
    description: string;
    geometry: string;
    soil;

    constructor(description: string, geometry: string, tipoSoil: number = 1){
        this.description = description;
        this.geometry = geometry;
        this.soil = {
            id: tipoSoil
        };
    }
}