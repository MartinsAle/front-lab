import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
}
