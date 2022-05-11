import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardProfileComponent } from "src/app/pages/profile/components/card-profile/cardProfile.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes = [
    {
        path: ':owner',
        component: CardProfileComponent
    }
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), MatListModule, MatDividerModule, MatProgressSpinnerModule, FontAwesomeModule],
    declarations: [CardProfileComponent]
})
export class ProfileModule{

}