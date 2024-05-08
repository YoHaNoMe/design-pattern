class MyText{

    @ItalicDecorator
    @BoldDecorator
    printText(text: string){
        console.log(text);
    }
}



function BoldDecorator(originalMethod: any, ctx: ClassMemberDecoratorContext){
    function replacementMethod(this: any, ...args: any[]){
        console.log('add bold to text');
        return originalMethod.call(this, ...args); 
    }

    return replacementMethod;
}

function ItalicDecorator(originalMethod: any, ctx: ClassMemberDecoratorContext){

    function replacementMethod(this: any, ...args: any[]){
        console.log('add italic to text');
        return originalMethod.call(this, ...args); 
    }

    return replacementMethod;
}

const text = new MyText();

text.printText('hello world');