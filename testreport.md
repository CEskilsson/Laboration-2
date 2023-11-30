
***Test Report***

**Summary**
- ***Tested Module:*** My Journal
- ***Test Methodology:*** For the majority of the functions in the module automatic tests were made. But for the createWordCloud function, displayEntry, showStats and renderEntries, manual tests was instead made. This is because of the nature of the functions and it is very difficult to make an automatic test for it. This manual test will not be in the same table as the automatic test but in its own report in this document. There will aslo be a manual test for the sortWordFrequency function this is because it directly influences the front-end. If I wanted to have a automatic test I would have to re write the function. I have insted choosen to do a manual test. 
- ***Date of Testing:*** 2023-11-30
- ***Tester:*** Cornelia Eskilsson


| Test Case | Test Description | Test Result | 
|-----------|-----------------|-------------| 
| Test 1| Test addNewEntry |Passed
| Test 2 | Test addNewTimestamp |Passed
| Test 3 | Test displayTitle | Passed
| Test 4 | Test displayTimestamp | Passed
| Test 5 | Test editEntry | Passed
| Test 6 | Test deleteEntry  | Passed
| Test 7  |Test countWords function  | Passed | 
| Test 8 | Test countPeriods function | Passed | 
| Test 9 | Test calculateMaximumWordLength function | Passed |
| Test 10 | Test calculateMinimumWordLength function |Passed 
| Test 11 | Test calculateAverageWordLength function | Passed |
|  Test 12| Test wordFrequency function |Passed |
| Test 13 | Test countLetter function| Passed|




## **Manual Test Scenarios**

### Method: `createWordCloud (text, cloudContainer)`

 **UC1: Create a Word Cloud**

**Precondition:** The user opens the web page that uses the createWordCloud function and no word cloud has been created.

**Postcondition:** The user will have created a word cloud.

**Main Scenario:**

1.  The user enters a block of text in the input field.
    
2.  The user clicks the “Generate Word Cloud” button.
    
3.  A word cloud is generated in the designated container.
    
**Alternative Scenarios:**

1.  There is no text entered in the input field and click the “Generate Word Cloud” button.
    

### Test Case:

**TC1.1 Successfully creates a word cloud**

 -   **Test Description:** A user  creates a word cloud on the web page that uses the createWordCloud function.

    - **Scenario:** The user will generate a word cloud made out of the words they entered in the text input field.

    -  **Test Steps:**

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

 -   **Test Description:** A user tries to generate a word cloud without first entering a text in the input field.

    - **Scenario:**There will only be an empty container displayed.

    -  **Test Steps:**

1.  Do not enter any text in the input field.
    
2.  Click the “Generate Word Cloud”.
     
**Expected Results:** Since there is no text to create the word cloud from there will only be an empty container where the word cloud should have been.

### Method: `sortWordsByFrequency(wordMap)`

**UC1: Sort words by frequency**

**Precondition:** The user is using the web page where they can display the word frequency of the words they input in the text field.

**Postcondition:** The user will be displayed the words used, sorted by their frequency.


**Main Scenario:**

1.  The user enters a block of text in the input field.
    
2.  The user clicks the “Word Frequency” button.
    
3.  A container will display the words used in the text block. The words will be sorted by the most used word first, and so on.
    
**Alternative Scenarios:**

1.  There is no text block entered in the input field.
   

### Test Case:

**TC1.1 Successfully display the sorted word frequency**

 -   **Test Description:** A user enters a block of text in the input field and tries to sort the words by its frequency.

    - **Scenario:** The user will be displayed a container that holds the words used in the text, sorted by the most used word first.

    -  **Test Steps:**

		1.  Input a block of text in the input field.
		
		3.  Press “Word Frequency” button.
		    
		4.  Inspect that the words are being displayed in the container.
		    
		5.  Verify the following aspects of the words displayed in the container:
			    
			-   The first word is indeed used the most times
			    
			-   The first word is used as many times as displayed.
			    
			-   The words are the same as the words entered in the input field.
    
**Expected Results:** There should be words displayed in the designated container and they should be sorted according to the frequency of use.


