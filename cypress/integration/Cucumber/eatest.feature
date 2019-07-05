const cucumber = requir
Feature: eatest

    Test Feature

    Scenario: Test the login feature
        Given visit main website
        Given click login link
        And I login account user "account" and "password"
            | userName | Password |
            | userName | Password |

