import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MinecraftComponent } from './pages/minecraft/minecraft.component';
import { LiveComponent } from './pages/live/live.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'minecraft', component: MinecraftComponent},
	{ path: 'live', component: LiveComponent},
	{ path: 'downloads', component: DownloadsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
