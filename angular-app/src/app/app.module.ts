import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProdcutComponent } from "./prodcut/prodcut.component";

@NgModule({
  declarations: [AppComponent, ProdcutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  ngDoBootstrap(app) {
    document.addEventListener(
      "angular-bootstrap",
      () => {
        app.bootstrap(AppComponent);
      },
      false
    );
    app.bootstrap(AppComponent);

  }
}
