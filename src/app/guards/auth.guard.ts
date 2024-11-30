import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { UserService } from "../user/user.service";

export const AuthGuard: CanActivateFn = () => {
    const userService = inject(UserService);

    return false;
}