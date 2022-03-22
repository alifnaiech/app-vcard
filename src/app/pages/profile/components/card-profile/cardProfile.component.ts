import { Component } from "@angular/core";
import { faPaperPlane, faPhone, faLocationDot, faEnvelope, faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-cardprofile',
    templateUrl: './cardProfile.component.html',
    styleUrls: ['./cardProfile.component.scss']
})
export class CardProfileComponent{
    faPaperPlane = faPaperPlane;
    faPhone = faPhone;
    faLocationDot = faLocationDot
    faEnvelope = faEnvelope
    faBriefcase = faBriefcase
    faGlobe = faGlobe
}