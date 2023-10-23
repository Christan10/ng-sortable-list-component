import { Component } from '@angular/core';
import { Skill, dataset } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills: Skill[] = dataset;
  maxDropdowns = 5;
  selectedSkills: Skill[] = [];
  title = 'ng-sortable-list-component';

  onSkillSelected(selectedSkill: Skill) {
    this.skills = this.skills.filter(skill => skill !== selectedSkill)
    if (this.selectedSkills.length < this.maxDropdowns) {
      this.selectedSkills.push(selectedSkill);
    }
  }

  onClearSkill(clearedSkill: Skill){
    if (clearedSkill) {
      const isSkillAvailable = this.skills.some(skill => skill.name === clearedSkill.name);
      if (!isSkillAvailable){
        this.skills.push(clearedSkill);
      }
      this.selectedSkills = this.selectedSkills.filter(skill => skill !== clearedSkill);
    }
  }
}
