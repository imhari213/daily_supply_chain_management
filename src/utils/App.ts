export class App {
    private static uniqueId: number = 0;

    public static UniqueNumber(): string {
        var time: number = new Date().getTime();
        if(this.uniqueId == time){
            while(new Date().getTime() < 1 + time) {;}
            time = new Date().getTime();;
        }
        this.uniqueId = time;
        return time.toString(36).toUpperCase();
    }

    public static Send(req:any, res:any, promise:any) {
            var respObj: any = {};
            promise.then( data => {
                respObj.status = 1;
                respObj.data =  data;
                res.jsonp(respObj);
            }).catch( err => {
                console.log(err);
                respObj.status = 0;
                respObj.error = err;
                res.jsonp(respObj);
            });
    }
}
