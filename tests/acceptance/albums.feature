Feature: albums

  Scenario: the one where I visit page '/albums'

    Given I visit page "/albums"
    Then I will be in page "/albums"
    And the element ".btn-new" exists
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
    And the element ".btn-back" exists
    And the element ".btn-submit" exists

  Scenario: the one where I edit an existing album

    Given I visit page "/albums"
    And the element ".item-album-1-id" contains text "1"
    And the element ".item-album-1-name" contains text "Gates of Fried Chicken of Hell"
    And the element ".item-album-1-artist" contains text "Kenny Rogers"
    And the element ".item-album-1-image" contains text "http://image.massacration.com"
    And I click on ".item-album-1-edit"
    When I fill the field "#form-album-name" with "Ok Computer"
    And I fill the field "#form-album-imageurl" with "http://radiohead.co/"
    And I fill the field "#form-album-artistid" with "0"
    And I click on ".btn-submit"
    Then I will be in page "/albums"
    And the element ".item-album-1-id" contains text "1"
    And the element ".item-album-1-name" contains text "Ok Computer"
    And the element ".item-album-1-image" contains text "http://radiohead.co/"
    And the element ".item-album-1-artist" is empty"

  Scenario: the one where I create a new album

    Given I visit page "/albums"
    And the element "table#grid-albums tbody tr" should appear "1" times
    And I click on ".btn-new"
    And I fill the field "#form-album-name" with "Supernatural"
    And I fill the field "#form-album-imageurl" with "http://imgurl.co/supernatural"
    And I fill the field "#form-album-artistid" with "1"
    When I click on ".btn-submit"
    Then I will be in page "/albums"
    And the element "table#grid-albums tbody tr" should appear "2" times
    And the element ".item-album-2-id" contains text "2"
    And the element ".item-album-2-name" contains text "Supernatural"
    And the element ".item-album-2-image" contains text "http://imgurl.co/supernatural"

  Scenario: the one where I delete an existing album

    Given I visit page "/albums"
    And the element "table#grid-albums tbody tr" should appear "1" times
    When I click on ".item-album-1-delete"
    Then the element "table#grid-albums tbody tr" should appear "0" times

  Scenario: the one where I go back from new album
    Given I visit page "/albums/new"
    When I click on ".btn-back"
    Then I will be in page "/albums"
    And the element "table#grid-albums tbody tr" should appear "1" times

  Scenario: the one where I go back from edit album
    Given I visit page "/albums/edit/1"
    And I fill the field "#form-album-name" with "Supernatural"
    And I fill the field "#form-album-imageurl" with "http://imgurl.co/supernatural"
    And I fill the field "#form-album-artistid" with "0"
    When I click on ".btn-back"
    Then I will be in page "/albums"
    And the element "table#grid-albums tbody tr" should appear "1" times
    And the element ".item-album-1-id" contains text "1"
    And the element ".item-album-1-name" contains text "Gates of Fried Chicken of Hell"
    And the element ".item-album-1-artist" contains text "Kenny Rogers"
    And the element ".item-album-1-image" contains text "http://image.massacration.com"