import { Injectable } from '@angular/core';
import { TemplateFindResponse } from '../_models/TemplateFindResponse';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TemplateNewResponse } from '../_models/TemplateNewResponse';
import { TemplateTestResponse } from '../_models/TemplateTestResponse';
import { Template } from '../_models/Template';

@Injectable({
    providedIn: 'root'
})
export class TemplateService {

    constructor(
        private http: HttpClient,
    ) { }

    templateFind(compact: boolean = false, condition: any = {}): Observable<TemplateFindResponse> {

        return this.http.post<TemplateFindResponse>(`http://198.143.179.211:3001/template/find`, { compact, condition });

        /*
        return of({
            ok: true,
            templates: [
                {
                    _id: {
                        $oid: 'aasdasdasdasdasd'
                    },
                    values: {},
                    idea: 'idea of template',
                    __choose: {
                        title: {
                            text: ['text title of template']
                        },
                        subtitle: {
                            text: ['subtitle title of template']
                        },
                        choice: {
                            text: ['choices title of template']
                        },
                        answer: {
                            text: ['answer title of template']
                        }
                    },
                    __bool: {},
                    __write: {},
                    __select: {},
                    tags: [{ _id: { $oid: 'asdadasdasd' }, title: 'tag title', persianTitle: 'عنوان فارسی تگ' }],
                    usage: ['contest'],
                    score_function: 'score function',
                    time_function: 'time function',
                    __state: 'writing',
                    __test_info: {

                    },
                    __datasets: ['movie']
                },
                {
                    _id: {
                        $oid: 'aasdasdasdasdasd'
                    },
                    values: {},
                    idea: 'idea of template',
                    __choose: {
                        title: {
                            text: ['text title of template']
                        },
                        subtitle: {
                            text: ['subtitle title of template']
                        },
                        choice: {
                            text: ['choices title of template']
                        },
                        answer: {
                            text: ['answer title of template']
                        }
                    },
                    __bool: {},
                    __write: {},
                    __select: {},
                    tags: [{ _id: { $oid: 'asdadasdasd' }, title: 'tag title', persianTitle: 'عنوان فارسی تگ' }],
                    usage: ['contest'],
                    score_function: 'score function',
                    time_function: 'time function',
                    __state: 'writing',
                    __test_info: {

                    },
                    __datasets: ['movie']
                }
            ],
            problem: ''
        });

        */

    }

    templateNew(): Observable<TemplateNewResponse> {
        return this.http.post<TemplateNewResponse>(`http://198.143.179.211:3001/template/new`, { idea: 'idea of template' });
    }

    templateTest(template: Template): Observable<TemplateTestResponse> {
        return this.http.post<TemplateTestResponse>(`http://198.143.179.211:3001/template/test_save`, { template });
    }

}
