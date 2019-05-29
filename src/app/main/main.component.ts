import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../_services/template.service';
import { Template } from '../_models/Template';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  templates       : Template[];
  workingTemplate : Template;

  constructor(
    private templateService : TemplateService
  ) { }

  ngOnInit() {
    this.templateService.templateFind().subscribe((body) => {
      if (body.ok){
        
        this.templates        = body.templates;
        this.workingTemplate  = body.templates[0];
        

      } else {
        console.log(body);
      }
    })
  }

}
