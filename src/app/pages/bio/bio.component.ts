import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/services/bio.service';
import { Bio } from 'src/app/models/bio.model';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  bio: Bio[] = [];
  education: Education[] = [];
  experience: Experience[] = [];
  intro = '';
  cvLink = '';
  imageLink = '';
  constructor(private bioService: BioService, private educationService: EducationService, private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getBio();
    this.getEducations();
    this.getExperiences();
  }

  getBio() {
    this.bioService.getBio().subscribe(data => {
      console.log('getbio', data);
      this.intro = (data[0].intro);
      this.cvLink = (data[0].cv_link);
      this.imageLink = (data[0].image_link);
    }
    );
  }

  getEducations() {
    this.educationService.getEducations().subscribe(data => {
      console.log(data);
      this.education = data;
    });
  }

  getExperiences() {
    this.experienceService.getExperiences().subscribe(data => {
      console.log(data);
      this.experience = data;
    });
  }

  downloadCV() {
    console.log('download cv');
  }
}
