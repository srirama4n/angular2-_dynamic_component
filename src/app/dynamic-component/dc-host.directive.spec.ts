import { DcHostDirective } from './dc-host.directive';
import {ViewContainerRef} from '@angular/core';

describe('DcHostDirective', () => {
  it('should create an instance', () => {
    const directive = new DcHostDirective({});
    expect(directive).toBeTruthy();
  });
});
