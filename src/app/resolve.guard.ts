import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {album} from "./interfaces/app-interface";
import {AlbumsService} from "./albums.service";
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<album> {

  constructor(private albumService: AlbumsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<album> | Promise<album> | album {

    const id = route.paramMap.get('id');
    // @ts-ignore
    let album = this.albumService.albums.find(album => album.id === +id);
    if (!album) {
      // @ts-ignore
      return  of(null).pipe(
        delay(5000),
        tap(() => this.router.navigate(['/notfound']))
      );
    } else {
      return of(album).pipe( delay(5000) );
    }

  }

}
