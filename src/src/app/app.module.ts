import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TweetComponent } from "./components/tweet/tweet.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TweetDetailComponent } from "./components/tweet-detail/tweet-detail.component";
import { TrendComponent } from "./components/trend/trend.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { SearchPageComponent } from "./components/search-page/search-page.component";
import { SettingsPageComponent } from "./components/settings-page/settings-page.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DateAgoPipe } from "./pipes/date-ago.pipe";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TweetDetailComponent,
    TrendComponent,
    HomePageComponent,
    SearchPageComponent,
    SettingsPageComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
