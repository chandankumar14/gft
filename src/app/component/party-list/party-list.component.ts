import { Component, } from '@angular/core';
import { PARTY } from '../../model/side_menu';
import { PartyServiceService } from '../../Service/party-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrl: './party-list.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class PartyListComponent {
  products:any;
  constructor(private partyService: PartyServiceService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }
  ngOnInit() {
    this.getPartyList()
  }
 getPartyList() {
    this.partyService.getPartyList().subscribe(res => {
      this.products = res
    })
  }
  deletePartyDetailsBYId() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Confirmation',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.partyService.deletePartyDetailsBYId("").subscribe(res => {
          this.getPartyList()
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record is Deleted', life: 2000 });
        })
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 2000 });
      }
    });
  }


}
