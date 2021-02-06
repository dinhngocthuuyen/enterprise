import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReviewComponent } from './review.component';
import { ReviewPageComponent } from './review-page.component';
import { DetailComponent } from './containers/detail/detail.component';


const routes: Routes = [{
  path: '', component: ReviewPageComponent,
  children: [
    { path: 'review', component: ReviewComponent },
    { path: 'review/:_id', component: DetailComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
