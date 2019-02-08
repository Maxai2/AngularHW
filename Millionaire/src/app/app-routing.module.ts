import { QuestionComponent } from './question/question.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'question', component: QuestionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
