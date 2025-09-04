import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule   // ✅ Ajout
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
