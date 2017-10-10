export class Alert {
    type: string;
    msg: string;
    timeout: number;

    constructor(type: string, msg: string) {
        this.type = type;
        this.msg = msg;
        this.timeout = 6000;
    }
}
