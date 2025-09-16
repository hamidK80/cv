import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';
import { HeroComponent } from './components/hero-component/hero-component';
import { AboutComponent } from './components/about-component/about-component';
import { ServicesComponent } from './components/services-component/services-component';
import { HowItWorksCopmonent } from './components/how-it-works-copmonent/how-it-works-copmonent';
import { ToolboxComponent } from './components/toolbox-component/toolbox-component';
import { TipComponent } from './components/tip-component/tip-component';
import { FaqComponent } from './components/faq-component/faq-component';
import { GalleryComponent } from './components/gallery-component/gallery-component';
import { ContactComponent } from './components/contact-component/contact-component';
import { FooterComponent } from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, ServicesComponent, HowItWorksCopmonent, ToolboxComponent, TipComponent, FaqComponent, GalleryComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv');
}
