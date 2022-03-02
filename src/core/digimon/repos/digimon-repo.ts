import { JsonRepo } from "../../../utils/json-repo"
import { DigimonEntity } from "../entitys/digimon-entity";
import digimon from "../../../json/digimon-db.json";

export class DigimonRepo extends JsonRepo<DigimonEntity> {
    // protected rawJson: Record<string, unknown> = {}

    constructor() {
        super({
            tableName: 'digimon-jsop-repo',
            createFactory: (key, payload) => {
                const digimon = new DigimonEntity
                return []
            },
            rawJson: digimon
        })
        this.createFactory = () => {}
        this.rawJson = {}
        this.dataMapping = new Map()
    }

    static createFactory() => {}
}