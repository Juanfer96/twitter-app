import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { SearchPageComponent } from "./components/search-page/search-page.component";
import { SettingsPageComponent } from "./components/settings-page/settings-page.component";
import { TweetDetailComponent } from "./components/tweet-detail/tweet-detail.component";

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "search", component: SearchPageComponent },
  { path: "settings", component: SettingsPageComponent },
  { path: "TweetDetail/:id", component: TweetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
