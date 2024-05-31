import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FloatLabelModule } from 'primeng/floatlabel';
@NgModule({
    exports: [
        ButtonModule,
        CalendarModule,
        PanelMenuModule,
        ChipsModule,
        EditorModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        TableModule,
        CardModule,
        TabViewModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        DialogModule,
        TooltipModule,
        BreadcrumbModule,
        StepsModule,
        TabMenuModule,
        MessagesModule,
        ToastModule,
        FloatLabelModule
    ]
})

export class PrimeNgModule {

}