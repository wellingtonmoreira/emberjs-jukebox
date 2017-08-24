Feature: albums

  Scenario: the one where I visit page '/albums'

    Given I visit page "/albums"
    Then I will be in page "/albums"
    And the element "table#grid-albums tbody tr" should appear "1" times

  Scenario: the one where I visit page '/albums/new'

    Given I visit page "/albums/new"
    Then I will be in page "/albums/new"

  Scenario: the one where I visit page '/albums/edit/1'

    Given I visit page "/albums/edit/1"
    Then I will be in page "/albums/edit/1"
    And the field "#form-album-name" is filled with "Gates of Fried Chicken of Hell"
    And the field "#form-album-artistid" is filled with "1"
    And the field "#form-album-imageurl" is filled with "http://image.massacration.com"