
### Functional Requirements:

1.  **Add New Entry:**
    
    -   _Description:_ Users can create new journal entries.
    -   _Preconditions:_ User navigates to the "Add Entry" section.
    -   _Actors:_ Regular users.
    -   _Flow of Events:_
        1.  User fills in the entry title and text.
        2.  User submits the entry using the "Add Entry" button.
        3.  The system saves the entry to the journal.
         
2.  **Display Entries:**
    
    -   _Description:_ Previously created journal entries are displayed.
    -   _Preconditions:_ User navigates to the entry list above the text input fields. 
    -   _Actors:_ Regular users.
    -   _Flow of Events:_
        1.  User accesses the app.
        2.  The system retrieves and displays all previously added journal entries.
3.  **Delete Entry:**
    
    -   _Description:_ Users can delete specific journal entries.
    -   _Preconditions:_ Entries are displayed in the journal.
    -   _Actors:_ Regular users.
    -   _Flow of Events:_
        1.  User selects the entry to be deleted.
        2.  User clicks the "Delete" button.
        3.  The system removes the selected entry from the journal.
       
4. **Edit Entry**
	 -   _Description:_ Users can edit specific journal entries.
    -   _Preconditions:_ Entries are displayed in the journal.
    -   _Actors:_ Regular users.
    -   _Flow of Events:_
        1.  User selects the entry to be edited.
        2.  User clicks the "Edit" button.
        3.  The user uses the input fields to edit the entry.
        4. User clicks the "Update Entry" button.
        5. The entry will be updated and displayed in the list of entries.

        
6.  **View Entry Statistics:**
    
    -   _Description:_ Users can view statistics about their journal entries.
    -   _Preconditions:_ Entry is displayed and accessible.
    -   _Actors:_ Regular users.
    -   _Flow of Events:_
        1.  User selects a specific entry.
        2.  User clicks the "Stats" button.
        3.  The system displays statistics like word count and period count.

### Non-Functional Requirements:

1.  **Performance:**
    
    -   The system should load entries within 2 seconds of the user accessing the application.
2.  **Usability:**
    
    -   The user interface should be intuitive and easy to navigate without the need for detailed instructions.
3.  **Security:**
    
    -   Entries should be stored securely and inaccessible to unauthorized users.