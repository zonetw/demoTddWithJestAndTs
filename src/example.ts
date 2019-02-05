export class Canary{
    public static sum(...args: number[]){
        return args.reduce((sum, el)=>{
            return sum + el;
        })
    }
}