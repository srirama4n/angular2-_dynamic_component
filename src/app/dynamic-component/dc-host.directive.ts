import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDcHost]'
})
export class DcHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
