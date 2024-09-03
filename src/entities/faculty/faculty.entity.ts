import {Column,Entity,ManyToOne, OneToMany} from 'typeorm'
import Base from '../base.entity'
import University from '../../entities/university/university.entity'
import Course from '../../entities/course/course.entity'
@Entity('faculty')
class Faculty extends Base{
    @Column()
    name:string

    @ManyToOne(()=>University,(university)=>university.faculty)
    university:Faculty

    @OneToMany(()=>Course,(course)=>course.faculty)
    course:Course
}
export default Faculty