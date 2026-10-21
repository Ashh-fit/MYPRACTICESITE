(function () {
  "use strict";

  const code = String.raw;

  window.CPP_LAB_LESSONS = [
    {
      id: "flow-control",
      number: 1,
      title: "Flow of Control",
      navTitle: "Flow of Control",
      stage: "Foundations",
      duration: 8,
      short: "See how a program chooses which instruction runs next.",
      definition: "Flow of control is the order in which a computer runs the instructions in a program.",
      why: "Understanding the order helps you read code, find mistakes, and plan what the program should do next.",
      realLife: "A morning routine has a flow: wake up, wash, eat breakfast, then leave. Changing the order changes the result.",
      example: code`#include <iostream>
using namespace std;

int main() {
    cout << "Step 1: Start\n";
    cout << "Step 2: Learn\n";
    cout << "Step 3: Practice\n";
    return 0;
}`,
      output: "Step 1: Start\nStep 2: Learn\nStep 3: Practice",
      explain: [
        "The program starts inside the main function.",
        "Each cout statement runs from top to bottom.",
        "return 0 ends the program successfully."
      ],
      prediction: {
        question: "Which message appears second?",
        options: ["Step 1: Start", "Step 2: Learn", "Step 3: Practice"],
        answer: 1,
        explanation: "C++ follows these statements from top to bottom, so the second cout prints Step 2: Learn."
      },
      challenge: {
        title: "Print your daily routine",
        objective: "Print three activities in the exact order you do them.",
        description: "Complete the program so each activity appears on its own line.",
        requirements: ["Use at least three cout statements", "Put each activity on a new line", "Keep the statements inside main"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    // Print three activities below.

    return 0;
}`,
        sampleInput: "No input",
        sampleOutput: "Wake up\nEat breakfast\nGo to school",
        hints: ["Use cout for every activity.", "Add \\n at the end of each message.", "Example: cout << \"Wake up\\n\";"],
        testSummary: "The grader checks for three non-empty output lines in the same order."
      }
    },
    {
      id: "sequential-execution",
      number: 2,
      title: "Sequential Execution",
      navTitle: "Sequence",
      stage: "Foundations",
      duration: 9,
      short: "Run instructions one after another and trace their values.",
      definition: "Sequential execution means running each statement once, in the order it is written.",
      why: "Most programs begin with a sequence. You need it for calculations, messages, and preparing values before decisions.",
      realLife: "To make instant noodles, you boil water before pouring it into the cup. The sequence matters.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int points = 10;
    points = points + 5;
    points = points * 2;
    cout << points;
    return 0;
}`,
      output: "30",
      explain: [
        "points begins with the value 10.",
        "Adding 5 changes points to 15.",
        "Multiplying by 2 changes points to 30 before it is printed."
      ],
      prediction: {
        question: "What is the final value of points?",
        options: ["15", "20", "30"],
        answer: 2,
        explanation: "The statements run in order: 10 + 5 is 15, then 15 × 2 is 30."
      },
      challenge: {
        title: "Introduce yourself",
        objective: "Print your name, age, and school on separate lines.",
        description: "Store your age in an int, then use cout to display all three details.",
        requirements: ["Declare an integer age variable", "Print name, age, and school", "Use three separate output lines"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int age = 0; // Change this value.

    // Print your details here.

    return 0;
}`,
        sampleInput: "No input",
        sampleOutput: "Name: Alex\nAge: 16\nSchool: Rizal High School",
        hints: ["A text value goes inside double quotes.", "Print the age variable without double quotes.", "Try: cout << \"Age: \" << age << '\\n';"],
        testSummary: "The grader checks that all three labels and a numeric age are printed."
      }
    },
    {
      id: "selection",
      number: 3,
      title: "Selection",
      navTitle: "Selection",
      stage: "Decisions",
      duration: 9,
      short: "Let a program choose between different actions.",
      definition: "Selection lets a program choose one path based on a condition.",
      why: "Programs need choices to react to scores, passwords, menu options, weather, and many other situations.",
      realLife: "If it is raining, you take an umbrella. Otherwise, you can leave it at home.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int temperature = 31;

    if (temperature > 30) {
        cout << "It is hot";
    } else {
        cout << "The weather is cool";
    }
    return 0;
}`,
      output: "It is hot",
      explain: [
        "The condition asks whether temperature is greater than 30.",
        "31 > 30 is true, so the first block runs.",
        "The else block is skipped."
      ],
      prediction: {
        question: "What prints if temperature changes to 25?",
        options: ["It is hot", "The weather is cool", "Nothing"],
        answer: 1,
        explanation: "25 > 30 is false, so C++ follows the else path."
      },
      challenge: {
        title: "Choose an action",
        objective: "Print Bring an umbrella when the weather is rainy; otherwise print Enjoy the day.",
        description: "Read one word from input and select the correct message.",
        requirements: ["Read a weather string with cin", "Use an if-else statement", "Match the required output exactly"],
        starter: code`#include <iostream>
#include <string>
using namespace std;

int main() {
    string weather;
    cin >> weather;

    // Make a selection here.

    return 0;
}`,
        sampleInput: "rainy",
        sampleOutput: "Bring an umbrella",
        hints: ["Compare weather with the word rainy.", "Text comparison uses == and double quotes.", "Start with: if (weather == \"rainy\")"],
        testSummary: "The grader tries both rainy and non-rainy weather values."
      }
    },
    {
      id: "loops",
      number: 4,
      title: "Repetition and Loops",
      navTitle: "Loops",
      stage: "Repetition",
      duration: 11,
      short: "Repeat a task without copying the same code many times.",
      definition: "A loop repeats a block of code while a condition allows it.",
      why: "Loops make it easy to count, process lists, repeat questions, and avoid duplicated instructions.",
      realLife: "A teacher checks each paper in a pile one by one until there are no papers left.",
      example: code`#include <iostream>
using namespace std;

int main() {
    for (int number = 1; number <= 5; number++) {
        cout << number << " ";
    }
    return 0;
}`,
      output: "1 2 3 4 5",
      explain: [
        "number starts at 1.",
        "The loop continues while number is 5 or less.",
        "number++ adds 1 after every repetition."
      ],
      prediction: {
        question: "How many times does the loop body run?",
        options: ["4 times", "5 times", "6 times"],
        answer: 1,
        explanation: "It runs once for each value from 1 through 5, which is five repetitions."
      },
      challenge: {
        title: "Count from 1 to 10",
        objective: "Use one loop to print the numbers 1 through 10.",
        description: "Separate every number with one space. Do not write ten cout statements.",
        requirements: ["Use a for or while loop", "Print every integer from 1 to 10", "Use one space between numbers"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    // Write your loop here.

    return 0;
}`,
        sampleInput: "No input",
        sampleOutput: "1 2 3 4 5 6 7 8 9 10",
        hints: ["Your counter should begin at 1.", "Keep looping while the counter is <= 10.", "A for loop can use: int i = 1; i <= 10; i++"],
        testSummary: "The grader checks the printed values and their order."
      }
    },
    {
      id: "functions",
      number: 5,
      title: "Function Invocation",
      navTitle: "Functions",
      stage: "Building Blocks",
      duration: 11,
      short: "Create a named task and call it whenever you need it.",
      definition: "A function is a named block of code. Invocation means calling that function so its instructions run.",
      why: "Functions divide a large program into smaller jobs that are easier to read, test, and reuse.",
      realLife: "Pressing a rice cooker's Cook button starts a prepared set of steps. A function call works in a similar way.",
      example: code`#include <iostream>
using namespace std;

void greet(string name) {
    cout << "Hello, " << name << "!";
}

int main() {
    greet("Mika");
    return 0;
}`,
      output: "Hello, Mika!",
      explain: [
        "greet defines a function that receives a name.",
        "The function uses that name in its message.",
        "greet(\"Mika\") invokes, or calls, the function."
      ],
      prediction: {
        question: "What changes if the call becomes greet(\"Paolo\")?",
        options: ["Hello, Mika!", "Hello, Paolo!", "Nothing prints"],
        answer: 1,
        explanation: "The value Paolo is passed into the name parameter and appears in the greeting."
      },
      challenge: {
        title: "Create and call a function",
        objective: "Create showMessage() and call it from main.",
        description: "The function must print Welcome to C++! exactly once.",
        requirements: ["Define a void function named showMessage", "Print the required sentence inside it", "Call showMessage from main"],
        starter: code`#include <iostream>
using namespace std;

// Define showMessage above main.

int main() {
    // Call showMessage here.
    return 0;
}`,
        sampleInput: "No input",
        sampleOutput: "Welcome to C++!",
        hints: ["A function with no return value starts with void.", "Write void showMessage() { ... } above main.", "Invoke it with showMessage(); inside main."],
        testSummary: "The grader checks the function's output and verifies that the program runs successfully."
      }
    },
    {
      id: "relational-operators",
      number: 6,
      title: "Conditions and Relational Operators",
      navTitle: "Comparisons",
      stage: "Decisions",
      duration: 10,
      short: "Compare two values to produce a true or false result.",
      definition: "Relational operators compare values using <, >, <=, >=, ==, and !=.",
      why: "A program needs comparisons before it can decide whether a score passes, an age is allowed, or two values match.",
      realLife: "A ride sign may say height must be at least 120 cm. That rule is the comparison height >= 120.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int first = 14;
    int second = 9;
    cout << boolalpha;
    cout << (first > second);
    return 0;
}`,
      output: "true",
      explain: [
        "first stores 14 and second stores 9.",
        "The expression first > second asks whether 14 is greater than 9.",
        "boolalpha makes cout display true instead of 1."
      ],
      prediction: {
        question: "What is the value of (7 == 10)?",
        options: ["true", "false", "7"],
        answer: 1,
        explanation: "7 and 10 are not equal, so the expression is false."
      },
      challenge: {
        title: "Compare two numbers",
        objective: "Read two integers and print the larger value.",
        description: "If the values are equal, print Equal instead.",
        requirements: ["Read two integer values", "Use relational operators", "Handle equal values"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int first, second;
    cin >> first >> second;

    // Compare the values.

    return 0;
}`,
        sampleInput: "12 8",
        sampleOutput: "12",
        hints: ["First test whether first > second.", "Use another branch when second is greater.", "Use else for the Equal result."],
        testSummary: "The grader tries first-larger, second-larger, and equal inputs."
      }
    },
    {
      id: "boolean-expressions",
      number: 7,
      title: "True and False Expressions",
      navTitle: "True & False",
      stage: "Decisions",
      duration: 9,
      short: "Understand boolean values and predict comparison results.",
      definition: "A boolean expression has only two possible results: true or false.",
      why: "Boolean values are the questions behind every decision and loop in a program.",
      realLife: "Is the classroom open? Is the assignment finished? Each question can be answered true or false.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int score = 82;
    bool passed = score >= 75;
    cout << boolalpha << passed;
    return 0;
}`,
      output: "true",
      explain: [
        "The variable score contains 82.",
        "82 >= 75 evaluates to true.",
        "That result is stored in the bool variable passed."
      ],
      prediction: {
        question: "Which expression is true?",
        options: ["5 > 12", "8 != 8", "20 <= 20"],
        answer: 2,
        explanation: "20 is equal to 20, and <= means less than or equal to."
      },
      challenge: {
        title: "Predict boolean results",
        objective: "Read a number and print true when it is even, otherwise false.",
        description: "Use the remainder operator and boolalpha.",
        requirements: ["Read one integer", "Use the % operator", "Print true or false as a word"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int number;
    cin >> number;

    bool isEven = false; // Replace false.
    cout << boolalpha << isEven;
    return 0;
}`,
        sampleInput: "14",
        sampleOutput: "true",
        hints: ["An even number has no remainder after division by 2.", "Use number % 2 to find the remainder.", "The full expression is number % 2 == 0."],
        testSummary: "The grader checks positive, negative, odd, even, and zero values."
      }
    },
    {
      id: "logical-operators",
      number: 8,
      title: "Logical Operators",
      navTitle: "Logical Operators",
      stage: "Decisions",
      duration: 12,
      short: "Combine or reverse conditions with &&, ||, and !.",
      definition: "Logical operators combine conditions: && means AND, || means OR, and ! means NOT.",
      why: "Real rules often have more than one condition, such as needing the correct age and a valid ticket.",
      realLife: "You may join a school trip if you submitted a form AND paid the fee.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int age = 18;
    bool hasId = true;

    if (age >= 18 && hasId) {
        cout << "Allowed";
    }
    return 0;
}`,
      output: "Allowed",
      explain: [
        "The first condition checks that age is at least 18.",
        "The second condition checks that hasId is true.",
        "&& requires both conditions to be true."
      ],
      prediction: {
        question: "What is true || false?",
        options: ["true", "false", "It causes an error"],
        answer: 0,
        explanation: "OR (||) is true when at least one of its conditions is true."
      },
      challenge: {
        title: "Check event eligibility",
        objective: "Print Eligible when age is 15–18 inclusive and permission is Y.",
        description: "Otherwise, print Not eligible.",
        requirements: ["Read age and permission", "Use && at least twice", "Accept ages 15 through 18 only"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int age;
    char permission;
    cin >> age >> permission;

    // Check all eligibility rules.

    return 0;
}`,
        sampleInput: "16 Y",
        sampleOutput: "Eligible",
        hints: ["Check the lower and upper age limits separately.", "Join the age checks using &&.", "Also require permission == 'Y'."],
        testSummary: "The grader checks boundary ages, missing permission, and valid students."
      }
    },
    {
      id: "if-statement",
      number: 9,
      title: "The if Statement",
      navTitle: "if Statement",
      stage: "Branching",
      duration: 9,
      short: "Run a block only when one condition is true.",
      definition: "An if statement runs its block only when its condition evaluates to true.",
      why: "Use if when an action is optional and nothing special needs to happen when the condition is false.",
      realLife: "If your phone battery is low, charge it. If it is not low, no action is required.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int battery = 18;

    if (battery < 20) {
        cout << "Charge your phone";
    }
    return 0;
}`,
      output: "Charge your phone",
      explain: [
        "battery contains the value 18.",
        "18 < 20 is true.",
        "The message inside the braces is printed."
      ],
      prediction: {
        question: "What prints when battery is 75?",
        options: ["Charge your phone", "75", "Nothing"],
        answer: 2,
        explanation: "75 < 20 is false, so the if block is skipped."
      },
      challenge: {
        title: "Check for a positive number",
        objective: "Print Positive only if the input is greater than zero.",
        description: "For zero or a negative number, the program should print nothing.",
        requirements: ["Read one integer", "Use one if statement", "Do not add an else branch"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int number;
    cin >> number;

    // Add one if statement.

    return 0;
}`,
        sampleInput: "7",
        sampleOutput: "Positive",
        hints: ["The condition asks whether number is greater than 0.", "Use the > relational operator.", "Write: if (number > 0) { ... }"],
        testSummary: "The grader tries positive, negative, and zero inputs."
      }
    },
    {
      id: "if-else",
      number: 10,
      title: "The if-else Statement",
      navTitle: "if-else",
      stage: "Branching",
      duration: 10,
      short: "Choose exactly one of two possible actions.",
      definition: "An if-else statement chooses between two blocks: one for true and one for false.",
      why: "Use it when both outcomes need a response, such as pass or fail, open or closed, yes or no.",
      realLife: "If you have at least ₱50, you can buy a snack. Otherwise, you need to save more money.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int money = 30;

    if (money >= 50) {
        cout << "Buy a snack";
    } else {
        cout << "Save more money";
    }
    return 0;
}`,
      output: "Save more money",
      explain: [
        "The condition checks whether money is at least 50.",
        "30 >= 50 is false.",
        "The else block runs and prints Save more money."
      ],
      prediction: {
        question: "What happens when money = 30?",
        options: ["Buy a snack", "Save more money", "No output"],
        answer: 1,
        explanation: "30 is less than 50, so the condition is false and the else block runs."
      },
      challenge: {
        title: "Build a pass or fail checker",
        objective: "Print Pass for a score of 75 or higher; otherwise print Fail.",
        description: "Read one whole-number score and choose exactly one result.",
        requirements: ["Read an integer score", "Use if-else", "Treat 75 as a passing score"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int score;
    cin >> score;

    // Print Pass or Fail.

    return 0;
}`,
        sampleInput: "82",
        sampleOutput: "Pass",
        hints: ["Your condition should include the boundary value 75.", "Use >= rather than >.", "Use if (score >= 75), followed by else."],
        testSummary: "The grader checks scores below, at, and above 75."
      }
    },
    {
      id: "if-ladder",
      number: 11,
      title: "The if-else-if Ladder",
      navTitle: "If-Ladder",
      stage: "Branching",
      duration: 12,
      short: "Check several choices from most specific to least specific.",
      definition: "An if-else-if ladder checks multiple conditions in order and runs the first matching block.",
      why: "A ladder is useful when a value belongs to one of several ranges, such as letter grades or age groups.",
      realLife: "A school converts a number score into A, B, C, or F using score ranges.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int score = 86;

    if (score >= 90) {
        cout << "A";
    } else if (score >= 80) {
        cout << "B";
    } else if (score >= 75) {
        cout << "C";
    } else {
        cout << "F";
    }
    return 0;
}`,
      output: "B",
      explain: [
        "86 does not meet the first condition of 90 or higher.",
        "It does meet the next condition of 80 or higher.",
        "After one branch runs, the remaining branches are skipped."
      ],
      prediction: {
        question: "Which grade prints for a score of 75?",
        options: ["B", "C", "F"],
        answer: 1,
        explanation: "75 misses the first two ranges but satisfies score >= 75, so it prints C."
      },
      challenge: {
        title: "Convert a score into a grade",
        objective: "Print A (90+), B (80–89), C (75–79), or F (below 75).",
        description: "Read one score and test ranges from highest to lowest.",
        requirements: ["Use if, else if, and else", "Check higher grades first", "Handle all integer scores"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int score;
    cin >> score;

    // Build your grade ladder.

    return 0;
}`,
        sampleInput: "88",
        sampleOutput: "B",
        hints: ["Begin with the highest grade boundary.", "Each later condition only needs its lower boundary.", "Finish with else for F."],
        testSummary: "The grader checks every grade range and all boundary values."
      }
    },
    {
      id: "nested-if",
      number: 12,
      title: "Nested if Statements",
      navTitle: "Nested if",
      stage: "Branching",
      duration: 12,
      short: "Place one decision inside another decision.",
      definition: "A nested if is an if statement placed inside another if statement.",
      why: "Nesting is useful when the second question only matters after the first requirement is met.",
      realLife: "First check whether a person is old enough. Only then check whether they have a student ID for a discount.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int age = 19;
    bool isStudent = true;

    if (age >= 18) {
        if (isStudent) {
            cout << "Adult student";
        }
    }
    return 0;
}`,
      output: "Adult student",
      explain: [
        "The outer if first checks whether age is at least 18.",
        "Only because that is true does the inner if run.",
        "isStudent is also true, so the message prints."
      ],
      prediction: {
        question: "What prints if age is 16 and isStudent is true?",
        options: ["Adult student", "Student", "Nothing"],
        answer: 2,
        explanation: "The outer age condition is false, so C++ never reaches the inner condition."
      },
      challenge: {
        title: "Check age and student status",
        objective: "Print Discount when age is at least 18 and the student answer is Y.",
        description: "Use a nested if. Print Not eligible when either requirement fails.",
        requirements: ["Use one if inside another", "Read age and a Y/N character", "Handle both failure paths"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int age;
    char student;
    cin >> age >> student;

    // Use a nested if statement.

    return 0;
}`,
        sampleInput: "20 Y",
        sampleOutput: "Discount",
        hints: ["Use the age check as the outer if.", "Check student == 'Y' inside the first block.", "Add an else for the inner check and another for the outer check."],
        testSummary: "The grader tries all combinations of age and student status."
      }
    },
    {
      id: "switch-case",
      number: 13,
      title: "switch-case Statements",
      navTitle: "switch-case",
      stage: "Branching",
      duration: 12,
      short: "Match one value against a clean list of menu choices.",
      definition: "A switch statement selects a case that matches one value.",
      why: "switch can be clearer than a long ladder when checking exact values such as menu numbers or letter commands.",
      realLife: "A vending machine performs a different action for button 1, 2, or 3.",
      example: code`#include <iostream>
using namespace std;

int main() {
    int choice = 2;

    switch (choice) {
        case 1: cout << "Play"; break;
        case 2: cout << "Settings"; break;
        case 3: cout << "Exit"; break;
        default: cout << "Invalid";
    }
    return 0;
}`,
      output: "Settings",
      explain: [
        "switch reads the value stored in choice.",
        "choice is 2, so case 2 runs.",
        "break prevents the following cases from running."
      ],
      prediction: {
        question: "What prints when choice is 7?",
        options: ["Play", "Exit", "Invalid"],
        answer: 2,
        explanation: "No numbered case matches 7, so the default case runs."
      },
      challenge: {
        title: "Build a simple menu",
        objective: "Print Add for 1, View for 2, Exit for 3, and Invalid otherwise.",
        description: "Read one integer menu choice and use switch-case.",
        requirements: ["Use a switch statement", "Include cases 1, 2, and 3", "Include break and default"],
        starter: code`#include <iostream>
using namespace std;

int main() {
    int choice;
    cin >> choice;

    // Build the menu here.

    return 0;
}`,
        sampleInput: "2",
        sampleOutput: "View",
        hints: ["Write switch (choice) after reading input.", "Every numbered option needs a case and break.", "Use default for values outside 1–3."],
        testSummary: "The grader tries every menu item and an invalid value."
      }
    },
    {
      id: "final-project",
      number: 14,
      title: "Student Grade Calculator",
      navTitle: "Final Project",
      stage: "Final Project",
      duration: 35,
      short: "Combine decisions, loops, functions, and a menu in one project.",
      definition: "Your final project brings the course skills together in a useful console application.",
      why: "Combining ideas shows that you can plan a complete program instead of solving only one small exercise.",
      realLife: "A teacher needs a tool that accepts scores, calculates an average, and reports whether a student passed.",
      example: code`double calculateAverage(double total, int count) {
    return total / count;
}

// Call the function after a loop adds the scores.
double average = calculateAverage(total, scoreCount);`,
      output: "Average: 86.67\nResult: Pass",
      explain: [
        "A loop reads and adds several scores.",
        "A function calculates the average.",
        "Conditions validate values and decide Pass or Fail."
      ],
      prediction: {
        question: "If the scores are 70, 80, and 90, what is their average?",
        options: ["75", "80", "90"],
        answer: 1,
        explanation: "The total is 240. Dividing by 3 gives an average of 80."
      },
      challenge: {
        title: "Build the Student Grade Calculator",
        objective: "Create a menu-driven program that validates scores, calculates an average, and prints Pass or Fail.",
        description: "This project should demonstrate the main flow-control tools from the course.",
        requirements: ["Use a loop to process multiple scores", "Use a function to calculate the average", "Validate every score with logical operators", "Use if-else for Pass or Fail", "Use switch-case for the menu"],
        starter: code`#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

double calculateAverage(double total, int count) {
    // Return the average.
    return 0;
}

int main() {
    string studentName;
    int choice;

    cout << "1. Calculate grade\n2. Exit\n";
    cin >> choice;

    // Add the switch menu, score loop, validation,
    // average calculation, and Pass/Fail result.

    return 0;
}`,
        sampleInput: "1\nMika\n3\n85 90 80",
        sampleOutput: "Average: 85.00\nResult: Pass",
        hints: ["Finish and test calculateAverage before building the menu.", "Ask for the score count, then use a loop to read that many scores.", "A valid score is score >= 0 && score <= 100. Use a switch around the main actions."],
        testSummary: "The grader checks valid averages, pass/fail boundaries, invalid scores, and the exit menu option."
      }
    }
  ];
})();
