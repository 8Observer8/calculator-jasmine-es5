describe("Calculator", function()
{
    it("Add_SumPositiveNumbers_ReturnsSum", function()
    {
        // Arrange
        var calculator = new Calculator();
        var a = 5;
        var b = 2;
        var expectedSum = 7;

        // Act
        var actualSum = calculator.Add(a, b);

        // Assert
        expect(actualSum).toEqual(expectedSum);
    });

    it("Sub_SubtractPositiveNumbers_ReturnsSub", function()
    {
        // Arrange
        var calculator = new Calculator();
        var a = 5;
        var b = 2;
        var expectedSub = 3;

        // Act
        var actualSub = calculator.Sub(a, b);

        // Assert
        expect(actualSub).toEqual(expectedSub);
    });
});