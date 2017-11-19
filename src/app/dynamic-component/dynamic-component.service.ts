import {Injectable, Type} from '@angular/core';
import {FinancialsComponent} from '../financials/financials.component';
import {PersonComponent} from '../person/person.component';

@Injectable()
export class DynamicComponentService {
  entryComponents: Map<string, Type<any>> = new Map<string, Type<any>>();
  constructor() {
    this.entryComponents.set('FinancialsComponent', FinancialsComponent);
    this.entryComponents.set('PersonComponent', PersonComponent);
  }

  findEntryComponentByName(componentName: string): Type<any> {
    return this.entryComponents.get(componentName);
  }
}
