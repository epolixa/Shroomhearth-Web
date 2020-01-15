import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pieces/header/header.component';
import { FooterComponent } from './pieces/footer/footer.component';
import { NavigationComponent } from './pieces/navigation/navigation.component';
import { VideoCardComponent } from './pieces/video-card/video-card.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		VideoCardComponent,
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
