import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ClientService} from "../../services/client.service";
import {ProfileComponent} from "../profile/profile.component";
import {Profile} from "../../models/profile.model";

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  // @ts-ignore
  updateForm: FormGroup;
  // @ts-ignore
  client: Profile



  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.createUpdateForm();

  }

  createUpdateForm() {
    this.updateForm = this.formBuilder.group({
      id: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      gender: ["", Validators.required],
      password: ["", Validators.required],
      matchingPassword: ["", Validators.required]
    })
  }

  updateClient() {
      let updateModel = Object.assign({}, this.updateForm.value)
      // @ts-ignore
      updateModel.id= +localStorage.getItem("clientId");
      this.clientService.update(updateModel).subscribe(response => {
        this.client = response
        console.log(this.client);
      })
  }
}
