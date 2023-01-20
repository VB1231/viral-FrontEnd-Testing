Feature: Test VirginGame
  I as a user test virgin game test
  Background: : I am on virgin game homepage
    Given I have to accept cookies
    Then I can see virgin game homepage
    Scenario: I am on virgin homepage
      Given I have to click on OnlineSlot
      When I click on OnlineSlot
      Then I can see message "Play Online Slots at Virgin Games"