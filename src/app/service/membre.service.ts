import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Membre } from '../shared/models/member.model';

@Injectable()
export class MembreService {

  constructor(private httpService: HttpClient) {
  }
  
  public getUser(id: number): Observable<Membre> {
    return this.httpService.get<Membre>('http://localhost:8080/membre/${id}').pipe(
      map(data => new Membre().deserialize(data)),
    
    );
  }

  public getAllUsers(): Observable<Membre[]> {
    return this.httpService.get<Membre[]>('http://localhost:8080/membres').pipe(
      map(data => data.map(data => new Membre().deserialize(data)))
    );
  }
}