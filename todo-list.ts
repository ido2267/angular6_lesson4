export class TodoList {
    
    public title:string;
    public userId:number;

    constructor(_title:string,_userId:number){
        this.userId = _userId;
        this.title = _title;

    }
}
