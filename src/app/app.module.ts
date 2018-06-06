import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { MasonryComponent } from './masonry/masonry.component';
import { MasonryDirective } from './masonry/masonry.directive';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("414646750345-q77prfo2b7s87ki0di3i1jv5t3uh91ok.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1665468547084549")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    MasonryComponent,
    MasonryDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule.initialize(config),
  ],
  providers: [WebsocketService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
