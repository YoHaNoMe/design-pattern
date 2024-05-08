class NewsLetter{
    private _name: string;
    private observers: Reader[] = [];

    constructor(name: string){
        this._name = name;
    }

    subscribe(reader: Reader){
        this.observers.push(reader);
    }

    notify(event: any){
        for(const obs of this.observers){
            obs.sendNotification(this, event);
        }
    }

    get name(): string{
        return this._name;
    }
}


class Reader{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    sendNotification(newsLetter: NewsLetter, event: any){
        console.log(`User: ${this.name} recieved notification from NewsLetter: ${newsLetter.name} with Event: ${event}`)
    }

    getName(): string{
        return this.name;
    }
}


const reader1 = new Reader('reader 1');
const reader2 = new Reader('reader 2');
const reader3 = new Reader('reader 3');

const newsLetter = new NewsLetter('Al NewsLetter');

newsLetter.subscribe(reader1);
newsLetter.subscribe(reader2);
newsLetter.subscribe(reader3);

newsLetter.notify('Hurry up!!');