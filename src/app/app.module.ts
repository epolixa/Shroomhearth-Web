import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pieces/header/header.component';
import { FooterComponent } from './pieces/footer/footer.component';
import { NavigationComponent } from './pieces/navigation/navigation.component';
import { VideoCardComponent } from './pieces/video-card/video-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { LiveComponent } from './pages/live/live.component';
import { MinecraftComponent } from './pages/minecraft/minecraft.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		VideoCardComponent,
		AboutComponent,
		LiveComponent,
		MinecraftComponent,
		DownloadsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		CommonModule,
		FormsModule,
		DataViewModule,
		DropdownModule,
		CardModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
