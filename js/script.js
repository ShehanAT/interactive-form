$(document).ready(function() { //dynamically creating all the error messages in HTML tags and adding them to the JavaScript to improve user experience
	$('#name').before('<p hidden id="emptyname">Please Enter A Valid First Name And Last Name</p>');
	$('#name').after('<p hidden id="invalidname" >Name Cannot Contain Letters At The Start</p>');
	$('#email').before('<p hidden id="emptyemail" >Please Enter A Valid Email</p>');
	$('#email').after('<p hidden id="invalidemail">Email Has To Contain @ and .com At The End</p>');
	$('#design').parent().parent().after('<p hidden id="warningdesign" style="font-size:26px; color:red;">Please Select A Design</p>')
	$($('.activities').children()[0]).after('<p id="emptyactivities" hidden>Please Select At Least One Activity</p>');
	$('#credit_card').before('<p hidden id="warningpayment" style="color:red; font-size:26px;">Please Select An Option</p>');
	$('#cc-num').before('<p hidden id="emptycc-num">Please Enter A Valid Credit Card Number</p>');
	$('#cc-num').after('<p hidden id="invalidcc-num">Invalid credit card number, must be 13 to 16 digist long</p>')
	$('#zip').before('<p hidden id="emptyzipnum">Please Enter A Valid Zip code');
	$('#zip').after('<p hidden id="invalidzipnum">Invalid Zip code, must be 5 digits long</p>');
	$('#cvv').before('<p hidden id="emptycvvnum">Please Enter A Valid CVV Number</p>');
	$('#cvv').after('<p hidden id="invalidcvvnum">Invalid CVV number, must be 3 digits long</p>');
	$('#other_role').hide();
	$('#credit_card').hide();
	$('#colors-js-puns').hide();
	$("#register").on("click", function(event) {
		event.preventDefault(); //prevents browser from refreshing each time register button is clicked
		if (checkallFields()) { //only if the checkallFields returns true will the form be submited
			$("#emptycvvnum").hide();
			$("#emptyzipnum").hide();
			$("#emptycc-num").hide();
			$("#totalnum").text("0");
			$('#all').prop("checked", false); //removes checked property on all checkboxes on form submission
			$('#js-frameworks').prop("checked", false);
			$('#js-libs').prop('checked', false);
			$('#express').prop('checked', false);
			$('#node').prop('checked', false);
			$('#build_tools').prop('checked', false);
			$('#npm').prop('checked', false);
			alert("Thank You, Form Has Been Submitted");
			location.reload(); //refresh the page on register button click
		}
	})

	function checkName() { //function that checks if name field has a value, if the value is invalid and shows the appropriate warning.
		var nameRegex = /([a-zA-Z]\w+?) ([a-zA-Z]\w+)|([a-zA-Z]\w+)/; //regex value to test the validity of the entered input value
		if ($("#name").val() == "") {
			$("#emptyname").show();
			$("#invalidname").hide();
		} else if (nameRegex.test($("#name").val()) == false) {
			$("#invalidname").show();
			$("#emptyname").hide();
		} else if (nameRegex.test($("#name").val())) {
			$("#invalidname").hide();
			$("#emptyname").hide()
		}
	}
	$('#name').on('change', function() { //event listeners to call checkName and checkEmail function on form field change.
		checkName();
	});
	$('#email').on('change', function() {
		checkEmail();
	});

	function checkEmail() { //function that checks if email field has a value, if the value is invalid and shows the appropriate warning.
		var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regex value to test the validity of the entered input value
		if ($("#email").val() == "") {
			$("#emptyemail").show();
			$("#invalidemail").hide();
		} else if (emailRegex.test($("#email").val()) == false) {
			$("#invalidemail").show();
			$("#emptyemail").hide();
		} else if (emailRegex.test($("#email").val())) {
			$("#invalidemail").hide();
			$("#emptyemail").hide();
		}
	}
	//event listeners for activities checkboxes, shows total cost of activities in a h4 tag bellow the checkboxes
	$("#all").click(function() {
		$(this).data('clicked', true);
		$("#totalnum").text(parseInt($("#totalnum").text()) + 200);
		var ischecked = $(this).is(":checked");
		$("#emptyactivities").attr('checked', 'checked');
		$("#emptyactivities").hide();
		if (!ischecked) { //if check box is checked then unchecked subtract appropriate amount from the total cost
			$("#totalnum").text(parseInt($("#totalnum").text()) - 400);
		}
	})
	$("#js-frameworks").click(function() {
		$(this).data('clicked', true);
		$("#express").attr('disabled', true);
		var ischecked = $(this).is(":checked");
		$("#emptyactivities").attr('checked', 'checked');
		$("#emptyactivities").hide();
		$("#totalnum").text(parseInt($("#totalnum").text()) + 100);
		if (!ischecked) { //if check box is checked then unchecked subtract appropriate amount from the total cost
			$("#totalnum").text(parseInt($("#totalnum").text()) - 200);
			$("#express").attr('disabled', false);
		}
	});
	$("#js-libs").click(function() {
		$(this).data('clicked', true);
		$("#node").attr('disabled', true);
		var ischecked = $(this).is(":checked");
		$("#totalnum").text(parseInt($("#totalnum").text()) + 100);
		$("#emptyactivities").attr('checked', 'checked');
		$("#emptyactivities").hide();
		if (!ischecked) { //if check box is checked then unchecked subtract appropriate amount from the total cost
			$("#totalnum").text(parseInt($("#totalnum").text()) - 200);
			$("#node").attr('disabled', false);
		}
	})
	$("#express").click(function() {
		$(this).data('clicked', true);
		$("#js-frameworks").attr('disabled', true);
		var ischecked = $(this).is(":checked");
		$("#totalnum").text(parseInt($("#totalnum").text()) + 100);
		$("#emptyactivities").attr('checked', 'checked');
		$("#emptyactivities").hide();
		if (!ischecked) { //if check box is checked then unchecked subtract appropriate amount from the total cost
			$("#totalnum").text(parseInt($("#totalnum").text()) - 200);
			$("#js-frameworks").attr('disabled', false);
		}
	})
	$("#node").click(function() {
		$(this).data('clicked', true);
		$("#js-libs").attr('disabled', true);
		var ischecked = $(this).is(":checked");
		$("#totalnum").text(parseInt($("#totalnum").text()) + 100);
		$("#emptyactivities").attr('checked', 'checked');
		$("#emptyactivities").hide();
		if (!ischecked) { //if check box is checked then unchecked subtract appropriate amount from the total cost
			$("#totalnum").text(parseInt($("#totalnum").text()) - 200);
			$("#js-libs").attr('disabled', false);
		}
	})
	$("#build_tools").click(function() {
		$(this).data('clicked', true);
		var ischecked = $(this).is(":checked");
		$("#totalnum").text(parseInt($("#totalnum").text()) + 100);
		$("#emptyactivities").attr('checked', 'checked');
		$("#emptyactivities").hide();
		if (!ischecked) { //if check box is checked then unchecked subtract appropriate amount from the total cost
			$("#totalnum").text(parseInt($("#totalnum").text()) - 200);
		}
	});
	$("#npm").click(function() {
		$(this).data('clicked', true);
		var ischecked = $(this).is(":checked");
		$("#emptyactivities").attr('checked', 'checked');
		$("#totalnum").text(parseInt($("#totalnum").text()) + 100);
		$("#emptyactivities").hide();
		if (!ischecked) { //if check box is checked then unchecked subtract appropriate amount from the total cost
			$("#totalnum").text(parseInt($("#totalnum").text()) - 200);
		}
	});
	$("#title").on('change', function(event) { //event listener that show a text field if the 'other' job role in the job role section is selected.
		if ($(this).val() == 'other') {
			$("#other_role").show();
		} else {
			$("#other_role").hide();
		}
	});
	$("#payment").on('change', function() { //event listener that show the appropriate fields depending on the payment type chosen by the client.
		if ($(this).val() == 'credit_card') {
			$('#warningpayment').hide();
			$("#credit_card").show();
			$("#bitcoin").hide();
			$("#paypal").hide();
			$("#invalidcc-num").hide();
			$("#invalidzipnum").hide();
			$("#invalidcvvnum").hide();
			$("#cc-num").val("");
			$("#zip").val("");
			$("#cvv").val("");
		}
		if ($(this).val() == 'paypal') {
			$("#warningpayment").hide();
			$("#paypal").show();
			$("#bitcoin").hide();
			$("#credit_card").hide();
		}
		if ($(this).val() == 'bitcoin') {
			$("#warningpayment").hide();
			$("#bitcoin").show();
			$("#paypal").hide();
			$("#credit_card").hide();
		}
		if ($(this).val() == 'select_method') { //shows warning message if the section value is the default
			$("#warningpayment").show();
			$("#credit_card").hide();
			$("#bitcoin").hide();
			$("#paypal").hide();
		}
	})
	$("#design").on('change', function() { //shows the different t-shirt colors depending on the t-shirt type chosen
		if ($(this).val() == 'js_puns') {
			$("#colors-js-puns").show();
			$("#warningdesign").hide();
			$("#color option[value=select_color]").hide();
			$("#color option[value=tomato]").hide();
			$('#color option[value=steelblue]').hide();
			$("#color option[value=dimgrey]").hide();
			$("#color option[value=cornflowerblue]").show();
			$("#color option[value=darkslategrey]").show();
			$("#color option[value=gold]").show();
		}
		if ($(this).val() == 'heart_js') { //shows the different t-shirt colors depending on the t-shirt type chosen
			$("#warningdesign").hide();
			$("#colors-js-puns").show();
			$("#color option[value=select_color]").hide();
			$("#color option[value=cornflowerblue]").hide();
			$("#color option[value=darkslategrey]").hide();
			$("#color option[value=gold]").hide();
			$("#color option[value=tomato]").show();
			$("#color option[value=steelblue]").show();
			$("#color option[value=dimgrey]").show();
		}
		if ($(this).val() == 'select_method') { //show warning message if no t-shirt type is chosen 
			$("#warningdesign").show();
			$("#colors-js-puns").hide();
		}
	});
	$("#cc-num").on('change', function() { //tests if the payment fields have entered the appropriate values: credit card:13-16 digits, zipcode:5 digits, cvv: 3 digits, and displays error message if field is empty or invalid
		var regex = /\b\d{13,16}\b/;
		if (regex.test($("#cc-num").val()) === false) {
			$("#invalidcc-num").show();
			$("#emptycc-num").hide();
		}
		if (regex.test($("#cc-num").val()) == true) {
			$("#invalidcc-num").hide();
			$("#emptycc-num").hide();
		}
	});
	$("#zip").on('change', function() { //tests if the payment fields have entered the appropriate values: credit card:13-16 digits, zipcode:5 digits, cvv: 3 digits, and displays error message if field is empty or invalid
		var regex = /\b\d{5}\b/;
		if (regex.test($("#zip").val()) === false) {
			$("#invalidzipnum").show();
			$("#emptyzipnum").hide()
		}
		if (regex.test($("#zip").val()) == true) {
			$("#invalidzipnum").hide();
			$("#emptyzipnum").hide();
		}
	})
	$("#cvv").on('change', function() { //tests if the payment fields have entered the appropriate values: credit card:13-16 digits, zipcode:5 digits, cvv: 3 digits, and displays error message if field is empty or invalid
		var regex = /\b\d{3}\b/;
		if (regex.test($("#cvv").val()) === false) {
			$("#invalidcvvnum").show();
			$("#emptycvvnum").hide();
		}
		if (regex.test($("#cvv").val()) === true) {
			$("#invalidcvvnum").hide();
			$("#emptycvvnum").hide();
		}
	})

	function checkallFields() { //function that validates if input fields are filled with valid values
		var wrong = false;
		var nameRegex = /([a-zA-Z]\w+?) ([a-zA-Z]\w+)|([a-zA-Z]\w+)/;
		var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if ($("#invalidname").is(":visible")) {
			checkName();
			wrong = true;
		}
		if ($("#invalidemail").is(":visible")) {
			checkEmail();
			wrong = true;
		}
		if ($('#emptyactivities').attr('checked') !== 'checked') { //changed from document.getElementById.hasAttribute to $().attr()
			wrong = true;
			$("#emptyactivities").show();
		}
		if ($("#payment").val() == 'select_method') {
			wrong = true;
			$("#warningpayment").show();
		}
		if ($("#design").val() == 'select_method') {
			wrong = true;
			$("#warningdesign").show();
		}
		if ($("#cc-num").val() == '') {
			wrong = true;
			$("#emptycc-num").show();
		}
		if ($("#zip").val() == '') {
			wrong = true;
			$("#emptyzipnum").show();
		}
		if ($("#cvv").val() == '') {
			wrong = true;
			$("#emptycvvnum").show();
		}
		if ($("#payment").val() == 'credit_card' || $("#payment").val() == 'select_method') { //prevents some input fields from being submitted empty or invalid
			if ($("#cc-num").val() !== '' && $("#zip").val() !== '' && $("#cvv").val() !== '' && $('#emptyactivities').attr('checked') && $("#design").val() !== 'select_method' && $("#invalidcc-num").is(':visible') === false && $("#invalidzipnum").is(':visible') === false && $("#invalidcvvnum").is(':visible') === false && $("#name").val() !== '' && $("#email").val() !== '') {
				wrong = false;
			} else {
				wrong = true;
				checkName();
				checkEmail();
			}
		}
		if ($("#payment").val() == 'paypal') { //prevents some input fields from being submitted empty or invalid
			if ($('#emptyactivities').attr('checked') && $("#design").val() !== 'select_method' && $("#name").val() !== '' && $("#email").val() !== '') {
				wrong = false;
			} else {
				wrong = true;
				checkName();
				checkEmail();
			}
		}
		if ($("#payment").val() == 'bitcoin') {
			if ($('#emptyactivities').attr('checked') && $("#design").val() !== 'select_method' && $("#name").val() !== '' && $("#email").val() !== '') { //prevents some input fields from being submitted empty or invalid
				wrong = false;
			} else {
				wrong = true;
				checkName();
				checkEmail();
			}
		}
		if (wrong == false) {
			return true;
		}
	}
});