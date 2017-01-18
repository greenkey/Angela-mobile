describe('Viewing the message ', function(){
    var username, password, loginButton;

    beforeEach(function() {
        browser.get('/');
    });

    it('should show the message', function() {
        var message = element(by.css('#message'));
        expect(message.isDisplayed()).toBeTruthy();
        message.getText().then(function(text) {
            expect(text.length).toBeGreaterThan(10);
        });
    })

});
