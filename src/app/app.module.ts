import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pieces/header/header.component';
import { FooterComponent } from './pieces/footer/footer.component';
import { NavigationComponent } from './pieces/navigation/navigation.component';
import { MobileNavigationComponent } from './pieces/mobile-navigation/mobile-navigation.component';
import { VideoCardComponent } from './pieces/video-card/video-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { LiveComponent } from './pages/live/live.component';
import { MinecraftComponent } from './pages/minecraft/minecraft.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DownloadCardComponent } from './pieces/download-card/download-card.component';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TimelineModule } from 'primeng/timeline';
import { FeatureCardComponent } from './pieces/feature-card/feature-card.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		MobileNavigationComponent,
		VideoCardComponent,
		AboutComponent,
		LiveComponent,
		MinecraftComponent,
		DownloadsComponent,
		DownloadCardComponent,
		FeatureCardComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		CommonModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		MatMenuModule,
		SlickCarouselModule,
		TimelineModule,
		DataViewModule,
		ButtonModule,
		SelectButtonModule
	],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap: [AppComponent]
})
export class AppModule { }
