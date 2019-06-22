import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../_services/template.service';
import { Template } from '../_models/Template';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { query } from '@angular/animations';
import { TemplateNewResponse } from '../_models/TemplateNewResponse';
import { FilterTemplatePipe } from '../filter-template.pipe';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    templates: Template[] = [];
    workingTemplate: Template;
    currentFormat = 'text';
    currentType = '&choose';
    currentIndex = 0;
    allTypes = ['&choose', '&write', '&bool', '&select'];
    allFormats = ['text', 'audio', 'viedo', 'photo'];
    allFields = ['title', 'subtitle', 'answer', 'choice'];

    constructor(
        private templateService: TemplateService
    ) { }


    ngOnInit() {
        this.workingTemplate = new Template();
        this.workingTemplate.values = [];
        this.updateTemplates();
        console.log(this.getTypes(this.workingTemplate));
    }

    removeValue(key: string) {
        delete this.workingTemplate.values[key];
    }

    addValue(key: string, dataQuery: string) {
        this.workingTemplate.values[key] = dataQuery;


    }

    showTemplate(template: Template) {
        this.workingTemplate = template;
    }

    getTypes(template: Template) {
        return Object.keys(template).filter(key => key[0] === '&');
    }

    updateTemplates() {
        this.templateService.templateFind().subscribe((body) => {
            if (body.ok) {
                this.templates = body.templates.reverse();
                this.workingTemplate = body.templates[0];
            } else {
                console.log(body);
            }
        });
    }

    newTemplate() {
        this.templateService.templateNew().subscribe((body) => {
            if (body.ok) {
                this.updateTemplates();
                this.workingTemplate = this.templates[0];
            } else {
                console.error(body);
            }
        });
    }

    testTemplate(template: Template) {
        this.templateService.templateTest(template).subscribe((body) => {
            if (body.ok) {
                this.workingTemplate = body.template;
            } else {
                console.error(body);
            }
        });
    }

}
