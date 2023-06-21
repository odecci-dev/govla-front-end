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
