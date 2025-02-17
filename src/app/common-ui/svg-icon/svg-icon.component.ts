import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  template: '<svg><use [attr.href]="href"></use></svg>',
  styles: ['']
})
export class SvgIconComponent {
  @Input() icon: string = '';

  get href(): string {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
