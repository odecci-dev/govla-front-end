
// ***** INCLUDE JQUERY 3.7.0 & JQUERY UI 1.13.2 ***** //

$( () => {
	$( "#datepicker" ).datepicker({	
		showButtonPanel: true,
		altField: "#formHolidayMonth",
    	altFormat: "DD, d MM, yy",
		buttonImage: "/res/assets/icons/calendar.svg",
		buttonText: "Select Date",
		showOn: "both",
		currentText: "Clear",
		
	});
	$(".ui-datepicker-trigger").datepicker({
		appendText: "Select Date",

	})
	// $( "#alttext" ).addClass('primaryButton');
} );

