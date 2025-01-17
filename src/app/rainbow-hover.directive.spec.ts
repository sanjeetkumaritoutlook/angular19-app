import { RainbowHoverDirective } from './rainbow-hover.directive';

describe('RainbowHoverDirective', () => {
  it('should create an instance', () => {
    const elRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const rendererMock = jasmine.createSpyObj('Renderer2', ['setStyle']);
    const directive = new RainbowHoverDirective(elRefMock, rendererMock); //2 arguments required because of initilization in constructor
    expect(directive).toBeTruthy();
  });
});
