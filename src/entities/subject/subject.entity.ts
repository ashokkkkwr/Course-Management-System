import {Column,Entity, ManyToOne}from 'typeorm'
import Course from '../../entities/course/course.entity'
import Base from '../base.entity'
@Entity('subject')
class Subject extends Base{
    @Column()
    name:string

    @Column()
    subject_code:string

    @Column()
    year:string

    @Column()
    semister:string
    
    @ManyToOne(()=>Course,(course)=>course.subject)
    course:Subject
    
}
export default Subject