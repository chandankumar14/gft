import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PARTY,Data } from "../model/side_menu"
import { Observable,from, of  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {
  constructor(private http: HttpClient) { }
  getPartyList(){
    // const endpointUrl = `${environment.BASE_URL}/party`;
    // return this.http.get<PARTY[]>(endpointUrl);
    return of(Data)
  }
  getPartyDetailsBYId(id: string) {
    // const endpointUrl = `${environment.BASE_URL}/party?${id}`;
    // return this.http.get<PARTY>(endpointUrl);
    const partyDetails = Data.findIndex(item => item.Id === id);
    return of(Data[partyDetails])
  }
  deletePartyDetailsBYId(id: string) {
    // const endpointUrl = `${environment.BASE_URL}/party?${id}`;
    // return this.http.delete<PARTY>(endpointUrl);
    const index = Data.findIndex(item => item.Id === id)
    Data.splice(index, 1)
    return from(Data)
  }
  updatePartyDetailsBYId(id: string, payload: any){
    // const endpointUrl = `${environment.BASE_URL}/party?${id}`;
    // return this.http.put<PARTY>(endpointUrl, payload);
    const index = Data.findIndex(item=>item.Id ===id)
    Data[index] = payload;
    return of (payload)
  }
  AddPartyDetails( payload:any) {
    // const endpointUrl = `${environment.BASE_URL}/party`;
    // return this.http.post<PARTY>(endpointUrl, payload);
    console.log(payload)
    Data.push(payload)
    return of(Data)
  }

}
