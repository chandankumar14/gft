import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
@NgModule({
    exports: [
        ButtonModule,
        ChipsModule,
        EditorModule,
       InputTextModule,
        TableModule,
      ConfirmDialogModule,
        ConfirmPopupModule,
        DialogModule,
        MessagesModule,
        ToastModule,
        FloatLabelModule
    ]
})

export class PrimeNgModule {

}