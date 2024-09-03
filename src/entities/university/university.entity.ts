import {Column, Entity,OneToMany} from 'typeorm'
import Base from '../base.entity'
import Faculty from '../../entities/faculty/faculty.entity';
@Entity('university')
class University extends Base{
    @Column()
    name:string;

    @Column()
    code:string;

    @OneToMany(()=>Faculty,(faculty)=>faculty.university)
    faculty:Faculty
}
export default University