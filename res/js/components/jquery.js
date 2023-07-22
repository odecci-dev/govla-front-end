
// ***** INCLUDE JQUERY 3.7.0 & JQUERY UI 1.13.2 ***** //

$( () => {
	$( "#datepicker" ).datepicker({	
		showButtonPanel: true,
		altField: "#formHolidayMonth, #formHolidayDay, #formHolidayYear",
    	altFormat: "DD, d MM, yy",
		buttonImage: "/res/assets/icons/calendar.svg",
		buttonText: "Select Date",
		showOn: "both",
		currentText: "Clear",
	});
	// $(".ui-datepicker-trigger").datepicker({
		// appendText: "Select Date",
	// })

	// $("#formHolidayMonth").datepicker({
		// altField: "#formHolidayMonth",
		// altFormat: "MM",
		// appendText: "Select Date",

	// });

	// $("#datepicker").datepicker({
	// 	altField: "#formHolidayDay",
	// 	altFormat: "DD",
	// });

	// $("#datepicker").datepicker({
	// 	altField: "#formHolidayYear",
	// 	altFormat: "yy",
	// });
} );

