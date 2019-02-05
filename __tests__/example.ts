import {Canary} from "../src/example";

describe("Canary test", ()=>{
    it("test sum function", ()=>{
        expect(Canary.sum(1,2,3)).toEqual(6);

        /*
         * can't use string as argument, since we set the type ( number )
         * expect(Canary.sum("1","2","3")).toEqual(6);
         */
    });
});