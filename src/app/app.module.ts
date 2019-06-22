import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FilterTemplatePipe } from './filter-template.pipe';
import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes = [
  { path: '', component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterTemplatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true } /* <-- debugging purposes only */),
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

