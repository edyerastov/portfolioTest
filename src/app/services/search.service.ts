import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Portfolio} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private portfolio: Portfolio[] = [];

  constructor(private http: HttpClient) { }

  searchPortfolio(searchInput: string) {
    let data;
    data = this.http.get(`https://api.iextrading.com/1.0/tops/last?symbols=${searchInput}`);
    this.portfolio.push(data);
  }

  getPotfolio() {
    return this.portfolio;
  }

}