**TC1.2:** Unsuccessfully display the sorted word frequency

 -   **Test Description:** The user doesn’t enter a block of text in the input field but still presses the “Word Frequency” button.

    - **Scenario:** The user won’t be displayed anything when pressing the “Word Frequency” button.

    -  **Test Steps:**
		1.  Do not enter any text in the input field.  
		3.  Press the “Word Frequency” button.
    
-  **Expected Results:** Nothing will happen since the user didn’t enter any text in the input field.


### Method: `displayEntry(entry)`

**UC1: Display the created entries**

**Precondition:** The user has previously added entries.

**Postcondition:** The user will be displayed the entries they have created.


**Main Scenario:**

1.  The user enters the application by following the steps in the README.md.
    
2.  The user arrives at the journal application.
    
3.  The previously created entries will be displayed in an entry list.
    
**Alternative Scenarios:**

1.  The entry list is empty.

### Test Case:

-   **TC 1.1: Valid Entry Display**
    
    -   **Test Description:** Verify that a valid entry is displayed properly.
    
    - **Scenario:** The user enters the application and creates a new entry.
   
    -  **Test Steps:**
        1.  Create an entry object with valid data (title, text, timestamp) and press the "Add Entry" button.
        2. The`displayEntry` method should be called with the created entry and add it to the entry list.
        
    -   **Expected Result:** The entry should be displayed in the entry list correctly without any errors or alerts.
    
-   **TC 1.2: Invalid Entry with Missing Title**
    
    -  **Test Description:** Validate the behavior when an entry is missing a title.

    - **Scenario:** The user tries to creat an entry without a title. 
    
    -   **Test Steps:**
        1.  Create an entry object without a title but with text and timestamp and press the "Add Entry" button.
        2.  Call `displayEntry` method with the created entry.
        
    -   **Expected Result:** An alert should appear indicating that the title is missing.
    - 
-   **TC 1.3: Invalid Entry with Missing Text**
    
    -   **Test Description:** Validate the behavior when an entry is missing text.
    
    - **Scenario:**The user tries to create an entry without any text.
    
    -   **Test Steps:**
        1.  Create an entry object with a title but without text and with a timestamp.
        2.  Call `displayEntry` method with the created entry.
        
    -   **Expected Result:** An alert should appear indicating that the text is missing.
    - 
-   **TC 1.4: Invalid Entry with Missing Title and Text**
    
    -   **Test Description:** Validate the behavior when both title and text are missing in an entry.
    
    - **Scenario:** The user tries to create an entry without title and text.
    
    -   **Test Steps:**
        1.  Create an entry object without a title and text but with a timestamp.
        2.  Call `displayEntry` method with the created entry.
        
    -   **Expected Result:** An alert should appear indicating that both title and text are missing.

### Method: `showStats(entryText)`

**UC1: Display the stats for an entry**

**Precondition:** The user has previously added entries.

**Postcondition:** The user will be displayed the stats of the choosen entry.


**Main Scenario:**

1.  The user enters the application by following the steps in the README.md.
    
2.  The user arrives at the journal application.
    
3.  The previously created entries will be displayed in an entry list.

5. The user then clicks the "Stats" button next to the entry. 
    
**Alternative Scenarios:**

1.  The entry list is empty.

2. The stats do not show when the button is clicked.

### Test Case:

-   **TC: Valid Entry Text Statistics**
    -   **Test Description:** Check if the word count and period count are displayed correctly for a given entry text.
    
    -  **Scenario:** The user wants to check the stast for one of the created entries.
    
    -   **Test Steps:**
        1.  The user chooses what entry to check the stats on.
    
        2.  The user clicks the "Stats" button.
        
        3. The stats are displayed in a popup window.
        
    -   **Expected Result:** A popup should display the correct word count and period count for the provided entry text.

### Method: `renderEntries()`
**UC1: Display the stats for an entry**

**Preconditions:** The user has previously added entries.

**Postcondition:** The user will be displayed the previously created entries when entering the application.

**Main Scenario:**

1.  The user enters the application by following the steps in the README.md.
    
2.  The user arrives at the journal application.
    
