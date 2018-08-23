import { Component,  Injectable,  OnInit } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface, SWIPER_CONFIG
} from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit {

current_item: any = {};

items = [
  { type: 'Tarjeta CuentaRut', number: '**** **** **** 2320', saldoContable: '$  1.200.000' },
  { type: 'Tarjeta Debito', number: '**** **** **** 3423', saldoContable: '$  200.000' },
  { type: 'Tarjeta CuentaRut', number: '**** **** **** 3562', saldoContable: '$  6.000' },
  { type: 'Tarjeta Debito', number: '**** **** **** 5673', saldoContable: '$  1' }
];
public config: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1.23,
  keyboard: false,
  spaceBetween: 4,
  centeredSlides: true,
  mousewheel: true,
  scrollbar: false,
  navigation: false,
  slidesOffsetBefore: 1,
  pagination: true
};
public config2: SwiperPaginationInterface = {
  el: '.swiper-pagination',
  bulletActiveClass: 'swiper-pagination-bullet-active',
  bulletClass: 'swiper-pagination-bullet'
};
private scrollbar: SwiperScrollbarInterface = {
  el: '.swiper-scrollbar',
  hide: false,
  draggable: true
};
private pagination: SwiperPaginationInterface = {
  el: '.swiper-pagination',
  clickable: true,
  hideOnClick: false
};

onIndexChange(index): void {
  this.current_item = this.items[index];
  this.current_item.state = {};
  this.current_item.state = (this.current_item.cardActive ? 'bloqueo' : 'desbloqueo');
  /* parameter */
  console.log(this.current_item.cash);
}

ngOnInit() {
}}