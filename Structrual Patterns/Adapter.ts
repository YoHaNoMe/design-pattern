class MyResponse{
    name: string;
    id: number;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

class APIs{

    sendResponse(): MyResponse{
        return {name: 'youssef', id: 1};
    }
}


class ExternalAPIs{

    sendResponse(){
        return {id: 1};
    }
}

class Adapter{
    convertExternalToInternal(response: {id: number}){
        return new MyResponse(response.id, 'testName');
    }
}


const myAPIs = new APIs();

const myResponse = myAPIs.sendResponse();

const externalAPIs = new ExternalAPIs();

const externalResponse = externalAPIs.sendResponse();

// convert external response comming from external API to my response
const adapter = new Adapter();
const myResponse2 = adapter.convertExternalToInternal(externalResponse);

console.log(myResponse, externalResponse, myResponse2);
