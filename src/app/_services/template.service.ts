import { Injectable } from '@angular/core';
import { Template } from '../_models/Template'
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

    return this.http.post<TemplateFindResponse>(`${localStorage.getItem("server")}/template/find`, { compact: compact, condition: condition });
  }