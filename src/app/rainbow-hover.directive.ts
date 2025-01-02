import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRainbowHover]'
})
export class RainbowHoverDirective {

  private colors: string[] = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#8B00FF'  // Violet
  ];

  private originalColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Save the original text color on mouse enter
  @HostListener('mouseenter') onMouseEnter(): void {
    this.originalColor = this.el.nativeElement.style.color;
    console.log(this.el.nativeElement); // Logs the actual DOM element
    this.changeTextColor();
  }

  // Restore the original text color on mouse leave
  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.originalColor);
    console.log(this.el.nativeElement.tagName); // E.g., 'DIV' or 'BUTTON'
  }

  // Change the text color to a random color from the rainbow palette
  private changeTextColor(): void {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.renderer.setStyle(this.el.nativeElement, 'color', randomColor);
  }

}
