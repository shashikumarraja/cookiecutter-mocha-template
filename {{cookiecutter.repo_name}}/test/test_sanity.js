describe('Test Sanity of Suite', function() {
    it('should test a string', function(){
        expect(testData.name).to.be.a('string');
    });
    it('should test age', function(){
        expect(testData.age).to.be.a('number').and.to.be.above(5);
    });
});