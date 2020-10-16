import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Bio } from 'src/app/models/bio.model';
import { BioService } from '../../services/bio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bio-dashboard',
  templateUrl: './bio-dashboard.component.html',
  styleUrls: ['./bio-dashboard.component.scss']
})
export class BioDashboardComponent implements OnInit {

  bioToModify: Bio;
  filesToUpload = [];
  modifyBioForm = this.fb.group({
    intro: [''],
    cvLink: this.fb.control(''),
    profileImgLink: this.fb.control('')
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private bioService: BioService) {

  }

  ngOnInit(): void {

  }

  onFileModify(event) {
    if (event.target.files.length > 0) {
      this.filesToUpload.push(event.target.files[0]);
      this.modifyBioForm.get('cvLink').setValue(this.filesToUpload[0]);
    }
  }

  onPhotoModify(event) {
    if (event.target.files.length > 0) {
      this.filesToUpload.push(event.target.files[0]);
      this.modifyBioForm.get('profileImgLink').setValue(this.filesToUpload[1]);
    }
  }

  submitModifyBio() {
    const formDataSubmit = new FormData();
    this.bioToModify = new Bio();
    for (const file of this.filesToUpload) {
      formDataSubmit.append('uploadedFiles', file, file.name);
    }
    this.http.post<any>('http://localhost:3000/bio/upload', formDataSubmit).subscribe(
      res => {
        this.bioToModify.intro = this.modifyBioForm.value.intro;
        this.bioToModify.cvLink = res.data.CVname;
        this.bioToModify.profileImgLink = res.data.imgName;
        this.bioService.putBio(this.bioToModify, 1).subscribe(bio => {
        });
        Swal.fire('Bio is updated');
      }
    );
  }
}


