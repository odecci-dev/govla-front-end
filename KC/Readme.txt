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

June 26, 2023 (Tuesday)
First Commit:
• Field Area Maintenance Form Functions
- When the data from the table is clicked it displays in the input
- When the save button is clicked data from input is stored in localStorage

Second Commit:
• New Application Modal 
- Seperated the script of the New Application Module
- Fixed a bug

June 26, 2023 (Thursday)
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

June 26, 2023 (Friday)
First Commit:
• New Application Children's Info Add&Sub Child Function Optimization
- Made changes in the function
- When incrementing the row fields container the container IDs also increments 

June 03, 2023 (Monday)
First Commit:
• New Application Revisions 
- Job Information: Employment and Unemployment Toggle
- Radio Buttons: Border 4px, Height 4.6rem
- Implemented the Assets and Properties, Appliances, and Bank Accounts Layout Revisions
• Implemented incrementing of IDs in  Assets and Properties, Appliances, and Bank Accounts Forms

June 04, 2023 (Tuesday)
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

June 05, 2023 (Wednesday)
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

June 06, 2023 (Thursday)
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


June 07, 2023 (Friday)
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

June 11, 2023 (Tuesday)
First Commit:
• Made the overflow-y:auto global to all tables 

Second Commit:
• Minor modifications in loan & payment modal (_modal.scss)

Third Commit:
• Modified the all-members-view-borrower's co-maker section (all-members-view-borrower.html)

Fourth Commit:
• Created new application view (new-application-view.html)