$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("virginfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Test VirginGame",
  "description": "I as a user test virgin game test",
  "id": "test-virgingame",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4109688600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": ": I am on virgin game homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I have to accept cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I can see virgin game homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iHaveToAcceptCookies()"
});
formatter.result({
  "duration": 167882200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iCanSeeVirginGameHomepage()"
});
formatter.result({
  "duration": 287046100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I am on virgin homepage",
  "description": "",
  "id": "test-virgingame;i-am-on-virgin-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have to click on OnlineSlot",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on OnlineSlot",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see message \"Play Online Slots at Virgin Games\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iHaveToClickOnOnlineSlot()"
});
formatter.result({
  "duration": 12900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnOnlineSlot()"
});
formatter.result({
  "duration": 142482100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Play Online Slots at Virgin Games",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iCanSeeMessage(String)"
});
formatter.result({
  "duration": 244418900,
  "status": "passed"
});
formatter.after({
  "duration": 68700,
  "status": "passed"
});
});