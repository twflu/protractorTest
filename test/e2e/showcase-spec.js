describe('protractor test', function(){
    beforeEach(function () {
        browser.get('http://127.0.0.1:9000/#/');
    });

    it('should return the title', function(){
        var nameField = element(by.model('name'));
        var nameLabel = element(by.binding('name'));
        nameField.sendKeys('yzzhou');
        expect(nameLabel.getText()).toBe('yzzhou');

        var h1 = element(by.css('h1'));
        expect(h1.getText()).toBe('yzzhou1');
    });

    it('repeater', function(){
        var firstLine = element(by.repeater('thing in awesomeThings').row(0));
        var secondLine = element(by.repeater('thing in awesomeThings').row(1));
        expect(firstLine.getText()).toBe('HTML5 Boilerplate');
        expect(secondLine.getText()).toBe('AngularJS');
    });
});
