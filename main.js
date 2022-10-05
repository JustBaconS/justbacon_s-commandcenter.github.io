 var commands =
  'Name, Background, Canvas, Input Color, Input Border, Colors, Cookies, Resource, Title, Bookmark, Text';
var body = document.querySelector('body');
var input = document.getElementById('prompt');
var nameLabel = document.getElementById('nameLabel');
var dropDownDiv = document.getElementById('dropDownDiv')
var name = '';
var className;
var classLink;
var buttonColor, buttonBorder,textColor;
var e;
var numberOfChar = 0;
var prevText = ""
var classes = [
  'English=https://pfisd.instructure.com/courses/51137',
  'Science=https://pfisd.instructure.com/courses/50056/modules',
  'Math=https://pfisd.instructure.com/courses/51126',
  'Band=https://pfisd.instructure.com/courses/51129',
  'History=https://pfisd.instructure.com/courses/50063',
  'Investigating Careers=https://pfisd.instructure.com/courses/58107',
  'Main=https://classroom.google.com/u/0/c/MTM4OTcxNDY3NTA2',
];
var resources = [
  'Skyward=https://skyward.pfisd.net/StudentSTS/Session/Signin?area=Home&controller=Home&action=Index&logoutreason=TimedOut',
  'Gmail=https://mail.google.com/',
  'Clever=https://clever.com/in/pfisd/student/portal',
  'Typing=https://login.learning.com/'
];
var bookmarks = [];
var consoleDiv = document.getElementById('console');
function writeConsole(message) {
  var element = document.createElement('p');
  consoleDiv.appendChild(element);
  element.className = 'consoleLine';
  element.style.fontSize = '20px';
  element.innerHTML = message;
  setTimeout(function () {
    element.remove();
  }, 12000);
}
var cookiearray;
cookiearray = document.cookie.split(';');
for (var i = 0; i < cookiearray.length; i++) {
  if (cookiearray[i].indexOf('name=') > -1) {
    var array = cookiearray[i].split('=');
    name = array[1];
    nameLabel.innerHTML = 'Hello ' + name;
  }
  if (cookiearray[i].indexOf('backgroundcolor=') > -1) {
    var array = cookiearray[i].split('=');
    body.style.background = array[1];
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "100% 130%"
  }
  if (cookiearray[i].indexOf('bookmarks=') > -1) {
    var array = cookiearray[i].split('=');
    bookmarks = array[1];
  }
  if(cookiearray[i].indexOf("title") > -1){
    var array = cookiearray[i].split('=')
    document.title = array[1]
  }
  if(cookiearray[i].indexOf("title") > -1){
    var array = cookiearray[i].split('=')
    textColor = array[1]
  }
}
function newTab(link) {
  window.open(link, '_blank');
  writeConsole('Sent to ' + link);
}
function cc(cookiee, value) {
  document.cookie = cookiee + '=' + value;
}
function work() {
  var command = document.getElementById('prompt').value;
  var z = command.split(' ');
  var commandName = z[0].toLowerCase();
  var args = [];
  for (var i = 0; i < command.length; i++) {
    if (z[i] && z[i] != commandName) {
      args.push(z[i]);
    }
  }
  if (document.getElementById('classesDiv')) {
    document.getElementById('classesDiv').remove();
  }
  if (command) {
    var commandSplit = command.split(' ');
    commandSplit[0] = commandSplit[0].toLowerCase();
    if (commandName == 'name') {
      if (args) {
        var stringPog = '';
        for (var i = 0; i < args.length; i++) {
          stringPog = stringPog + args[i] + ' ';
        }
        cc('name', stringPog);
        nameLabel.innerHTML = 'Hello ' + stringPog;
        writeConsole("Change name to "+stringPog)
      } else {
        writeConsole('Change what I call you');
      }
    }
    if (commandName == 'background') {
      if (args) {
        var stringPog = '';
        for (var i = 0; i < args.length; i++) {
          stringPog = stringPog + args[i] + " ";
        }
        var request = stringPog;
        body.style.background = request;
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100% 130%"
        cc('backgroundcolor', request);
        if (body.style.background == request) {
          writeConsole('Background changed to ' + request + ' successfully');
        } else {
          writeConsole(request + ' is not a valid color');
        }
      } else {
        writeConsole('Change the background color');
      }
    }
    if (commandName == 'canvas') {
      var stringPog = '';
      for (var i = 0; i < args.length; i++) {
        stringPog = stringPog + args[i] + " ";
      }
      var request = stringPog
      for (var i = 0; i < classes.length; i++) {
        var cla = classes[i];
        var className = cla.split('=')[0];
        var classLink = cla.split('=')[1];
        if (request.toLowerCase().trim() == className.toLowerCase().trim()) {
          newTab(classLink);
        }
      }
    }
    if (commandName == 'bookmark') {
      var whichOne = args[0].toLowerCase();
      if (whichOne == 'push') {
        var name = args[1];
        var value = '';
        if (name) {
          for (var i = 2; i < args.length; i++) {
            value = value + args[i] + ' ';
          }
          bookmarks.push(name + '=' + value);
          writeConsole(bookmarks);
          cc('bookmark', bookmarks);
        }
      }
      if (whichOne == 'pop') {
        var name = args[1];
        for (var i = 2; i < args.length; i++) {
          if (args[i] == name) {
            bookmarks[i] = '';
          }
        }
      }
      if (whichOne == '' || whichOne == 'list') {
        var stringPog = '';
        for (var i = 0; i < bookmarks.length; i++) {
          stringPog = stringPog + bookmarks[i];
        }
        writeConsole(stringPog)
      }
    }
    if (commandSplit[0] == 'brah') {
      writeConsole(
        'Did you know that Jacob once said that while I was working on this project, I did not know why but he did it...'
      );
    }
    if (commandName == "input") {
      if(args && args[1]){
      var request = args[0]
      var color = args[1].toLowerCase()
      if(request == "color" || request == "background"){
        buttonColor = color
      }
      if(request == "border"){
        buttonBorder = color
      }
    }
    }
    if (command.indexOf('colors') > -1) {
      newTab('http://www.javascripter.net/faq/colornam.htm?t1=aliceblue');
    }
    if (command.indexOf('cookies') > -1) {
      writeConsole(document.cookie);
    }
    if (command.indexOf('website') > -1) {
      newTab('http://sheeeesh.com');
    }
    if (command.indexOf('stackblitz') > -1) {
      newTab('http://stackblitz.com');
    }
    if (commandSplit[0].indexOf('resource') > -1) {
      var a = commandSplit[1].toLowerCase();
      for (var i = 0; i < resources.length; i++) {
        var resource = resources[i];
        var resourceSplit = resource.split('=');
        var name = resourceSplit[0].toLowerCase();
        var link = resourceSplit[1];
        if (a == name) {
          newTab(link);
        }
      }
    }
    if (commandSplit[0] == 'title') {
      var request = commandSplit[1];
      document.title = request;
      if (document.title == request) {
        cc("title",request)
        writeConsole(`Changed document title to "` + request + `"`);
      }
    }
    if(commandSplit[0] == "text"){
      var request = args[0]
      textColor = request
      cc("text", textColor)
      writeConsole("Change to "+request)
    }
    if(commandSplit[0] == "write"){
      var stringPog = '';
      for (var i = 0; i < args.length; i++) {
        stringPog = stringPog + args[i] + " ";
      }
      writeConsole(stringPog)
    }
  }
}
body.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    work();
  }
  if (e.key == 'Control') {
    var highest;
    var highestNumber = 0;
    var commandsSplit = commands.toLowerCase().split(', ');
    for (var i = 0; i < commandsSplit.length; i++) {
      var commandLetters = commandsSplit[i].toLowerCase().split('');
      for (var a = 0; a < commandLetters.length; a++) {
        if (
          commandLetters[a].toLowerCase() ==
          input.value.toLowerCase().split('')[a]
        ) {
          numberOfChar++;
        } else {
          break;
        }
      }
      if (numberOfChar > highestNumber) {
        highest = commandsSplit[i];
        highestNumber = numberOfChar;
      }
      numberOfChar = 0;
    }
    if (highest) {
      input.value = highest;
    }
  }
});
var text = document.querySelectorAll("p","h1")
var loop = setInterval(function () {
  var buttons = document.querySelectorAll('input');
  var alltext = document.querySelectorAll("p")
  var allElements = document.querySelectorAll("*")
  var text = input.value
  /*if(text){
  var commandsSplit = commands.split(", ")
  if(prevText != text){
    writeConsole("changed")
    var list = {}
    for(var i=0;i<allElements.length;i++){
      if(allElements[i].className == "promptDropdown"){
        allElements[i].remove()
      }
    }
    //Setting up all the places
    for(var i=1;i<commandsSplit.length;i++){ 
      list[i] = {Value:i, Name:commandsSplit[i], characters:0} 
      writeConsole(list[i]["Value"])
    }
    //Assigning vales to places
    for(var i=0;i<commandsSplit.length;i++){
      var commandLetters = commandsSplit[i].toLowerCase().split('');
      for (var a = 0; a < commandLetters.length; a++) { 
        if (commandLetters[a].toLowerCase() == input.value.toLowerCase().split('')[a]) {
          numberOfChar++;
        }
      }
      for(var a=0 in list){
        writeConsole("loop")
        var b = list[a]
        writeConsole(numberOfChar+";"+b.Value)
        if(b == "" || numberOfChar >= b.characters){
          writeConsole("If statement passed")
          if(list[a-1]){
          list[a-1].Name = b.Name
          list[a-1].Value = b.Value
          writeConsole("Prev "+list[a-1])
          }
          b.Name = commandsSplit[i]
          b.Value = numberOfChar 
          writeConsole("Now "+b.Value)
        }
      }
      numberOfChar = 0;
    }
  
  }
}
*/

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.style.background = buttonColor;
    button.style.borderColor = buttonBorder;
  }
  for(var i=0;i<alltext.length;i++){
    alltext[i].style.color = textColor
  }
  prevText = text
}, 1);
