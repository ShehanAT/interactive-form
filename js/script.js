$(document).ready(function(){
    $("#design").show();
    $('#other_role').hide();
    $("#warningdesign").hide();
    $("#warningpayment").hide();
    $("#invalidcc-num").hide();
    $("#invalidzipnum").hide();
    $("#invalidcvvnum").hide();
    $("#colors-js-puns").hide();
    $("#credit_card").hide();
    $("#paypal").hide();
    $("#bitcoin").hide();
    $("#emptyname").hide();
    $("#emptyemail").hide();
    $("#invalidname").hide();
    $("#invalidemail").hide();
    $("#emptyactivities").hide();
    $("#emptyzipnum").hide();
    $("#emptycvvnum").hide();
    $("#emptycc-num").hide();
    
document.getElementById("register").addEventListener("click", function(event){
    //$("#register").attr('disabled','disabled');
    event.preventDefault();
    if ($("#cc-num").val() !== ''){
        $("#emptycc-num").hide();
    }
    if ($("#cc-num").val() == ''){
        $("#emptycc-num").show();
    }
    
    if ($("#zip").val() == ''){
        $("#emptyzipnum").show();
    }
    if ($("#zip").val() !== ''){
        $("#emptyzipnum").hide();
    }
    if ($("#cvv").val() == ''){
        $("#emptycvvnum").show();
    }
    if ($("#cvv").val() !== ''){
        $("#emptycvvnum").hide();
    }
    $("#totalnum").text("0");
    $('#all').prop("checked", false);
    $('#js-frameworks').prop("checked", false);
    $('#js-libs').prop('checked', false);
    $('#express').prop('checked', false);
    $('#node').prop('checked', false);
    $('#build_tools').prop('checked', false);
    $('#npm').prop('checked', false);
    if ($("#design").val() == 'select_method'){
        $("#warningdesign").show();
    }
    if ($("#payment").val() == 'select_method'){
        $("#warningpayment").show();
    }
    if (checkallFields()){
        location.reload();
    }
   
    })
function checkName(){
    var nameRegex = /([a-zA-Z]\w+?) ([a-zA-Z]\w+)|([a-zA-Z]\w+)/;
    
    if ($("#name").val() == ""){
            $("#emptyname").show();
            $("#invalidname").hide();
            
    }
    else if (nameRegex.test($("#name").val()) == false){
        $("#invalidname").show();
        $("#emptyname").hide();
        
    }
    else if (nameRegex.test($("#name").val())){
        $("#invalidname").hide();
        $("#emptyname").hide()
        
    }  
}
document.getElementById('email').addEventListener('change', function(){
    checkEmail();
});
function checkEmail(){
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ($("#email").val() == ""){
        $("#emptyemail").show();
        $("#invalidemail").hide();
        
    }
    else if (emailRegex.test($("#email").val()) == false){
        $("#invalidemail").show();
        $("#emptyemail").hide();
        
    }
    else if (emailRegex.test($("#email").val())){
        $("#invalidemail").hide();
        $("#emptyemail").hide();
        
    }
}

$("#all").click(function(){
    //$(this).prop('checked', true);
    $(this).data('clicked', true);
    $("#totalnum").text(parseInt($("#totalnum").text()) + 200);
    var ischecked = $(this).is(":checked");
    $("#emptyactivities").attr('checked', 'checked');
    $("#emptyactivities").hide();
    if (!ischecked){
        $("#totalnum").text(parseInt($("#totalnum").text()) - 400);
    }
    
})
$("#js-frameworks").click(function(){
    //$(this).prop('checked', true);
    $(this).data('clicked', true);
    $("#express").attr('disabled', true);
    var ischecked = $(this).is(":checked");
    $("#emptyactivities").attr('checked', 'checked');
    $("#emptyactivities").hide();
    $("#totalnum").text(parseInt($("#totalnum").text()) + 100);
    if (!ischecked){
        $("#totalnum").text(parseInt($("#totalnum").text()) - 200);
        $("#express").attr('disabled', false);
    }
    
});
$("#js-libs").click(function(){
    //$(this).prop('checked', true);
    $(this).data('clicked', true);
    $("#node").attr('disabled', true);
    var ischecked = $(this).is(":checked");
    $("#totalnum").text(parseInt($("#totalnum").text()) + 100);
    $("#emptyactivities").attr('checked', 'checked');
    $("#emptyactivities").hide();
    if (!ischecked){
        $("#totalnum").text(parseInt($("#totalnum").text()) - 200);
        $("#node").attr('disabled', false);
        
    }
})
$("#express").click(function(){
    //$(this).prop('checked', true);
    $(this).data('clicked', true);
    $("#js-frameworks").attr('disabled', true);
    var ischecked = $(this).is(":checked");
     $("#totalnum").text(parseInt($("#totalnum").text()) + 100);
    $("#emptyactivities").attr('checked', 'checked');
    $("#emptyactivities").hide();
    if (!ischecked){
        
         $("#totalnum").text(parseInt($("#totalnum").text()) - 200);
        $("#js-frameworks").attr('disabled', false);
        
    }
})
$("#node").click(function(){
    $(this).data('clicked', true);
    $("#js-libs").attr('disabled', true);
    var ischecked = $(this).is(":checked");
    $("#totalnum").text(parseInt($("#totalnum").text()) + 100);
    $("#emptyactivities").attr('checked', 'checked');
    $("#emptyactivities").hide();
    if (!ischecked){
        //basePrice -= parseInt($(this).val()) * 2;
        $("#totalnum").text(parseInt($("#totalnum").text()) - 200);
        $("#js-libs").attr('disabled', false);
        
    }
})
$("#build_tools").click(function(){
    $(this).data('clicked', true);
    var ischecked = $(this).is(":checked");
    $("#totalnum").text(parseInt($("#totalnum").text()) + 100);
    $("#emptyactivities").attr('checked', 'checked');
    $("#emptyactivities").hide();
    if (!ischecked){
        $("#totalnum").text(parseInt($("#totalnum").text()) - 200);
    }
});
$("#npm").click(function(){
    $(this).data('clicked', true);
    var ischecked = $(this).is(":checked");
    $("#emptyactivities").attr('checked', 'checked');
    $("#totalnum").text(parseInt($("#totalnum").text()) + 100);
    $("#emptyactivities").hide();
    if (!ischecked){
        $("#totalnum").text(parseInt($("#totalnum").text()) - 200);
    }
});
document.getElementById("title").addEventListener('change', function(event){
    if ($(this).val() == 'other'){
        $("#other_role").show();
    }
    else{
        $("#other_role").hide();
    }
});
document.getElementById("payment").addEventListener('change', function(){
    if($(this).val() == 'credit_card'){
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
    if ($(this).val() == 'paypal'){
        $("#warningpayment").hide();
        $("#paypal").show();
        $("#bitcoin").hide();
        $("#credit_card").hide();
    }
    if ($(this).val() == 'bitcoin'){
        $("#warningpayment").hide();
        $("#bitcoin").show();
        $("#paypal").hide();
        $("#credit_card").hide();
    }
    if ($(this).val() == 'select_method'){
        $("#warningpayment").show();
        $("#credit_card").hide();
        $("#bitcoin").hide();
        $("#paypal").hide();
    }
})
document.getElementById("design").addEventListener('change', function(){
    if ($(this).val() == 'js_puns'){
        $("#colors-js-puns").show();
        $("#warningdesign").hide();
        $("#color option[value=select_color]").hide();
        $("#color option[value=tomato]").hide();
        $('#color option[value=steelblue]').hide();
        $("#color option[value=dimgrey]").hide();
        $("#color option[value=cornflowerblue]").show();
        $("#color option[value=darkslategrey]").show();
        $("#color option[value=gold]").show();
        //$("#color").val("steelblue").hide();
        //$("#color").val("dimgrey").hide();
    }
    if ($(this).val() == 'heart_js'){
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
    if ($(this).val() == 'select_method'){
        $("#warningdesign").show();
        $("#colors-js-puns").hide();
        
    }
});
document.getElementById("cc-num").addEventListener('change', function(){
    var regex = /\b\d{13,16}\b/;
    if (regex.test($("#cc-num").val()) === false){
        $("#invalidcc-num").show();
    }else{
        $("#invalidcc-num").hide();
        $("#")
    }
    
});
document.getElementById("zip").addEventListener('change', function(){
    var regex = /\b\d{5}\b/;
    if (regex.test($("#zip").val()) === false){
        $("#invalidzipnum").show();
    }else{
        $("#invalidzipnum").hide();
    }
})
document.getElementById("cvv").addEventListener('change', function(){
    var regex = /\b\d{3}\b/;
    if (regex.test($("#cvv").val()) === false){
        $("#invalidcvvnum").show();
    }else{
        $("#invalidcvvnum").hide();
    }
})


function checkallFields(){
    var wrong = false;
    var nameRegex = /([a-zA-Z]\w+?) ([a-zA-Z]\w+)|([a-zA-Z]\w+)/;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if ($("#emptyname").is(":visible") || $("#name").val() == ""){
        checkName();
    }
    if ($("#invalidname").is(":visible") || nameRegex.test($('#name').val()) !== false){
        checkName();
    }
    if ($("#emptyemail").is(":visible") || $("#email").val() == ""){
       checkEmail();
    }
    if ($("#invalidemail").is(":visible") || emailRegex.test($('#email').val()) !== false){
       checkEmail();
    }
    if (document.getElementById('emptyactivities').hasAttribute('checked')){
        wrong = false;
        $("#emptyactivities").hide()
    }
    if (document.getElementById('emptyactivities').hasAttribute('checked') == false){
        wrong = true;
        console.log("true");
        
        $("#emptyactivities").show();
    }
    
    if(wrong == false){
        return true;
    }
}
});