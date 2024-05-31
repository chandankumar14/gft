import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyServiceService } from '../../Service/party-service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  partyForm!: FormGroup
  Id!: string;
  editMode: boolean = false
  constructor(private route: ActivatedRoute,
    private partyService: PartyServiceService,
    private router: Router

  ) {
    this.partyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      company_name: new FormControl('', Validators.required),
      mobile_no: new FormControl('', [Validators.required]),
      telephone_no: new FormControl('', Validators.required),
      whatsapp_no: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      remark: new FormControl('', [Validators.required]),
      pan_no: new FormControl('', Validators.required),
      apply_tds: new FormControl('', Validators.required),
      credit_limit: new FormControl('', Validators.required),
      bank_ifsc_code: new FormControl('',),
      date_of_birth: new FormControl('', Validators.required),
      anniversary_date: new FormControl('',)
    })
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.Id = params['Id'];
     if(this.Id){
        this.getPartyDetailsBYId()
        this.editMode = true
      }
    });
  }
  getPartyDetailsBYId() {
    this.partyService.getPartyDetailsBYId(this.Id).subscribe(res => {
      this.partyForm.patchValue({
        name: res.name,
        company_name: res.company_name,
        mobile_no: res.mobile_no,
        telephone_no: res.telephone_no,
        whatsapp_no: res.whatsapp_no,
        email: res.email,
        remark: res.remark,
        pan_no: res.pan_no,
        apply_tds: res.apply_tds,
        credit_limit: res.credit_limit,
        bank_ifsc_code: res.bank_ifsc_code,
        date_of_birth: res.date_of_birth,
        anniversary_date: res.anniversary_date
      })
    })
  }
  Submit() {
    if (this.editMode ) {
      this.partyService.updatePartyDetailsBYId(this.Id, this.partyForm.value).subscribe(res => {
        this.router.navigate(['/party_list']);
      })
    } else {
      this.partyService.AddPartyDetails(this.partyForm.value).subscribe(res => {
        this.router.navigate(['/party_list']);
      })
    }
  }

}
