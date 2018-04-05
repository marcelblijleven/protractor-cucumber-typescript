Feature: Example

    Scenario: Searching Google
        Given I am on the Google homepage
        When I search for "SpaceX"
        Then I see "SpaceX" in the browser title