3.  The previously created entries should be displayed in an entry list a few seconds after the user enters the application.
    
**Alternative Scenarios:**

1.  The entry list is empty.

2. The application doesn't load.

3. The application only shows the input fields and an empty list even though there should be entries.

### Test Case:

-   **TC: Rendering Existing Entries**
    -   **Test Description:** Ensure that existing entries are correctly rendered onto the UI.
    
    - **Scenario:** The user enter enters the application.
      
    -   **Test Steps:**
        1.  Call the `renderEntries` method.
        
    -   **Expected Result:** The UI should display all entries stored in the `this.entries` array without any errors or missing information.
    - 
### Method: `updateEntryEvent (entry)`

 **UC1: Update an edited entry**

**Precondition:** The user has previously added entries and edited one of them

**Postcondition:** The user will have a update entry dispalyed in the list of entries.

**Main Scenario:**

1.  The user chooses an entry to edit.
    
2.  The user clicks the “Edit” button.
    
3. In the input fields for the title and text the user can then endit the entry.

4. The user clicks "Update Entry" to have the original entry updated to the edited one.
    
**Alternative Scenarios:**

1.  The user exclude title or text in the update entry and will not be able to update the entry.
    

### Test Case:

**TC1.1 Successfully update an entry**

 -   **Test Description:** A user click the "Update Entry" button to update the original entry to the edited one.

    - **Scenario:** The user wants to change the title or the text in their entry and therefor clicks the "Edit" button. They then make their edit and clicks the "Update Entry" button to make update.

    -  **Test Steps:**

1.  Choose an entry to edit.
    
2.  Click the “Edit” button.
    
3.  Edit the title, text, or both.
    
4.  Click the "Update Entry" button.
    
**Expected Results:** The update entry should be displayed in the list of entries.

  
**TC1.2: Unsuccessful to update an entry**

 -   **Test Description:** A user tries to update an entry but doesn't include a title or text.

    - **Scenario:** The title or text has been left out when the user tries to update the original entry with the edited one..

    -  **Test Steps:**

1.  Choose an entry to edit.
    
2. Click the “Edit” button.

3. Edit the title or text but leave one of the fiels empty.

5. Click the "Update Entry" button.
     
**Expected Results:** The user will be unable to update the edited entry and there will be an alert showing the user what they need to do. 

### Method: `displayEntryEdit (entry)`

 **UC1: Display an update of an edited entry**

**Precondition:** The user has edited one of the entries and has also updated it.

**Postcondition:** The user will have a update entry dispalyed in the list of entries.

**Main Scenario:**

1.  The user chooses an entry to edit.
    
2.  The user clicks the “Edit” button.
    
3. In the input fields for the title and text the user can then endit the entry.

4. The user clicks "Update Entry" to have the original entry updated to the edited one.

6. The updated, edited, entry will now be displayed in the list of entries.
    
**Alternative Scenarios:**

1.  The user exclude title or text in the update entry and will not be able to update the entry and it will therefore not be displayed in the list of entries.
    

### Test Case:

**TC1.1 Successfully display the update of an edited entry**

 -   **Test Description:** A user click the "Update Entry" button to update and display the original entry to the edited one.

    - **Scenario:** The user wants to change the title or the text in their entry and therefor clicks the "Edit" button. They then make their edit and clicks the "Update Entry" button to make update.

    -  **Test Steps:**

1.  Choose an entry to edit.
    
2.  Click the “Edit” button.
    
3.  Edit the title, text, or both.
    
4.  Click the "Update Entry" button.
    
**Expected Results:** The edited entry should be updated and displayed in the list of entries.

  
**TC1.2: Unsuccessful to display the update of an edited entryy**

 -   **Test Description:** A user tries to update an entry but doesn't include a title or text.

    - **Scenario:** The title or text has been left out when the user tries to update the original entry with the edited one..

    -  **Test Steps:**

1.  Choose an entry to edit.
    
2. Click the “Edit” button.

3. Edit the title or text but leave one of the fiels empty.

5. Click the "Update Entry" button.
     
**Expected Results:** The user will be unable to display the update of the edited entry and there will be an alert showing the user what they need to do. 