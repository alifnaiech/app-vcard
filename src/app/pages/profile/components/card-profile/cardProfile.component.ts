import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faPaperPlane, faPhone, faLocationDot, faEnvelope, faBriefcase, faGlobe, faAddressCard, faQrcode } from '@fortawesome/free-solid-svg-icons';

import { VcardService } from "src/app/services/vcard.service";

@Component({
    selector: 'app-cardprofile',
    templateUrl: './cardProfile.component.html',
    styleUrls: ['./cardProfile.component.scss']
})
export class CardProfileComponent implements OnInit{
    faPaperPlane = faPaperPlane;
    faPhone = faPhone;
    faLocationDot = faLocationDot
    faEnvelope = faEnvelope
    faBriefcase = faBriefcase
    faGlobe = faGlobe;
    faAddressCard = faAddressCard;
    faQrcode = faQrcode
    public vcardOwnerId: string | null;
    public nameOwner: any;
    public loader = true;
    constructor(private _mysrvVcard: VcardService, private activatedRoute: ActivatedRoute){
        this.vcardOwnerId = this.activatedRoute.snapshot.paramMap.get('owner');
    }
    
    ngOnInit(): void {
        this.loadVcardProfile();
    }


    
    public vcardProfile$!: any;
    loadVcardProfile(){
        this._mysrvVcard.getVcardProfile(this.vcardOwnerId!).subscribe({
            next: (data:any)=>{
                this.vcardProfile$ = data;
                this.nameOwner = this.vcardProfile$['fns'][0].fn1
                this.nameOwner = this.nameOwner.split(' ');
                const firstLettre = this.nameOwner[0][0]
                const secondLettre  = this.nameOwner[1][0]
                this.nameOwner = firstLettre + secondLettre;
                setTimeout(()=>{
                    this.loader = false;
                },1000)
            }
        })
    }

    downloadVcard(){
        this._mysrvVcard.getVcard(this.vcardOwnerId!).subscribe({
            next: (data:any)=>{
                console.log('download file ', data)
            }
        })
    }



    
}