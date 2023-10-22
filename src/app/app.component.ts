import { Component } from '@angular/core';
import { Skill, dataset } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills: Skill[] = dataset;
  dropdownCountArray = [1, 2, 3, 4, 5];
  title = 'ng-sortable-list-component';

  onSkillSelected(selectedSkill: Skill) {
    this.skills = this.skills.filter(skill => skill !== selectedSkill)
  }

  onClearSkill(clearedSkill: Skill){
    if (clearedSkill) {
      const isSkillAvailable = this.skills.some(skill => skill.name === clearedSkill.name);
      if (!isSkillAvailable){
        this.skills.push(clearedSkill);
      }
    }
  }
}
