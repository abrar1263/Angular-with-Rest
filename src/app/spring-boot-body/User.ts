export class User{
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public pinCode?: string,
        public dob?: any,
        public joiningDate? :any,
        public deleteStatus?:Boolean

    ){
    }
}