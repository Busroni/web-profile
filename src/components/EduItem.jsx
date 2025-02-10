import React from 'react';
import { skills } from '../utils/data';
import SkillList from './SkillList';
 
class EduItem extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     skills: skills(),
   }

 }

 render() {
    return (
        <div className=''>
            <SkillList skills={this.state.skills} />
        </div>
    )
 }
}

export default EduItem;