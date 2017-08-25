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

    Given I visit page "/artists"
    And the element ".item-artist-1-id" contains text "1"
    And the element ".item-artist-1-name" contains text "Kenny Rogers"
    And the element ".item-artist-1-image" contains text "http://imgurl.co/kenny"
    And I click on ".item-artist-1-edit"
    When I fill the field "#form-artist-name" with "Lenny Dodgers"
    And I fill the field "#form-artist-imageurl" with "http://imgurl.co/lenny"
    And I click on ".btn-submit"
    Then I will be in page "/artists"
    And the element ".item-artist-1-id" contains text "1"
    And the element ".item-artist-1-name" contains text "Lenny Dodgers"
    And the element ".item-artist-1-image" contains text "http://imgurl.co/lenny"

  Scenario: the one where I create a new artist

    Given I visit page "/artists"
    And the element "table#grid-artists tbody tr" should appear "1" times
    And I click on ".btn-new"
    And I fill the field "#form-artist-name" with "Joe Satriani"
    And I fill the field "#form-artist-imageurl" with "http://imgurl.co/satriani"
    When I click on ".btn-submit"
    Then I will be in page "/artists"
    And the element "table#grid-artists tbody tr" should appear "2" times
    And the element ".item-artist-2-id" contains text "2"
    And the element ".item-artist-2-name" contains text "Joe Satriani"
    And the element ".item-artist-2-image" contains text "http://imgurl.co/satriani"

  Scenario: the one where I delete an existing artist

    Given I visit page "/artists"
    And the element "table#grid-artists tbody tr" should appear "1" times
    When I click on ".item-artist-1-delete"
    Then the element "table#grid-artists tbody tr" should appear "0" times

  Scenario: the one where I go back from new artist
    Given I visit page "/artists/new"
    When I click on ".btn-back"
    Then I will be in page "/artists"
    And the element "table#grid-artists tbody tr" should appear "1" times

  Scenario: the one where I go back from edit artist
    Given I visit page "/artists/edit/1"
    And I fill the field "#form-artist-name" with "Lenny Dodgers"
    And I fill the field "#form-artist-imageurl" with "http://imgurl.co/lenny"
    When I click on ".btn-back"
    Then I will be in page "/artists"
    And the element "table#grid-artists tbody tr" should appear "1" times
    And the element ".item-artist-1-id" contains text "1"
    And the element ".item-artist-1-name" contains text "Kenny Rogers"
    And the element ".item-artist-1-image" contains text "http://imgurl.co/kenny"