describe("Interaction with web element", function(){

    it("enter value in field", function(){
        browser.url("https://www.amazon.com/");
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple mac book');

    })



})