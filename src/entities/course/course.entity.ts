import {Column,Entity,ManyToOne, OneToMany} from 'typeorm'
import Base from '../base.entity'
import Faculty from '../../entities/faculty/faculty.entity'
import Subject  from '../subject/subject.entity'
@Entity('course')
class Course extends Base{
    @Column()
    name:string

    @ManyToOne(()=>Faculty,(faculty)=>faculty.course)
    faculty:Course


    @OneToMany(()=>Subject,(subject)=>subject.course)
    subject:Subject
}
export default Course