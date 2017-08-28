// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     browser.get('https://angularjs.org');

//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();

//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');

//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });


// describe('Protractor Demo App', function() {
//   it('should add one and two', function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(1);
//     element(by.model('second')).sendKeys(4);

//     element(by.id('gobutton')).click();

//     expect(element(by.binding('latest')).getText()).
//         toEqual('5'); // This is wrong!
//   });
// });




// // spec.js
// describe('Protractor Demo App', function() {
//   var firstNumber = element(by.model('first'));
//   var secondNumber = element(by.model('second'));
//   var goButton = element(by.id('gobutton'));
//   var latestResult = element(by.binding('latest'));

//   beforeEach(function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//   });

//   it('should have a title', function() {
//     expect(browser.getTitle()).toEqual('Super Calculator');
//   });

//   it('should add one and two', function() {
//     firstNumber.sendKeys(1);
//     secondNumber.sendKeys(2);

//     goButton.click();

//     expect(latestResult.getText()).toEqual('3');
//   });

//   it('should add four and six', function() {

//     firstNumber.sendKeys(5);
//     secondNumber.sendKeys(5);

//     goButton.click();



//     expect(latestResult.getText()).toEqual('10');
//   });
// });



// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);

    add(5, 6);

    //expect(history.count()).toEqual(0); // This is wrong!
    expect(history.count()).toEqual(3);
  });


  // it('should have a history', function() {
  //   add(1, 2);
  //   add(3, 4);

  //   expect(history.last().getText()).toContain('1 + 2');
  //   //expect(history.first().getText()).toContain('foo'); // This is wrong!
  //   expect(history.first().getText()).toContain('3 + 4');
  // });












});