import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'characteristics', component: CharacteristicsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'question', component: QuestionsComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
