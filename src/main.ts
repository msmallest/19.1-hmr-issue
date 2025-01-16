import { Component, signal, VERSION } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';
import { ExteriorTemplateComponent } from './app/exterior-template.component';

@Component({
  selector: 'app-root',
  template: `
    <p id="one">Chandasdage this</p>

    <p id="two">Also change this</p>

    <p>Change the text inside this to fix the styles</p>

    <app-exterior-template />

    <section id="app-info">
      <p>Current build: {{angularVersion.full | json}}</p>
    </section>
  `,
  styles: `
    #one{
      font-weight: bold;
      color: green;
    }
    #two{
      font-weight: bold;
      color: green;
    }
  `,
  imports: [JsonPipe, ExteriorTemplateComponent],
})
export class App {
  angularVersion = VERSION;
}

bootstrapApplication(App);
