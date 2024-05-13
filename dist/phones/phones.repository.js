"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesRepository = void 0;
const typeorm_1 = require("typeorm");
const phones_entity_1 = require("./phones.entity");
const common_1 = require("@nestjs/common");
let PhonesRepository = class PhonesRepository extends typeorm_1.Repository {
    constructor(eManager) {
        super(phones_entity_1.Phones, eManager);
        this.eManager = eManager;
    }
    async verifyIfUserHasRights(user) {
        return this.createQueryBuilder("phones").where({ user });
    }
    async getQuery() {
        return this.createQueryBuilder("phones");
    }
    async getPhones(filterDto) {
        const userData = await this.getQuery();
        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            console.log('=== key ===', key);
            console.log('=== value ===', value);
            if (key)
                userData.andWhere(`phones.${key} = :value`, { value });
        });
        return await userData.getMany();
    }
};
exports.PhonesRepository = PhonesRepository;
exports.PhonesRepository = PhonesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], PhonesRepository);
//# sourceMappingURL=phones.repository.js.map