export class Document {
    id: number;
    create_date: Date;
    create_user: number;
    update_date: Date;
    update_user: number;
    status: number;
    version: number;
    comments: number[];
    likes: number[];
    name: string;
    file_path: string;

    constructor(
        id: number, create_date: Date, create_user: number, update_date: Date, update_user: number, status: number, version: number,
        comments: number[], likes: number[]
        , name: string, file_path: string) {
            this.id = id;
            this.create_date = create_date;
            this.create_user = create_user;
            this.update_date = update_date;
            this.update_user = update_user;
            this.status = status;
            this.version = version;
            this.comments = comments;
            this.likes = likes;
            this.name = name;
            this.file_path = file_path;
      }
}
