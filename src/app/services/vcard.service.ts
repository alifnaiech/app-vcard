import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment";
@Injectable()
export class VcardService{
    constructor(private httpClient: HttpClient){}

    getVcardProfile(vcardOwner:string){
        const url = env.apiUrl+"json/full/"+vcardOwner;
        return this.httpClient.get(url);
    }

    getVcard(vcardOwner: string){
       const url = env.apiUrl+"vcf/basic/"+vcardOwner 
       return this.httpClient.get(url);
    }
}