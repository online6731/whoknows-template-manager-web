import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule , Routes , ActivatedRouteSnapshot} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';


const appRoutes: Routes = [
    { path: '',             component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true } /* <-- debugging purposes only */ ),
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
