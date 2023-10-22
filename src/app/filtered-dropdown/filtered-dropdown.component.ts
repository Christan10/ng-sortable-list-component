import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '../data';

@Component({
  selector: 'app-filtered-dropdown',
  templateUrl: './filtered-dropdown.component.html',
  styleUrls: ['./filtered-dropdown.component.css']
})
export class FilteredDropdownComponent {
  @Input() options: Skill[] = [];
  @Output() skillSelected = new EventEmitter<Skill>();
  @Output() clearSelectedOption = new EventEmitter<Skill>();
  
  selectedOption: Skill | null = null;
  filter: string = '';
  filteredOptions: Skill[] = [];
  isOptionSelected: boolean = false;
  inputEmpty: boolean = true;

  filterOptions() {
    this.filteredOptions = this.options.filter(option =>
      option.name.toLowerCase().includes(this.filter.toLowerCase())
    );
    this.isOptionSelected = false;
    this.inputEmpty = this.filter.trim() === '';
  }

  onSelectOption(option: Skill) {
    this.filter = option.name;
    this.selectedOption = option;
    this.filteredOptions = [];
    this.isOptionSelected = true;
    this.inputEmpty = false;
    this.skillSelected.emit(option);
  }

  onClearSelectedOption() {
    if (this.selectedOption) {
      this.filter = '';
      this.isOptionSelected = false;
      this.clearSelectedOption.emit(this.selectedOption); 
      this.selectedOption = null;
    }
  }
}
