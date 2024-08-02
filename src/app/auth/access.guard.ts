import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router"

export const canActivateAuth = () => {
  const isLoggedin = inject(AuthService).isAuth

  if (isLoggedin) {
    return true
  }

  return inject(Router).createUrlTree(['/login'])
}
