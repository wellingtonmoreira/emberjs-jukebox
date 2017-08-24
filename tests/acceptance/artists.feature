Feature: artists

  Scenario: the one where I visit page '/artists'

    Given I visit page "/artists"
    Then I will be in page "/artists"

  Scenario: the one where I visit page '/artists/new'

    Given I visit page "/artists/new"
    Then I will be in page "/artists/new"

  Scenario: the one where I visit page '/artists/edit/1'

    Given I visit page "/artists/edit/1"
    Then I will be in page "/artists/edit/1"