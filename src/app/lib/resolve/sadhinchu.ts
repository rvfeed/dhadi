import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
@Injectable()
export class Sadhinchu implements Resolve<number>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number{
        return 5;
    }
}
