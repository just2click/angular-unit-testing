import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor () {}

    getUsers(): Array<{}> {
        return [
            {
                name: 'Dror',
                surname: 'Avidov'
            },
            {
                name: 'Aant',
                surname: 'Avidov'
            }
        ];
    }
}
