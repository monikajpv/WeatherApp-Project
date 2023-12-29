import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';
// import { HeaderComponent } from './header/header.component';
// import { SearchComponent } from './search/search.component';
// import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './OnlineCourse/home/home.component';
import { AboutComponent } from './OnlineCourse/about/about.component';
import { CourseComponent } from './OnlineCourse/course/course.component';
import { ContactComponent } from './OnlineCourse/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './OnlineCourse/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';


const route: Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CourseComponent},
  // {path:'courses/course/:id',component:CourseComponent},

  {path:'**',component:ErrorComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    // HeaderComponent,
    // SearchComponent,
    // ProductsComponent,

    HomeComponent,
    AboutComponent,
    CourseComponent,
    ContactComponent,
    ErrorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    FormsModule

    // AppRoutingModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
