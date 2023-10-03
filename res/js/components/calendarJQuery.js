// ***** INCLUDE JQUERY 3.7.0 & JQUERY UI 1.13.2 ***** //

$( () => {
	
	$( "#datepicker" ).datepicker({	
		showButtonPanel: true,
		// format: "MM, d DD, yy",
		// formatSubmit: "MM, d DD, yy",
		buttonImage: "/res/assets/icons/calendar.svg",
		buttonText: "Select Date",
		showOn: "both",
		currentText: "Clear",

		// * Displaying the selected date to the corresponding input field
		onSelect: function(date) { 

			const currentDate = new Date(date);
	
			const options = { 
				weekday:"long", day:"numeric", year:"numeric", month:"long"
			} // "Monday, July 24, 2023"
			
			const newDateFormat = currentDate.toLocaleDateString('en-us', options)
			const removeStringCommas = newDateFormat.replace(/,/g, '');
			const array = removeStringCommas.split(" ")
			let weekday = array[0]
			let month = array[1]
			let day = array[2]
			let year = array[3]
			
			let dayAndWeekday = day + " " + "(" + weekday + ")"
			// console.log(newDateFormat);
			// console.log(dayAndWeekday);

			const monthInputField = document.getElementById('formHolidayMonth')
			monthInputField.value = month

			const dayInputField = document.getElementById('formHolidayDay')
			dayInputField.value = dayAndWeekday

			const yearInputField = document.getElementById('formHolidayYear')
			yearInputField.value = year

		},

	});
	
	$( "#startDate" ).datepicker({
		showButtonPanel: true,
		// format: "MM, d DD, yy",
		// formatSubmit: "MM, d DD, yy",
		// buttonImage: "/res/assets/icons/calendar.svg",
		// buttonText: "Start Date",
		// showOn: "both",
		currentText: "Clear",
        onSelect: function( selectedDate ) {
			$( "#endDate" ).datepicker({
				minDate: selectedDate
			});
        }
    });
	
    $( "#endDate" ).datepicker({
		showButtonPanel: true,
		// format: "MM, d DD, yy",
		// formatSubmit: "MM, d DD, yy",
		// buttonImage: "/res/assets/icons/calendar.svg",
		// buttonText: "End Date",
		// showOn: "both",
		currentText: "Clear",
        onSelect: function( selectedDate ) {
			$( "#startDate" ).datepicker({
				maxDate: selectedDate
			});
        }
    });
	
} );
