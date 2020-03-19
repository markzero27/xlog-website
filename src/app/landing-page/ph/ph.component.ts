import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ph',
  templateUrl: './ph.component.html',
  styleUrls: ['./ph.component.scss']
})
export class PhComponent implements OnInit {
  datas: any[];
  features: any[];
  constructor() { }

  ngOnInit(): void {
    this.datas = [
      {
        icon: 'assets/svg/call-center.svg',
        count: 12000,
        title: 'Register Accounts'
      },
      {
        icon: 'assets/svg/Image 173.svg',
        count: 22000,
        title: 'Total Shipments'
      },
      {
        icon: 'assets/svg/card.svg',
        count: 55000,
        title: 'Total Transactions'
      },
      {
        icon: 'assets/svg/Image 170.svg',
        count: 13000,
        title: 'Total TEUS'
      },
      {
        icon: 'assets/svg/smiley.svg',
        count: 10000,
        title: 'Happy Clients \n (Good-to-Have)'
      }
    ];
    this.features = [
      {
        icon: 'assets/svg/Group 117.svg',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad dolorem dolores similique rem aperiam blanditiis impedit odit facilis velit.',
        title: 'Fast & Easy Online Booking'
      },
      {
        icon: 'assets/svg/Group 112.svg',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad dolorem dolores similique rem aperiam blanditiis impedit odit facilis velit.',
        title: 'Comprehensive Shipment Monitoring'
      },
      {
        icon: 'assets/svg/Group 113.svg',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad dolorem dolores similique rem aperiam blanditiis impedit odit facilis velit.',
        title: 'Secure Information Storage'
      },
      {
        icon: 'assets/svg/Group 114.svg',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad dolorem dolores similique rem aperiam blanditiis impedit odit facilis velit.',
        title: 'Immutable Communication System'
      },
      {
        icon: 'assets/svg/Group 115.svg',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad dolorem dolores similique rem aperiam blanditiis impedit odit facilis velit.',
        title: 'Frictionless Online Transactions'
      },
      {
        icon: 'assets/svg/Group 116.svg',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad dolorem dolores similique rem aperiam blanditiis impedit odit facilis velit.',
        title: 'Competitive Cargo Insurance'
      },
    ];
  }

}
