Feature: artists

  Scenario: the one where I visit page '/artists'

    Given I visit page "/artists"
    Then I will be in page "/artists"
    And the element ".btn-new" exists
    And the element "table#grid-artists tbody tr" should appear "1" times
    

  Scenario: the one where I visit page '/artists/new'

    Given I visit page "/artists/new"
    Then I will be in page "/artists/new"

  Scenario: the one where I visit page '/artists/edit/1'

    Given I visit page "/artists/edit/1"
    Then I will be in page "/artists/edit/1"
    And the field "#form-artist-name" is filled with "Kenny Rogers"
    And the field "#form-artist-imageurl" is filled with "http://imgurl.co/kenny"
    And the element ".btn-back" exists
    And the element ".btn-submit" exists

  Scenario: the one where I edit an existing artist

    Given I visit page "/artists/edit/1"
    