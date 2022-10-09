var colors = `aliceblue, antiquewhite, aqua, aquamarine, azure, beige, bisque, black, blanchedalmond, blue, blueviolet, brown, burlywood, cadetblue, chartreuse, chocolate, coral, cornflowerblue, cornsilk, crimson, cyan, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen, darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon,  darkseagreen, darkslateblue, darkslategray, darkturquoise, darkviolet, deeppink, deepskyblue, dimgray, dodgerblue, firebrick, floralwhite, forestgreen, fuchsia, gainsboro, ghostwhite, gold, goldenrod, gray, green, greenyellow, honeydew, hotpink, indianred, indigo, ivory, khaki, lavender, lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral, lightcyan, lightgoldenrodyellow, lightgreen, lightgrey, lightpink, lightsalmon, lightseagreen, lightskyblue, lightslategray, lightsteelblue, lightyellow, lime, limegreen, linen, magenta, maroon, mediumaquamarine, mediumblue, mediumorchid, mediumpurple, mediumseagreen, mediumslateblue, mediumspringgreen, mediumturquoise, mediumvioletred, midnightblue, mintcream, mistyrose, moccasin, navajowhite, navy, oldlace, olive, olivedrab, orange, orangered, orchid, palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip, peachpuff, peru, pink, plum, powderblue, purple, red, rosybrown, royalblue, saddlebrown, salmon, sandybrown, seagreen, seashell, sienna, silver, skyblue, slateblue, slategray, snow, springgreen, steelblue, tan, teal, thistle, tomato, turquoise, violet, wheat, white, whitesmoke, yellow, yellowgreen`
var commands = {
  "Name":{Name:"Name", Description:"Changes what I call you.", Arguments:""},
  "Background":{Name:"Background", Description:"Changes the background of this website", Arguments:"linear-gradient(, radial-gradient(, conic-gradient(, url(, "+colors},
  "Canvas":{Name:"Canvas", Description:"Goes to a class page(mainly for me, the owner, to get to my classes faster).", Arguments:"English, Science, Math, Band, History, Investigating Careers, Main"},
  "Cookies":{Name:"Cookies", Description:"Print all the cookies you have", Arguments:""},
  "Resource":{Name:"Resource", Description:"Goes to a resource I use commonly", Arguments:"Skyward, Gmail, Clever, Sora"},
  "Title":{Name:"Title", Description:"Rename document title", Arguments:""},
  "Text":{Name: "Text", Description:"Change all text color", Arguments:colors},
  "Write":{Name: "Write", Description:"Print something of your choice", Arguments:""},
  "Help":{Name:"Help", Description:"Tells you all the commands or one specific", Arguments:"Name, Background, Canvas, Cookies, Resource, Title, Text, Write, Help, Update"},
  "Update":{Name:"Update", Description:"Tells you the latest versions updates", Arguments:""}
}
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var today = new Date
var somethings = `
Version 2 has 440 Lines of code!; 
Today is `+days[today.getDay()]+`!; 
Probably working on this project right now.; 
I got first place on a typing competition once, sad times; 
There is probably an error in my code right now, gotta fix it!; 
I'm probably procrassinating something right now; 
I'm not really a school person, but my grades are decent; 
Did you know the nearest black hole is 1500 light years away from earth called Gaia BH1, you can search it up if you want; 
Did you know this url was named after my roblox name "JustBacon_S"; 
Did you know that this website used to be buttons linking to my classes, but I changed it because I prefer the input element instead.; 
Did you know I am 13 years old :/; 
The drop down menu in this website was inspired by Minecraft's command system, big thanks to them.; 
Version 3 sneak peak, there will be drop downs for arguments. It is really hard to code for me and I want to release updates weekly; 
I started this project on September 29th I think.;  
Did you know that you can use the "Update" command to see all latest versions updates.; 
`
var updateLogs = `
Major:
Redid new arguments work,
Autocomplete arguments by pressing "Control", 
3 New Commands "Help", "Random", and "Update", 
New drop down bar(Hit tab to select through them).
Minor:
Fixed the argement removal thing when you hit control, 
New Resource("Sora"), 
Console Overfill Fixxed, 
Removed resouce "Typing", 
Removed command "Bookmark", 
Fixxed not having arguments erroring the website, 


`
var body = document.querySelector('body');
var input = document.getElementById('prompt');
var nameLabel = document.getElementById('nameLabel');
var dropDownDiv = document.getElementById('dropDownDiv')
var mainDiv = document.getElementById("mainDiv")
var name = '';
var className;
var classLink;
var buttonColor, buttonBorder,textColor;
var e;
var docWidth = body.style.width;var docHeight = body.style.height
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
  'Sora=https://soraapp.com/library/pfisd'
];
var bookmarks = [];
var consoleDiv = document.getElementById('console');
function writeConsole(message, timeout) {
  if(timeout == null){
    timeout = 12000
  }
  console.log(timeout)
  var element = document.createElement('p');
  consoleDiv.appendChild(element);
  element.className = 'consoleLine';
  element.style.fontSize = '20px';
  element.innerHTML = message;
  setTimeout(function () {
    element.remove();
  }, timeout);
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
mainDiv.style.width=docWidth;mainDiv.style.height=docWidth
function newTab(link) {
  window.open(link, '_blank');
  writeConsole('Sent to ' + link);
}
function cc(cookiee, value) {
  document.cookie = cookiee + '=' + value;
}
function work() {
  var command = input.value
    var z = command.split(' ');
    var commandName = z[0].toLowerCase();
    var args = [];
    for (var i = 0; i < command.length; i++) {
      if (z[i] && z[i] != " " && i != 0) {
        args.push(z[i].trim());
      }
    }
  if (command) {
    var commandSplit = command.split(' ');
    if (commandName == 'name' && args[0]) {
        var stringPog = '';
        for (var i = 0; i < args.length; i++) {
          stringPog = stringPog + args[i] + ' ';
        }
        cc('name', stringPog);
        nameLabel.innerHTML = 'Hello ' + stringPog;
        writeConsole("Change name to "+stringPog)
      }
    if (commandName == 'background' && args[0]) {
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
    }
    if (commandName == 'canvas' && args[0]) {
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
    if (commandName == 'brah') {
      writeConsole(
        'Did you know that Jacob once said that while I was working on this project, I did not know why but he did it...'
      );
    }
    if (commandName == "colors") {
      newTab('http://www.javascripter.net/faq/colornam.htm?t1=aliceblue');
    }
    if (commandName == "cookies") {
      writeConsole(document.cookie);
    }
    if (commandName == "website") {
      newTab('http://sheeeesh.com');
    }
    if (commandName == "stackblitz") {
      newTab('http://stackblitz.com');
    }
    if (args[0] && commandName == "resource") {
      var a = commandSplit[1].toLowerCase();
      for (var i = 0; i < resources.length; i++) {
        var resource = resources[i];
        var resourceSplit = resource.split('=');
        var name = resourceSplit[0].toLowerCase();
        var link = resourceSplit[1]
        if (a == name) {
          newTab(link);
        }
      }
    }
    if (args[0] && commandName == 'title') {
      var stringPog = '';
      for (var i = 0; i < args.length; i++) {
        stringPog = stringPog + args[i] + " ";
      }
      document.title = stringPog;
      cc("title",stringPog)
      writeConsole(`Changed document title to "` + stringPog + `"`);
    }
    if(args[0] && commandName == "text"){
      var stringPog = '';
      for (var i = 0; i < args.length; i++) {
        stringPog = stringPog + args[i] + " ";
      }
      textColor = stringPog
      cc("text", textColor)
      writeConsole("Changed to "+stringPog)
    }
    if(args[0] && commandName == "write"){
      var stringPog = '';
      for (var i = 0; i < args.length; i++) {
        stringPog = stringPog + args[i] + " ";
      }
      writeConsole(stringPog)
    }
    if(commandName == "help"){
      if(args[0]==null){
        for(var i in commands){
          if(commands[i]){
            writeConsole(commands[i]["Name"]+": "+commands[i]["Description"])
          }
        }
      }
      else{
        if(args[0]){
          for(var i in commands){
            if(commands[i]["Name"]==args[0]){
              writeConsole(commands[i]["Name"]+": "+commands[i]["Description"])
            }
          }
        }
      }
    }
    if(commandName == "update" || commandName == "updatelog"){
      writeConsole(updateLogs, 24000)
    }
    if(commandName == "random"){
      var sSplit = somethings.split("; ")
      var a = Math.random() * (sSplit.length-0) + 0
      for(var i=0; i<sSplit.length;i++){
        if(i-1==Math.round(a)){
          writeConsole(sSplit[Math.round(a)])
        }
      }
    }
  }
}
body.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    work();
    setTimeout(function(){
      input.focus()
    },100)
  }
  if (e.key == 'Control') {
    var command = input.value
    var z = command.split(' ');
    var commandName = z[0].toLowerCase();
    var args = [];
    for (var i = 0; i < command.length; i++) {
      if (z[i] && z[i].toLowerCase() != commandName.toLowerCase()) {
        args.push(z[i]);
      }
    }
    if(args[0] == null){
    var highest;
    var highestNumber = 0;
    for (var i in commands) {
      var commandLetters = commands[i]["Name"].toLowerCase().split('');
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
        highest = commands[i]["Name"];
        highestNumber = numberOfChar;
      }
      numberOfChar = 0;
    }
    if (highest) {
      input.value = highest;
    }
    
  } else {
    if(args[0]){
      var commandsSplit = input.value.split(" ")
      var cArgs
      var numberOfChars = 0
      var highesta
      var highestNumbera = 0
      for(var i in commands){
        if(commands[i]["Name"].toLowerCase() == commandName.toLowerCase()){
          cArgs = commands[i]["Arguments"]
        }
      }
      var allArgs = cArgs.split(", ")
     for(var i=0;i<allArgs.length;i++){
       var lettersArg = allArgs[i].toLowerCase().split("")
       for(var a=0;a<lettersArg.length;a++){
       if(lettersArg[a] == commandsSplit[1].toLowerCase().split("")[a]){
          numberOfChar++
       }
       else{
         break;
       }
       if(numberOfChar > highestNumbera){
         highestNumbera = numberOfChar
         highesta = allArgs[i]
       }
      }
       numberOfChar = 0
     }

     if(highesta){
      input.value = commandsSplit[0] +" "+ highesta
      }
      }
  }
}
});
var text = document.querySelectorAll("p","h1")
var loop = setInterval(function () {
  var command = input.value
  var z = command.split(' ');
  var commandName = z[0].toLowerCase();
  var args = [];
  var commandsSplit = input.value.split(" ")
    for (var i = 0; i < commandsSplit.length; i++) {
      if (z[i] && z[i].toLowerCase() != commandName.toLowerCase()) {
        args.push(z[i]);
      }
    }
  var buttons = document.querySelectorAll('input');
  var alltext = document.querySelectorAll("p")
  var allElements = document.querySelectorAll("*")
  var text = input.value
  var ah = 0
  if(text && text != prevText){
    for(var i=0;i<allElements.length;i++){
      if(allElements[i].className == "dropDownButton"){
        allElements[i].remove()
      }
    }
    for (var i in commands) {
      if(args[0] == null){
      var inputLetters =  commandName.toLowerCase().split('');
      for (var a = 0; a < inputLetters.length; a++) {
        if (inputLetters[a] == commands[i]["Name"].toLowerCase().split('')[a]) {
          ah++
        } else {
          break;
        }
        if(ah == inputLetters.length){
          var b = document.createElement("button")
          dropDownDiv.appendChild(b)
          b.className = "dropDownButton"
          b.textContent = commands[i]["Name"]
          b.addEventListener("click", function(){
            input.value = this.textContent
          })
        }
      }
      ah = 0
    }/*else{
      if(args[0]){
        var commandsSplit = input.value.split(" ")
      var cArgs
      var numberOfChar = 0
      for(var i in commands){
        if(commands[i]["Name"].toLowerCase() == commandName.toLowerCase()){
          cArgs = commands[i]["Arguments"]
        }
      }
      var allArgs = cArgs.split(", ")
      //Here
     for(var i=0;i<allArgs.length;i++){
       var lettersArg = allArgs[i].toLowerCase().split("")
       var lettersText = commandsSplit[1].toLowerCase().split("")
       writeConsole(lettersText.length)
       for(var a=0;a<lettersText.length;a++){
       if(lettersText[a] == lettersArg[a]){
          numberOfChar++
          
       }
       else{
         break;
       }
      }
      if(numberOfChar == lettersText.length){
        var b = document.createElement("button")
        dropDownDiv.appendChild(b)
        b.className = "dropDownButton"
        b.textContent = allArgs[i]
        b.addEventListener("click", function(){
          input.value = this.textContent
        })
       }
       numberOfChar = 0
     }
     
      }
    }
    */
  }
}
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
