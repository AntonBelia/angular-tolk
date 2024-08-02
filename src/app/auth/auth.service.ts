import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { TokenResponse } from './auth.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  cookieService: CookieService = inject(CookieService);
  router: Router = inject(Router);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course/auth/';

  token: string | null = null;
  refreshToken: string | null = null;

  username: string = 'Belia_Anton';
  pasword: string = 'X22YlGPdzq';

  constructor() {}

  get isAuth() {
    if (!this.token) {
      this.token = this.cookieService.get('access_token');
      this.refreshToken = this.cookieService.get('refresh_token');
    }
    return !!this.token;
  }

  login(payload: { username: string; password: string }) {
    const fd = new FormData();

    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this.http
      .post<TokenResponse>(`${this.baseApiUrl}token`, fd)
      .pipe(tap((val) => this.saveTokens(val)));
  }

  refreshAuthToken() {
    return this.http
      .post<TokenResponse>(`${this.baseApiUrl}refresh`, {
        refresh_token: this.refreshToken,
      })
      .pipe(
        tap((val) => this.saveTokens(val)),
        catchError((err) => {
          this.logout();
          return throwError(err);
        })
      );
  }

  logout() {
    this.cookieService.deleteAll();
    this.token = null;
    this.refreshToken = null;
    this.router.navigate(['/login']);
  }

  saveTokens(res: TokenResponse) {
    this.token = res.access_token;
    this.refreshToken = res.refresh_token;

    this.cookieService.set('access_token', this.token);
    this.cookieService.set('refresh_token', this.refreshToken);
  }
}
