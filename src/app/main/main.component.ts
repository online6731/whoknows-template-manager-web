import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../_services/template.service';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  templates : Template[];

  constructor(
    private templateService : TemplateService
  ) { }

  ngOnInit() {
    this.templateService.templateFind().subscribe((body) => {
      if (body.ok){
        
        this.templates = body.templates;

      } else {
        console.log(body);
      }
    })
  }

}
