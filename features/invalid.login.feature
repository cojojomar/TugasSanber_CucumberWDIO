Feature: Login Feature

  Scenario Outline: as user, I can't login into the homepage

    Given I am on the login page
    When I login with <email> and invalid <password> 
    And I click Login button
    Then I should see an error message <text>

    Examples:
      | email          | password    | text                                |
      | cojour@ex.com  | xxxx        | Kredensial yang Anda berikan salah  |