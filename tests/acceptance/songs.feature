Feature: songs

  Scenario: the one where I visit page '/songs'

    Given I visit page "/songs"
    Then I will be in page "/songs"
    And the element ".btn-new" exists
    And the element "table#grid-songs tbody tr" should appear "1" times

  Scenario: the one where I visit page '/songs/new'

    Given I visit page "/songs/new"
    Then I will be in page "/songs/new"

  Scenario: the one where I visit page '/songs/edit/1'

    Given I visit page "/songs/edit/1"
    Then I will be in page "/songs/edit/1"
    And the field "#form-song-albumid" is filled with "1"
    And the field "#form-song-title" is filled with "Plush"
    And the element ".btn-back" exists
    And the element ".btn-submit" exists