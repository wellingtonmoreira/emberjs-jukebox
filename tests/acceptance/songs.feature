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

  Scenario: the one where I edit an existing song

    Given I visit page "/songs"
    And the element ".item-song-1-id" contains text "1"
    And the element ".item-song-1-title" contains text "Plush"
    And the element ".item-song-1-album" contains text "Gates of Fried Chicken of Hell"
    And I click on ".item-song-1-edit"
    When I fill the field "#form-song-title" with "Speedway"
    And I fill the field "#form-song-albumid" with "0"
    And I click on ".btn-submit"
    Then I will be in page "/songs"
    And the element ".item-song-1-id" contains text "1"
    And the element ".item-song-1-title" contains text "Speedway"
    And the element ".item-song-1-album" is empty"

  Scenario: the one where I create a new song

    Given I visit page "/songs"
    And the element "table#grid-songs tbody tr" should appear "1" times
    And I click on ".btn-new"
    When I fill the field "#form-song-title" with "Superheroes"
    And I fill the field "#form-song-albumid" with "1"
    When I click on ".btn-submit"
    Then I will be in page "/songs"
    And the element "table#grid-songs tbody tr" should appear "2" times
    And the element ".item-song-2-id" contains text "2"
    And the element ".item-song-2-title" contains text "Superheroes"
    And the element ".item-song-2-album" contains text "Gates of Fried Chicken of Hell"

  Scenario: the one where I delete an existing song

    Given I visit page "/songs"
    And the element "table#grid-songs tbody tr" should appear "1" times
    When I click on ".item-song-1-delete"
    Then the element "table#grid-songs tbody tr" should appear "0" times

  Scenario: the one where I go back from new album
    Given I visit page "/songs/new"
    When I click on ".btn-back"
    Then I will be in page "/songs"
    And the element "table#grid-songs tbody tr" should appear "1" times

  Scenario: the one where I go back from edit album
    Given I visit page "/songs/edit/1"
    And I fill the field "#form-song-title" with "Superheroes"
    And I fill the field "#form-song-albumid" with "1"
    When I click on ".btn-back"
    Then I will be in page "/songs"
    And the element "table#grid-songs tbody tr" should appear "1" times
    And the element ".item-song-1-id" contains text "1"
    And the element ".item-song-1-title" contains text "Plush"
    And the element ".item-song-1-album" contains text "Gates of Fried Chicken of Hell"