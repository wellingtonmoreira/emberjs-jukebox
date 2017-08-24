Feature: albums

  Scenario: the one where I visit page '/albums'

    Given I visit page "/albums"
    Then I will be in page "/albums"

  Scenario: the one where I visit page '/albums/new'

    Given I visit page "/albums/new"
    Then I will be in page "/albums/new"

  Scenario: the one where I visit page '/albums/edit/1'

    Given I visit page "/albums/edit/1"
    Then I will be in page "/albums/edit/1"