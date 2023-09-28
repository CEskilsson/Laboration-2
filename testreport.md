***Test Report***

**Summary**
- ***Tested Module:*** Text Analysis Module
- ***Test Methodology:*** For the majority of the functions in the module automatic tests were made. But for the createWordCloud function, a manual test was instead made. This is because of the nature of the function and it is very difficult to make an automatic test for it. This manual test will not be in the same table as the automatic test but in its own report in this document. There will aslo be a manual test for the sortWordFrequency function this is because it directly influences the front-end. If I wanted to have a automatic test I would have to re write the function. I have insted choosen to do a manual test. 
- ***Date of Testing:*** 28/09/2023
- ***Tester:*** Cornelia Eskilsson


| Test Case | Test Description | Test Result | 
|-----------|-----------------|-------------| 
| Test 1 |Test countWords function  | Passed | 
| Test 2 | Test countPeriods function | Passed | 
| Test 3 | Test calculateMaximumWordLength function | Passed |
| Test 4 | Test calculateMinimumWordLength function              |Passed          |
| Test 5       | Test calculateAverageWordLength function             | Passed         |
|  Test 6      |  Test wordFrequency function             | Passed         |
| Test 7     | Test countLetter function               | Passed   |

**Manual Test: createWordCould Function**

**UC1: Create a Word Cloud**

**Precondition:** The user opens the web page that uses the createWordCloud function and no word cloud has been created.

**Postcondition:** The user will have created a word cloud.

**Main Scenario:**

1.  The user enters a block of text in the input field.
    
2.  The user clicks the “Generate Word Cloud” button.
    
3.  A word cloud is generated in the designated container.
    
**Alternative Scenarios:**

1.  There is no text entered in the input field and click the “Generate Word Cloud” button.
    

**Test Case:**

**TC1.1 Successfully creates a word cloud**

**Test Description:** A user  creates a word cloud on the web page that uses the createWordCloud function.

**Scenario:** The user will generate a word cloud made out of the words they entered in the text input field.

**Test Steps:**

1.  Enter a block of text in the input field. (example: "This is a test sentence.").
    
2.  Click the “Generate Word Cloud” button.
    
3.  Inspect the web page to ensure that a word cloud has been generated in its designated container. ("word-cloud-container").
    
4.  Verify the following aspects of the word cloud:
    

-   Words from the input text are displayed.
    
-   Words are styled according to the frequency of use
    
-   Font size reflects the frequency of used words.
    
-   Words are randomly positioned in the container.
    
-   If the “Generate Word Cloud” is clicked again a new word cloud that looks different will be generated.
    
**Expected Results:** The word cloud should be generated and displayed on the webpage as described in the test steps.

  
**TC1.2: Unsuccessful to create a word cloud**

**Test Description:** A user tries to generate a word cloud without first entering a text in the input field.

**Scenario:** There will only be an empty container displayed.

**Test Steps:**

1.  Do not enter any text in the input field.
    
2.  Click the “Generate Word Cloud”.
     
**Expected Results:** Since there is no text to create the word cloud from there will only be an empty container where the word cloud should have been.

**Manual Test: sortWordFrequency Function**

**UC1: Sort words by frequency**

**Precondition:** The user is using the web page where they can display the word frequency of the words they input in the text field.

**Postcondition:** The user will be displayed the words used, sorted by their frequency.


**Main Scenario:**

1.  The user enters a block of text in the input field.
    
2.  The user clicks the “Word Frequency” button.
    
3.  A container will display the words used in the text block. The words will be sorted by the most used word first, and so on.
    
**Alternative Scenarios:**

1.  There is no text block entered in the input field.
   

**Test Case:**

**TC1.1 Successfully display the sorted word frequency**

**Test Description:** A user enters a block of text in the input field and tries to sort the words by its frequency.

**Scenario:** The user will be displayed a container that holds the words used in the text, sorted by the most used word first.

**Test Steps:**

1.  Input a block of text in the input field.
    
2.  Press “Word Frequency” button.
    
3.  Inspect that the words are being displayed in the container.
    
4.  Verify the following aspects of the words displayed in the container:
    
-   The first word is indeed used the most times
    
-   The first word is used as many times as displayed.
    
-   The words are the same as the words entered in the input field.
    
**Expected Results:** There should be words displayed in the designated container and they should be sorted according to the frequency of use.


**TC1.2:** Unsuccessfully display the sorted word frequency

**Test Description:** The user doesn’t enter a block of text in the input field but still presses the “Word Frequency” button.

**Scenario:** The user won’t be displayed anything when pressing the “Word Frequency” button.

**Test Steps:**
1.  Do not enter any text in the input field.
    
2.  Press the “Word Frequency” button.
    
**Expected Results:** Nothing will happen since the user didn’t enter any text in the input field.