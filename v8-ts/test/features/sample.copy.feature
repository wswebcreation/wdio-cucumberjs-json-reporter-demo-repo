@sample-copy
Feature: Sample Copy

  Background:
    Given I have a background

  Scenario: cukes
    Given I have 42 cukes in my belly

  @data-table-copy
  Scenario: transposed table
    When the following table is transposed
      | a | b |
      | 1 | 2 |

  @outline-copy @skipped-copy
  Scenario Outline: eating cucumbers
    Given there are <start> cucumbers
    When I eat <eat> cucumbers
    Then I should have <left> cucumbers

    Examples: These are passing
      | start | eat | left |
      | 12    | 5   | 7    |
      | 20    | 5   | 15   |
      | 25    | 5   | 20   |
