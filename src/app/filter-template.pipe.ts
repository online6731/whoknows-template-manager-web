import { Pipe, PipeTransform } from '@angular/core';
import { Template } from './_models/Template';

@Pipe({
  name: 'filterTemplate'
})
export class FilterTemplatePipe implements PipeTransform {

  transform(templates: Template[], query: string = ''): Template[] {

    const title = query.split(' ')[0];
    console.log(!query);
    return templates.filter((template) => {
      return (!query) ||
        (
          (template._id.$oid.includes(title) || !title) &&
          (true)
        );
    });
  }
}
