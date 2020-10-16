import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-misc-dashboard',
  templateUrl: './misc-dashboard.component.html',
  styleUrls: ['./misc-dashboard.component.scss']
})
export class MiscDashboardComponent implements OnInit {

  experiences: Experience[];
  newExperience: Experience = new Experience();

  constructor(private experienceService: ExperienceService) { }

  formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.getAllExperiences()
  }

  saveExperience() {
    this.newExperience.title = this.formGroup.value.title;
    this.newExperience.company = this.formGroup.value.company;
    this.newExperience.duration = this.formGroup.value.duration;
    this.experienceService.postExperience(this.newExperience).subscribe( result => this.experiences.push(result));
  }


  getAllExperiences(){
    this.experienceService.getExperiences().subscribe(results => {
      this.experiences = results;
    }
    );
  }

  deleteExperience(id: number) {
    this.experienceService.deleteExperience(id).subscribe(
      () => {
        this.experiences.splice(this.experiences.findIndex(item => item.id === id), 1);
      }
    );
  }

  editExperience(id: number, experience: Experience) {
    this.formGroup.patchValue(experience);
  }



}
