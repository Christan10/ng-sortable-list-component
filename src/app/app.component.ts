import { Component } from '@angular/core';
import { Skill, dataset } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills: Skill[] = dataset;
  selectedSkills: Skill[] = Array(5).fill(null);
  dropdownCountArray = [1, 2, 3, 4, 5];
  title = 'ng-sortable-list-component';

  onSkillSelected(selectedSkill: Skill) {
    const emptyIndex = this.selectedSkills.findIndex((skill) => !skill);
    if (emptyIndex !== -1) {
      this.selectedSkills[emptyIndex] = selectedSkill;
      this.skills = this.skills.filter(skill => skill !== selectedSkill)
    }
  }

  onClearSkill(clearedSkill: Skill){
    if (clearedSkill) {
      const skillIndex = this.selectedSkills.findIndex((skill) => skill === clearedSkill);
      if (skillIndex !== -1) {
        this.selectedSkills[skillIndex] = null;
        this.skills.push(clearedSkill);
        this.skills.sort((a, b) => a.id - b.id);
      }
    }
  }

  shouldEnableInput(index: number): boolean {
    const emptyIndex = this.selectedSkills.findIndex(skill => !skill);
  return emptyIndex === -1 || emptyIndex === index;
  }
}
