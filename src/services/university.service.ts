import University from "../entities/university/university.entity";
import { AppDataSource } from "../config/database.config";
import { UniversityDTO } from "../dto/university.dto";
class UniversityService{
    constructor(
        private readonly  universityRepo = AppDataSource.getRepository(University),

    ){}
    async createUniversity(data:UniversityDTO){
        try{
            const code=data.code
            const exists= await this.universityRepo.findOne({where:{code:data.code}})
            console.log("🚀 ~ UniversityService ~ createUniversity ~ exists:", exists)
            if(exists) throw new Error('University Already exists')
            const save=this.universityRepo.create({
                name:data.name,
                code:data.code
            })
            await this.universityRepo.save(save)
            console.log("🚀 ~ UniversityService ~ createUniversity ~ save:", save)
            return save
        }catch(error:any){
            throw new Error(error.message)
        }
      
    }

}
export default new UniversityService()