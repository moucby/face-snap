import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes = [
    {path: '', component: LandingPageComponent},
    {path: 'facesnaps', component: FaceSnapListComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}