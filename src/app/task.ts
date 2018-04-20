export class Task {
    constructor(
        public _id: string,
        public name: string,
        public Created_date: Date,
        public __v: number,
        public status: string[]
    ){}
}
