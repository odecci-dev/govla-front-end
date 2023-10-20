

/ ************           *************/
/ ************           *************/
/ ************ June 2023 *************/
/ ************           *************/
/ ************           *************/



June 05, 2023 (Monday)
• Dashboard still in progress (80% finished)
• Changes are made only on _dashboard.scss and dashboard.html
• Comments were made for better comms
• Added new variables for buttons and box-shadows (./res/scss/modules/abstracts/_variables.scss)
• Modified some font-size variables (./res/scss/modules/abstracts/_variables.scss)
• TODO: Graph on dashboard (dashboard.html > .big-card > .div-2 > .graph)


June 06, 2023 (Tuesday)
First Commit:
• Implemented Line Chart using Chart.js (https://www.chartjs.org/docs/latest/charts/line.html)

Second Commit:
• Finished Dashboard


June 07, 2023 (Wednesday)
First Commit:
• Implemented the All Members Page on all-members.html
- All-Members-Container-1
    * Container 1: All Members - Header, Buttons, and Searchbar 
• Incorporated the SASS Mixins (../res/scss/modules/abstracts/_mixins.scss)
• Simple page navigation through anchor elements URL 

Second Commit:
• All Members: Table Container
• and Pagination


June 08, 2023 (Thursday)
First Commit:
• Finished the All Members Table Layout
- Table Container
    * Table, Table Checkbox, Table Header, Table Data, and Table Buttons
• Implemented checkall function in checkbox

Second Commit:
• Implemented Button Mixins in dashboard.scss
• Fixed some minor bugs of the navigation

Third Commit:
• Started the New Member Field Layout
• Created new HTML page (new-member.html) and
• Made _newMember.scss for styles
- In-progress (20%)


June 09, 2023 (Friday)
First Commit:
• New Member input fields (Container 1)

Second Commit:
• Styled the input fields (Container 1)
- Added new mixins

Third Commit:
• Select Input Dropdown

Fourth Commit:
• Finished the New Member Field Layout for Single
- Implemented contents
- Implemented the styles 


June 13, 2023 (Tuesday)
First Commit:
• New Member: Implemented the adjustments in Container 2 
- Fixed the overflow on input image (scss)

Second Commit:
• New Member: Implemented the adjustments in Container 1
- Changed the checkbox to radio buttons (HTML element)

Third Commit:
• All Members: Implemented dropdown menu on Borrower Dropdown Button
- Reused the styles from the Side Nav and made some minor tweaks
- Reused the dropdown function from the Side Nav and made some minor tweaks

Fourth Commit:
• New Members: Started the implementation of the Sprint 2 Revisions
- Adjustment on Fieldsets in HTML
- Adjustments on SASS Mixins Grid


June 14, 2023 (Wednesday)
First Commit:
• New Members: Implementation of Sprint 2 Revisions
- Adjustment on Fieldsets in HTML
- Adjustments on SASS Mixins Grid
- Implemented the radio buttons

Second Commit:
• New Members Container 2 
- Fixed Colspan 2 content overflow

Third Commit:
• Implemented the new container for Job Info 
- Added new HTML elements for the input field requirements
- Added new SCSS Mixins for Container 3
- Reused most of the styles of Container 1 for Container 3
- Enabled the Overflow-Y for vertical scroll

Fourth Commit:
• Made some minor adjustments in Dashboard for responsiveness
- Modified styles for Dashboard
- Turning the Grid Layouts into Mixins for reusability and neatness

Fifth Commit:
• New Member: Business Check Toggle 
- Modified some HTML Elements inside the New Member
- Modified styles for Check toggle Radio Button

Sixth Commit:
• Dashboard: Minor adjustments
- MD-Con-3: Circle Progress Bar and Card 2 div padding


June 15, 2023 (Thursday)
First Commit: 
• New Member: Implementation of Family Background Information
- Added new html elements for New Members Container 4
- Added styles for Container 4
- Finished the Family Background Fieldsets

Second Commit: 
• New Member: Implementation of Business Information
- Added new html elements for New Members Container 5
- Added styles for Container 5
- In-progress on completing Family Background Fieldsets (75%)

Third Commit:
• New Member: Finished the Implementation of Business Information
- Added styles for Container 5
- Reused some styles from All Members Table

Fourth Commit:
• Business Information Form Toggle
- Added new function in app.js for business form toggle (show or hide)

Fifth Commit:
• Family Background Information Form Toggle
- Added new function in app.js for Family Background form toggle (show or hide)
- Civil status married 

Sixth Commit:
• Child Information Cloning
- Added new function in app.js for Adding
- and Subtract nodes
- Made the container responsive (While adding or subtracting the height of the container varies)

Sixth Commit:
• Started the implementation of New Application Module 
- Added _newApplication.scss file in SCSS pages folder 
- Sorted the SCSS Files, created a folder for each page
• Linked the New Application HTML file to the Navigation Links

Seventh Commit:
• New Application: Progress Bar Layout

Eigth Commit:
• New Application: Loan Details Input Fields
- Added new Mixins 

Ninth Commit:
• New Application: Co-Maker New Application Form Fields
• New Application: Co-Maker Job Information Input Fields

Tenth Commit:
• New Application: Payment History Table

Eleventh Commit:
• New Application: Loan History Table


June 16, 2023 (Friday)
First Commmit:
• New Application: In-progress making the Assets and Properties Section
• New Member: Added the the Family Background Information Form Toggle Function in New Member

Second Commmit:
• New Application: Completed the Assets and Properties Section
• Improved the Add and Subtract Child Functions (app.js)
- in Family Background Information Form
- and in Assets and Properties
• Modified some Mixins (_mixins.scss)
- New Application Grid layouts for Assets and Properties

Third Commmit:
• New Application: Completed Appliances and Bank Accounts Field Section 
- New Application Grid layouts for Appliances and Bank Accounts Field Section 
- Add and Subtract Button Functions (app.js)

Fourth Commmit:
• New Application: Started the Signature Field Section


June 19, 2023 (Monday)
First Commit:
• New Application: Completed Signature Field Section
- Added SCSS Functions for advance positioning (_functions.scss)

Second Commit:
• New Application: Form Progress Bar
- Added a function for progress tracking (app.js)
- TODO: CI Page, Approval and Releasing

Third Commit:
• New Application: CI Page
- Created a new HTML Page (new-application-credit-investigation.html)
- Added new required HTML Elemnts
- Added new styles in SCSS + New decline button Mixin
- Updated the imported Google Fonts
    - The import url was embedded to the _typography.scss (from _base.scss to _typography.scss)
    - Added new font variable in the _variables.scss


June 21, 2023 (Wednesday)
First Commit:
• Updated the Navlinks
- Wrapped it with anchor tags 
- Linked the a tags to their particular html page
• New Application: CI Progress Button
- When the Save & Proceed to CI Button is clicked, it adds a .active className on progress level 2
• Downloaded a time.svg on Figma

Second Commit:
• New Application: Completed the Approval Page
- Linked the submit for approval button from CI Page to Approval

Third Commit:
• Created new HTML for New Application Releasing (new-application-releasing.html)
• New Application: Completed the Releasing Page
- Linked the approve for releasing button from Approval Page to Releasing
- Responsive progress bar level 
• Custom className for Buttons (_base.scss):
- Made .button
- Made .declineButton (_mixins.scss)
- Made .releaseButton (_mixins.scss)
• Changed the hex of variable $green from (_variables.scss)

Fourth Commit:
• New Application Releasing: Progress Bar Indicator
- Made the release level green while in Releasing Page
- Added activeGreen class 

Fifth Commit:
• Created new HTML for New Application Group (new-application-group.html)

Sixth Commit:
• Completed the New Application Group
- Completed the layout for New Application Group
- TODO: Modal for add new member for the group 

Seventh Commit:
• Sprint 3 Revisions
- Adjustments: Moved the Assets and Properties, Appliances and Bank Accounts after the Job Information Container

June 22, 2023 (Thursday)
First Commit:
• Login Page 
- Added a transition when focused on input field

Second Commit:
• New Application CTA Buttons Hover
- Made some button mixins adjustments in _mixins.scss
- Minor changes on _base.scss
    - .button
    - .declineButton
    - .releaseButton
- Made some adjustments in _newApplication.scss incorporating the modified mixins
- Copy and pasted the na-container-wrapper in all new-application pages

Third Commit:
• New Application Loan and Payment History Modal
- Moved the Loan and Payment Container inside the modal (new-application.html)
- Downloaded a x-circle svg from Iconduck for the Modal
- Added a function for the modal in app.js
• Created a new scss component called _animation.scss

Fourth Commit:
• New Application: Completed the Loan and Payment History Modal
- Added some animations when toggling on and off
- Added the animations from the _animation.scss
- Added some functions in the existing modal function (app.css)

Fifth Commit:
• New Application: Completed the Loan and Payment History Modal

Sixth Commit:
• New Application: Adjustments on Assets and Properties
- Modified the function add and subtracting
- Modified the container styles

Sixth Commit:
• Loan and Payment Modal was implemented to the whole New Application Module
- Added the modal to:
    - new-application-credit-investigation
    - new-application-approval
    - new-application-releasing


June 23, 2023 (Friday)
First Commit:
• Created the New Application Modal IN-PROGRESS
- Reused the fields from All Members Page
- Reused and modified some styles from allMembers.scss
- Reused the function from Loan and Payment Modal for showing, closing and animation

Second Commit:
• Implemented the New Application & Checkbox IN-PROGRESS
- Applied all the modal elements in each pages
• Reapplied a deleted function from previous commit for Checkboxes in All Members Page (app.js)

Third Commit:
• Added an animation in All Members Checkboxes
- Created an animation from an existing animation and modified it

Fourth Commit:
• All Members: Sprint 3 
- Created new dropdown button for Type Of Loan
- Added a dropdown button animations
• Modified the Navlinks
- Commented the New Member Page

Fifth Commit:
• All Members: Sprint 3 
- All Members Revisions

Sixth Commit:
• All Members: Sprint 3 
- All Members Revisions

Seventh Commit:
• All Members Sprint 3: Created a All Members Co-borrower page  
- Added an all-member-co-borrower.html

Eight Commit:
• Sprint 3: Implemented the Holiday in Submenu Navlinks

Ninth Commit:
• Maintenance: Field Officer IN-PROGRESS

Tenth Commit:
• Maintenance: ✅ Field Officer New Field Officer 
- Created new html page for New Field Officer
- All styles we're inside the _maintenance.scss

Eleventh Commit:
• Maintenance: Started the Field Area
- Created new html page for Field Officer

Twelfth Commit:
• Maintenance: Completed Layout for Field Area 


June 26, 2023 (Monday)
First Commit:
• Field Area Maintenance: Table body hover animation

Second Commit:
• Field Area Maintenance: Location Chips
- Created function for removing chips (app.js)

Third Commit:
• Field Area Maintenance: Completed the Layout

Fourth Commit:
• Field Area Maintenance: Un-assigned Locations Function
- When clicked the location data from the table are converted into a chip in the location input 

June 27, 2023 (Tuesday)
First Commit:
• Field Area Maintenance Form Functions
- When the data from the table is clicked it displays in the input
- When the save button is clicked data from input is stored in localStorage

Second Commit:
• New Application Modal 
- Seperated the script of the New Application Module
- Fixed a bug

June 29, 2023 (Thursday)
First Commit
• Created the Loan Type page for Maintenance
- Commented the animation for clicking outside the modal (newApplication.js, line 25-36)
- TODO: Trash button for Field Area Maintenance

Second Commit
• Completed the Layout for Loan Type Maintenance
- TODO: Add Loan Type Maintenance

Third Commit
• Created the Add Loan Type page for Maintenance

Fourth Commit
• Completed the Add Loan Type page for Maintenance
- Added Grid templates in _mixins.scss

Fifth Commit
• Created the Holiday Page for Maintenance

Sixth Commit
• Completed the Holiday Page for Maintenance

Seventh Commit
• Created the Add Holiday Page for Maintenance

Eight Commit
• In-progress Holiday Maintenance
• Created navigation.html 
• Created new-application-modal.html

Ninth Commit
• New Application Modal Loan Type Dropdown
- Implementation of the design

June 30, 2023 (Friday)
First Commit:
• New Application Children's Info Add&Sub Child Function Optimization
- Made changes in the function
- When incrementing the row fields container the container IDs also increments 



/ ************           *************/
/ ************           *************/
/ ************ July 2023 *************/
/ ************           *************/
/ ************           *************/



July 03, 2023 (Monday)
First Commit:
• New Application Revisions 
- Job Information: Employment and Unemployment Toggle
- Radio Buttons: Border 4px, Height 4.6rem
- Implemented the Assets and Properties, Appliances, and Bank Accounts Layout Revisions
• Implemented incrementing of IDs in  Assets and Properties, Appliances, and Bank Accounts Forms

July 04, 2023 (Tuesday)
First Commit:
• New Application: Loan Details Layout Revisions 
- Increased height of each table 
- Custom scrollbar

Second Commit:
• Started the User Access and Control 
- Created user.html
- Added user link in sidebar nav

Third Commit:
• Completed the table layout for User List

Fourth Commit:
• Completed the User Registration and Restrictions

Fifth Commit:
• Updated the New Application Modal
• Created a seperate JS file for New Application Modal (newApplicationModal.js)

Sixth Commit:
• Completed Application List

Seventh Commit:
• Updated New Application Modal

July 05, 2023 (Wednesday)
First Commit:
• New Application Module: Updates on btns, modal, and forms
- Updates:
    - Radio Buttons
    - Loan Modal
    - Job Informations

Second Commit:
• New Application Module: Updated Assets and Properties
- Update:
    - Buttons form toggle

Third Commit:
• New Application Module: Updated Progress Bar
- Update:
    - Progress Bar
    - Progress Level

Fourth Commit:
• New Application Module: Updated Dropdown and Toggles
• New Application Module: Modal Dropdown
- Update:
    - Select Dropdown
    - Assets and Properties Y or N Toggle
• Modified Files
- newApplication.js
- newApplication.scss

- modal.scss
- _mixins.scss

Fifth Commit:
• New Application Module: Sprint 1
- Implemented the New Application Layout

Sixth Commit:
• New Application Module: Updated Navigation Links

July 06, 2023 (Thursday)
First Commit:
• Navlinks URL transferred from HTML pages to links.js 
- For fast access when modifying the URL
• Made Folders for HTML Pages
- For better file structure
    - transferred each HTML Pages for each respective Folders

Second Commit:
• Field Area Maintenance: Removed Input Location
- Modified the location chips container
• Made overflow-y auto for scroll

Third Commit:
• New Application Modal: Modified the button
• New Group Application Modal: Completed the Group Application Modal

Fourth Commit:
• Applications Modal: Fixed bugs in the modals

Fifth Commit:
• New Application Module (Group): Completed the module

Sixth Commit:
• Member: Button links transferred to members.js

Seventh Commit:
• Members: View members
• Members: Button transitions
• New Application Module: Button transitions

Eighth Commit:
• New Application Module: Modified Loan & Payment Modal Button
- Passed the viewLoanDetailsButton class for every corresponding button

Ninth Commit:
• Members and Applications: Modified Checkboxes
- Addition to Global Styles (_base.scss)
- Passed the checkboxes class for every corresponding elements in the table
    - .checkboxes 
- Removed every input=['checkbox'] specific styles

Tenth Commit:
• Fixed all console error messages
• Transferred all navigation functions from app.js to nav.js


July 07, 2023 (Friday)
First Commit:
• Converted all button styles to Global Styles (_base.scss)
• Fixed all console error messages
• TODO: 
    - Filter Modal Design
    - All List Filter
    - Modal Search Filter

Second Commit:
• Modified trash hover
• Modified checkbox
    - Background color #D9D9D9 (_mixins.scss)

Third Commit:
• User Access Control: Hover

Fourth Commit:
• Member List Filters (membersModal.js)
- Created a new js file for filter modal

Sixth Commit:
• Implemented filter layouts for Member and Application Lists
• Renamed membersModal to filterModal.js

Seventh Commit:
• Created Borrower & Co-Borower View and Edit
• Converted button styles to Global Styles

Eight Commit:
• Created a HTML page for Group View (all-members-view-group.html)

Ninth Commit:
• Finished View Group Members

July 11, 2023 (Tuesday)
First Commit:
• Made the overflow-y:auto global to all tables 

Second Commit:
• Minor modifications in loan & payment modal (_modal.scss)

Third Commit:
• Modified the all-members-view-borrower's co-maker section (all-members-view-borrower.html)

Fourth Commit:
• Created new application view (new-application-view.html)

Fifth Commit:
• Conected Application List view button to new-application view
- app.js

Sixth Commit:
• Minor modifications in view application buttons layout

Seventh Commit:
• Added table class in all rowspan container with tables 

Eighth Commit:
• User Module: Created user-view.html

Ninth Commit:
• Completed Select All Checkbox function (app.js)
- all-members-borrower.html

Tenth Commit:
• Implemented Checkbox function 
• TODO: Checkbox function for User Restriction


July 12, 2023 (Wednesday)
First Commit:
• Implemented Checkbox function for User Restriction (user.js)

Second Commit:
• Made the button styles consistent

Third Commit:
• Made navigation and url changes consistent when navlink button is active
• Made the button styles consistent (user.html)

Fourth Commit:
• Enhanced navigation styles 

Fifth Commit:
• Enhanced overall styles 
• Created dummy data for tables


July 13, 2023 (Thursday)
First Commit:
• Updated loan and payment details modal

Second Commit:
• Upload Image Function


July 17, 2023 (Monday)
First Commit:
• Applications: Updated Image Function and Layout

Second Commit:
• Updated New Group Modal


July 18, 2023 (Tuesday)
First Commit:
• Updated table layouts for responsiveness

Second Commit:
• Updated the Sidenav Bar responsiveness
- Added media queries for the Sidenav (_nav.scss)

Third Commit:
• New Field Officer: Updated the layout
• Created a maintenance.js for maintenance module

Fourth Commit:
• Created breakpoints sass folder for layout breakpoints
- breakpoints
    - _breakMaintenance.scss

Fifth Commit:
• Created _grid.scss for layout breakpoints

July 19, 2023 (Wednesday)
First Commit:
• Area Module: Completed✅
- Completed the Area List Design
- Completed the Add New Area
- Completed the Unassigned Location List

Second Commit:
• Area Module: Updated responsive layout

Third Commit:
• Nav: Updated responsive layout

July 20, 2023 (Thursday)
First Commit:
• Holiday Module: Implemented the Calendar
- Imported jQuery and jQuery UI for Calendar

Second Commit:
• Holiday Module: Made the Calendar Responsive

July 21, 2023 (Friday)
First Commit:
• Holiday Module: Updated the Calendar

July 22, 2023 (Saturday)
First Commit:
• Application Module: Updated Business Information
- Fixed table layout for business information

July 24, 2023 (Monday)
First Commit:
• Holiday Module: Completed the Module

Second Commit:
• Loan Types Module: Implemented Checkbox Function

Third Commit:
• Loan Types Module: Finished the Layout
- Add new loan types
***TODO: Fix Bug in Dropdowns in add loan types page

July 25, 2023 (Tuesday)
First Commit:
• Loan Types Module: Fixed Bug in Dropdowns

July 26, 2023 (Wednesday)
First Commit:
• Applications Module: Validation Layout
- Made validation.js for testing of form validations
- Changed the html layout for Assets and Properties, Appliances and Bank Accounts buttons
- Added new styles for validation in _base.scss

July 28, 2023 (Friday)
First Commit:
• Holiday Module: Calendar Box-shadow Adjustment

July 31, 2023 (Monday)
First Commit:
• Application Module: Credit Investigation Add Button Layout Adjustment
- From grid to flex

Second Commit:
• Application Module: Approval Latest Revision

Third Commit:
• Application Module: Started Relasing Latest Revision

Fourth Commit:
• Application Module: Completed✅ Relasing Latest Revision

// TODO: Remove this when releasing Revision is Completed

August 01, 2023 (Tuesday)
First Commit:
• Application Module: Implemented the Decline Modal 

// TODO:

Credit Investigation

Validation Control
Asking Modal
Kung kumpleto na -> Validation Modal

List Standard
- Search
- Filter
- Sorting

August 03, 2023 (Thursday)
First Commit:
• Application Module: Made the Upload Button on signature field responsive
• SCSS: Moved _breakpoints to abstracts folder

Second Commit:
• Application Module: Made the fields with Add and Sub Button Responsive

Third Commit:
• Application Module: Minor changes
- Font color and font weight of input fields from Monthly Bills to Business Info to Loan Details

Fourth Commit:
• Credit Investigation Module: Completed✅ CI List

Fifth Commit:
• Modals: Updated Successfully Modal

Sixth Commit:
• Modals: Move To Trash Successfully Modal

Seventh Commit:
• Modals: Deleted Successfully Modal

Eight Commit:
• Modals: Restored Successfully Modal

August 07, 2023 (Monday)
First Commit:
• Started the implementation of Collection List
- KC/collection/collection-list.html

Second Commit:
• Completed✅ the implementation of Collection List
• Started the implementation of Adding New Collection
- Added collection.js for collection

Third Commit:
• Finished Collection Dropdown Button

Fourth Commit:
• Started Implementing Collection Search Bar

August 08, 2023 (Tuesday)
First Commit:
• New Collection: Implemented the details dropdown

Second Commit:
• New Collection: Implemented Print and Remit Button

August 15, 2023 (Tuesday)
First Commit:
• New Collection: Revisions
- Button visibility for print and remit buttons
• New Collection: Implemented the printables
- html2canvas.js (for printables)

August 16, 2023 (Wednesday)
First Commit:
• New Collection: Finished the printables layout

August 17, 2023 (Thursday)
First Commit:
• Collection Module: Created the collection remittance page
- collection-remittance.html

Second Commit:
• Collection Module: Remittance In-Progress 80% Complete
- Reference List
- Field Expenses Modal

August 18, 2023 (Friday)
First Commit:
• Collection Module: Implemented the Collection List Rev.


August 22, 2023 (Tuesday)
First Commit:
• Collection Module: Remit Modal

Second Commit:
• Collection Module: Viewing the Collection


August 23, 2023 (Wednesday)
11AM (Time-in)

• Collection Module: Implemented the Cash Denomination Modal


August 24, 2023 (Thursday)
First Commit:
• Collection Module: Completed✅ the Cash Denomination Modal

August 25, 2023 (Friday)
• Remittance Mobile Module: Started implementing the mobile version


August 29, 2023 (Tuesday)
• Remittance Mobile Module: Continous implementation of the mobile version
- Breakpoints
    - _nav.scss (
        .nav, 
            .nav-links, .nav-con-2, 
        .profile-nav, 
            .profile-nav-con
        )
    - _newApplication.scss (
        .nal-con-1,
            h2, p-1, p-1b, container
        )


August 30, 2023 (Wednesday)
First Commit:
• Collection Module: Collection Add New - Area Toggle 
- Button
- Responsiveness

Second Commit:
• Collection Module: Printables Revision
- made collection-print.html 
- from modal to another window


August 31, 2023 (Thursday)
First Commit:
• Collection Module: Completed✅the Printables

Second Commit:
• Collection Module: Printables Minor Bug Fixes


September 01, 2023 (Friday)
First Commit:
• Collection Module: Completed✅the Collection View

Second Commit:
• Collection Module: Created Collected View
- collection-collected.html

Third Commit:
• Collection Module: Completed✅the Collection Collected View

Fourth Commit:
• Collection Module: Created Collection Collected All View
- collection-collected-all.html

Fifth Commit:
• Collection Module: Completed✅the Collected All View

Sixth Commit:
• Collection Module: Field Officer Search


September 04, 2023 (Monday)
• Collection Module: Remittance Table Footer
- Div for total remit


September 05, 2023 (Tuesday)
• Implementation of global table height adjustments
• Added a svg for invalid modal


September 06, 2023 (Wednesday)
• Collection Remittance Module Mobile: Started the implementation of Mobile Remittance Module
- Field Expense Modal for Mobile Adjustment


September 07, 2023 (Thursday)
• Collection Remittance Module Mobile: Continuation of Mobile Remittance Module
- Translating the table from desktop to a accordion div in mobile
- Remittance Modal for Mobile Adjustment
• Collection Remittance Module: Created a new page for remitted
- collection-remittance-remitted.html
• Collection Remittance Module: Completed✅ Collection Remitted
• Collection Remittance Module: Created a new page for remitted all
- collection-remittance-remitted-all.html


September 08, 2023 (Friday)
• Collection Remittance Module: Continuation
- collection-remittance-remitted-all.html
• Collection Remittance Module: Completed✅ Collection Remitted All


September 11, 2023 (Monday)
• Collection Module & Collection Module Mobile
• Implementation of Search Bar Globally
    - Collection Module
    - Maintenance Module
    - Transactions Module
    - Members Module
    - User Module
    - _modals


September 12, 2023 (Tuesday)
First Commit:
• Collection Module & Collection Module Mobile: Completed✅


September 13, 2023 (Wednesday)
First Commit:
• Application Module: Dropdown Value Issue Fixed
- Made the option div value consistent with the input radio value
- As well as the selected option value

Second Commit:
• Maintenance Module: Dropdown Value Issue Fixed
- maintenance-new-field-officer.html
- maintenance-loan-type.html
• Maintenance Module: Button Link
- maintenance-field-officer.html


September 14, 2023 (Thursday)
First Commit:
• Remittance Module & Remittance Module Mobile: Optimized✅
- Deletion of html pages
    - collection-remittance-field-expense.html
    - collection-remittance-remitted.html
    - collection-remittance-remitted-all.html

Second Commit:
• Collection Module: Optimized✅
- Deletion of html pages
    - collection-collected.html
    - collection-collected-all.html


September 15, 2023 (Friday)
First Commit:
• Collection Module: Area Menu Toggle Optimized✅
- collection.js

• Collection Module: 
- Deletion of html pages
    - collection-remittance-field-expense.html
    - collection-remittance-remitted.html
    - collection-remittance-remitted-all.html

- Improvements in custom-scrollbars
    - _mixins.scss


September 18, 2023 (Monday)
First Commit:
• Collection Module: Summary Printables Completed✅
- _modal.scss


September 19, 2023 (Tuesday)
• Collection Module: Summary Printables Optimized✅
- made consistent with previous printables 
- collection-summary-print.html


September 20, 2023 (Wednesday)
• Maintenance Module: Optimization
- Add New Field Officer
- Loan Types
    - maintenance.js
    - _maintenance.scss


September 21, 2023 (Thursday)
First Commit:
• Application Module: Approval Revision
- Approval Module: Dropdowns
    - _modal.scss
- Decline Modal Implementation


September 23, 2023 (Saturday)
First Commit:
• Fixed modal styles for summary modal container


September 25, 2023 (Monday)
First Commit:
• Completed✅ Receipt Voucher
- HTML
    - KC/collection/collection-recipt-voucher-print.html
- SCSS/_collection.scss
   - .receipt-voucher-container


September 26, 2023 (Tuesday)
First Commit:
• Implemented the View Loan Summary Modal
    • new-application-approval.html
        - made new dialog element for modal
    • newApplication.js 
        - implementation of modal functionality
    • _modal.scss
        - made new class (.na-receipt-voucher-modal)

Second Commit:
• Implementation of View Loan Summary Modal to Relassing Module

Third Commit:
• User Module: Restrictions Layout
    - Made changes from table to flex-box


September 27, 2023 (Wednesday)
First Commit:
• User Module: Restrictions Layout Optimization✅

Second Commit:
• Maintenance Module: Loan Types Fixed Dropdown✅
    - maintenance.js

Third Commit:
• Application Module: Optimized and Fixed Dropdown✅
    - newApplication.js

Fourth Commit:
• Application Module: Optimize Add and Subtract Functions✅
    - newApplication.js
    • Implemented significant changes in html elements in add and subtract buttons
    Changed onclick to data attributes(data-add-button-#, data-sub-button-#)
        - new-application.html
        - new-application-view.html
        - new-application-credit-investigation.html
        - new-application-credit-investigation-view.html
        - new-application-approval.html
        - new-application-releasing.html
        - new-application-releasing-completion.html

        
September 28, 2023 (Thursday)
First Commit:
• Application Module: Completed Loan Summary Modal Revs✅


Second Commit:
• Application Module: Implemented Receipt Voucher✅
    - new-application-receipt-voucher-print.html
    - new-application-approval.html
    - new-application-releasing.html
    - new-application-releasing-completion.html
    - _modal.scss
    - _collection.scss
    • Added Done Button in Receipt Voucher Print
        - new-application-receipt-voucher-print.html
        - collection.js


Third Commit:
• Application Module: Passbook
    - new-application-receipt-voucher-print.html
    - new-application-approval.html
    - new-application-releasing.html
    - new-application-releasing-completion.html
    - _modal.scss
    - _collection.scss

• Moved all print functions in (printables.js)
 - from collection.js

• Moved all print styles in (_printables.scss)
 - from collection.scss

• Implemented Asking Modal in Printing Receipt Voucher and Passbook

• Added Proceed Button in Receipt Voucher Print
    - new-application-receipt-voucher-print.html
    - proceeds to the passbook page for printing

• Added Back Button in Passbook(Front) Print
    - back button shows Passbook(Back) for printing
    - new-application-passbook-print.html

• Added Done Button in Passbook(Back) Print
        - done button proceeds to Releasing Completion
        - new-application-passbook-print.html

*** Change collection.js to printables.js
*** Remove export in maintenance.js
*** Remove containerDefault mixin in _modal.scss

Issue: Printing Size not consistent with the design


September 28, 2023 (Friday)


October 02, 2023 (Monday)
First Commit:
• Started Implementing the Reports 
- Outstanding Reports

• Made reports folder for reports html pages
- outstanding-report.html

• Made _reports.scss

Second Commit:
• Finished Outstanding Reports Layout


October 03, 2023 (Tuesday)
First Commit:
• Reports Module: Outstanding Reports 

Second Commit:
• Reports Module: Started Collection Reports
- made collection-report.html 

• Reports Module: Completed Collection Reports✅

Third Commit:
• Reports Module: Completed Past Due Reports✅

Fourth Commit:
• Reports Module: Completed Savings Reports✅

Fifth Commit:
• Reports Module: Completed Release Reports✅


October 04, 2023 (Wednesday)
First Commit:
• Reports Module: Changed pathname
from
- collection-past-due.html
- collection-release.html
- collection-savings.html
to
- past-due-report.html
- release-report.html
- savings-report.html

Second Commit:
• Updated Links (links.js)

• Collection Module: Completed Collection Area List
- made collection-area-list.html 

Third Commit:
• Global Sizes: Adjustments
- _base.scss
- _mixins.scss
- _modal.scss
- _allMembers.scss
- _maintenance.scss
- _newApplication.scss
- _collection.scss
- _reports.scss
- _user.scss


October 05, 2023 (Thursday)
First Commit:
• Overview: Fixed bugs in Dashboard
    - app.js
    - _dashboard.scss
    - _mixins.scss
    - _base.scss
    - dashboard.html

• Created an Astro Project for Odecci Website Mockup (Templating)
    - gulp-sass
    - nodeJS

• GOVLA Weekly Huddle (Thursday)


October 05, 2023 (Friday)
• GOVLA Front-end Debugging
• Overview: Dashboard button class to element


October 09, 2023 (Monday)
First Commit:
• Maintenance Module: Completed Loan Type Revision✅
    Changes and additions are made in the ff.:
    - maintenance-add-loan-type.html
    - maintenance.js
    - _maintenance.scss
    - _base.scss
    - _mixins.scss
    - _fonts.scss
    - app.scss (enabled _fonts.scss)

• GOVLA Front-end Debugging


October 10, 2023 (Tuesday)
First Commit:
• GOVLA Front-end Debugging ✅
    - all-members.html (select checkbox)
    - Maintenance Module: Holiday (container)
        - _maintenance.scss

KC/dropdown.html

October 12, 2023 (Wednesday)
First Commit:
• GOVLA Front-end Debugging ✅
- Select Dropdown - Bug Fix


October 16, 2023 (Monday)
First Commit:
• Dashboard: Started Revision✅

Second Commit:
• Dashboard: Finished Revision✅


October 17, 2023 (Tuesday)
First Commit:
• Transactions: Printables - Voucher Layout Orientation✅

Second Commit:
• Transactions: Printables - Passbook Revision✅
• Reports: Started Revision
    - savings-report.html

Third Commit:
• Reports: Finished Revision✅
    - collection-report.html
    - past-due-report.html
    - release-report.html
    - savings-report.html

    
October 20, 2023 (Friday)
First Commit:
• Remittance Module: Dropdown Reference Number✅
- Removed search bar
- Removed filer modal
    Changes are made in the ff:
        - collection.js
        - _collection.scss
