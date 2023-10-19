Feature: Login Feature

  Scenario Outline: As a user, I can log into the homepage

    Given I am on the login page
    When I login with <email> and <password>
    And I click Login button
    Then I should see the name of my store <text>

    Examples:
      | email         | password | text   |
      | cojour@ex.com | password | cojour |
     
