import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdvancedStatisticsPromo } from './advanced-statistics-promo/advanced-statistics-promo.component';

import { AppComponent } from './app.component';
import { CtaComponent } from './cta/cta.component';
import { FooterContent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ShortenLinkComponent } from './shorten-link/shorten-link.component';

@NgModule
({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeroComponent,
        ShortenLinkComponent,
        AdvancedStatisticsPromo,
        CtaComponent,
        FooterContent
        ],
    imports: [
        BrowserModule
        ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}