import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {sleep} from '@/utils/helpers';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user?: any | null = null;

    constructor(
        private router: Router,
        private toastr: ToastrService
    ) {}

    async getProfile() {
        try {
            await sleep(500);
            const user = true;

            if (user) {
                this.user.email = 'andi@andi.com';
            } else {
                this.logout();
            }
        } catch (error) {
            this.logout();
            this.toastr.error(error.message);
        }
    }
    async loginWithEmail(email: string, password: string) {
        try {
            const result = {email, password};
            this.user = result;
            this.router.navigate(['/']);

            return result;
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async logout() {
        this.user = null;
        this.router.navigate(['/login']);
    }
}
