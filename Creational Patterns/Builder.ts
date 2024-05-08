class Button{
    private text: string;
    private color: string;
    private bgColor: string;

    setText(text: string){
        this.text = text;
        return this;
    }

    setColor(color: string){
        this.color = color;
        return this;
    }

    setBackgroundColor(bgColor: string){
        this.bgColor = bgColor;
        return this;
    }

    build(){
        return this;
    }
}


const button = new Button().setText('hello world').setBackgroundColor('#0000').setColor('#ffff').build();

console.log(button);