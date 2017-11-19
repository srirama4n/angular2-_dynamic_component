import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {DcHostDirective} from './dc-host.directive';
import {ComponentDetail} from '../models/ComponentDetail';
import {FinancialsComponent} from '../financials/financials.component';
import {PersonComponent} from '../person/person.component';
import {DynamicComponentService} from "./dynamic-component.service";

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit, AfterViewInit {

  @ViewChild(DcHostDirective)
  dcHostDirective: DcHostDirective;

  @Input()
  componentDetail: ComponentDetail;

  constructor(public componentFactoryResolver: ComponentFactoryResolver,
              public dynamicComponentService: DynamicComponentService) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  ngAfterViewInit() {
  }

  loadComponent() {
    const viewContainerRef = this.dcHostDirective.viewContainerRef;
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.dynamicComponentService.findEntryComponentByName(this.componentDetail.name));
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const dynamicComponent: any = componentRef.instance;
    dynamicComponent.data = this.componentDetail.data;
  }

}
