import {getLocation} from "./js/getLocation.js"

describe("Check that getLocation is called with input", () => {
    
    test('getLocetion', () => {
        
        expect(getLocation).toBeCalledWith(expect.anything());
    
})});