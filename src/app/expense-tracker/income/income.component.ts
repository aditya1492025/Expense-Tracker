import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css',
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  aprilIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  mayIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  juneIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  julyIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  augustIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  septemberIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  octoberIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  novemberIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  decemberIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  constructor(public fb: FormBuilder) { 

    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
   }
  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required],
    });
  }
  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.getFilteredIncomes();
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      case 'April':
        return this.aprilIncomes;
      case 'May':
        return this.mayIncomes;
      case 'June':
        return this.juneIncomes;
      case 'July':
        return this.julyIncomes;
      case 'August':
        return this.augustIncomes;
      case 'September':
        return this.septemberIncomes;
      case 'October':
        return this.octoberIncomes;
      case 'November':
        return this.novemberIncomes;
      case 'December':
        return this.decemberIncomes;
      default:
        return [];
    }
  }

  getFilteredIncomes() {
    let filteredIncomes: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredIncomes = [...this.januaryIncomes];
        break;
      case 'February':
        filteredIncomes = [...this.februaryIncomes];
        break;
      case 'March':
        filteredIncomes = [...this.marchIncomes];
        break;
      case 'April':
        filteredIncomes = [...this.aprilIncomes];
        break;
      case 'May':
        filteredIncomes = [...this.mayIncomes];
        break;
      case 'June':
        filteredIncomes = [...this.juneIncomes];
        break;
      case 'July':
        filteredIncomes = [...this.julyIncomes];
        break;
      case 'August':
        filteredIncomes = [...this.augustIncomes];
        break;
      case 'September':
        filteredIncomes = [...this.septemberIncomes];
        break;
      case 'October':
        filteredIncomes = [...this.octoberIncomes];
        break;
      case 'November':
        filteredIncomes = [...this.novemberIncomes];
        break;
      case 'December':
        filteredIncomes = [...this.decemberIncomes];
        break;
      default:
        break;
      }
      return filteredIncomes;
  }
  onSubmit() {}
}
