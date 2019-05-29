import { Injectable } from '@angular/core';
import { TemplateFindResponse } from '../_models/TemplateFindResponse';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  	constructor(
      private http    	: HttpClient,
    ) {}

  templateFind(compact: boolean = false, condition: any = {}): Observable<TemplateFindResponse>{
    return this.http.post<TemplateFindResponse>(`http://198.143.179.211:30010/template/find`, { compact: compact, condition: condition });
  }
}