import { Component } from '@angular/core';


  @Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    
  })
  export class CardComponent {
    cards = [
      {
        id: 1,
        title: 'سیستم دفتر کل',
        features: [
          { name: 'دفترکل', price: 100, selected: false },
          { name: ' سیستم ارزی', price: 200, selected: false },
          { name: 'گزارش فصلی', price: 300, selected: false },
          { name: 'اظهارنامه', price: 300, selected: false },
          { name: 'IFRS', price: 300, selected: false },
        ],
      },
      {
        id: 2,
        title: 'سیستم انبار و حسابداری کالا',
        features: [
          { name: ' انبار و حسابداری کالا', price: 150, selected: false },
          { name: 'قیمت گذاری', price: 250, selected: false },
          { name: 'فروش ویژه', price: 350, selected: false },
          { name: 'ارتباط با فروش', price: 350, selected: false },
          { name: 'ارتباط با تولید', price: 350, selected: false },
        ],
      },
      {
        id: 3,
        title: 'سیستم دریافت پرداخت',
        features: [
          { name: 'دریافت پرداخت', price: 120, selected: false },
          { name: 'دستور پرداخت', price: 220, selected: false },
          { name: 'پرینت چک', price: 320, selected: false },
          { name: 'پرداخت آنلاین', price: 320, selected: false },
          { name: 'مغایرت گیری بانک', price: 320, selected: false },
          { name: 'تسهیلات', price: 320, selected: false },
        ],
      },
    ];
  
    calculateCardTotal(card: any): number {
      return card.features
        .filter((feature: any) => feature.selected)
        .reduce((sum: number, feature: any) => sum + feature.price, 0);
    }
  
    calculateOverallTotal(): number {
      return this.cards.reduce(
        (total, card) => total + this.calculateCardTotal(card),
        0
      );
    }
  
    resetSelections(): void {
      this.cards.forEach((card) =>
        card.features.forEach((feature) => (feature.selected = false))
      );
    }
  }
  

