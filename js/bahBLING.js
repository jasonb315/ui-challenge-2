'use strict'

//css collect
var style_rules = [];

//main
style_rules.push("*" + " { font-family: 'Lato', sans-serif; color: darkgrey;} ");
style_rules.push("body" + " { background-color: #7F7979;} ");
style_rules.push("#" + "pageSheet" + " { width:600px; margin: 0 auto; font-size: 1.5em; background-color: white; padding-top: 10px; padding-left: 30px; padding-right: 30px; padding-bottom: 30px;} ");
style_rules.push("." + "text" + " { color:darkgray; font-size: 1.5em; } ");
style_rules.push("." + "textLabel" + " { height: 40px; } ");

//dropdown
style_rules.push("#v1, #v3, #v5" + " { background-color: lightgray; } ");
style_rules.push("#v2, #v4" + " { background-color: gray; } ");
style_rules.push("select" + " { padding-left: 5%; font-size: 1em; margin-top: 15px; width:100%; height:45px; border: 1px solid #7F7979; -webkit-border-radius: 5px; border-radius: 2px; } ");
style_rules.push("input[type=text]" + " { padding-left: 5%; font-size: 1em; margin-top: 15px; width:95%; height:40px; border: 1px solid #7F7979; -webkit-border-radius: 5px; border-radius: 2px; } ");

//checkbox
style_rules.push("#" + "checkBox" + " { width: 110px; height: 150px; background-color: red; position: relative; overflow: hidden; } ");
style_rules.push("#" + "checked" + " { display:block; height: 400px; position: absolute; z-index: 0; left: -233px;  top: -120px;;  } ");
style_rules.push("#" + "unchecked" + " { display:block; height: 400px; position: absolute; z-index: 1; left: -95px;  top: -120px;  } ");

//radio
style_rules.push("#" + "radioBox" + " { width: 110px; height: 150px; background-color: red; position: relative; overflow: hidden; } ");
style_rules.push("#" + "booped" + " { display:block; height: 400px; position: absolute; z-index: 0; left: -503px;  top: -120px;;  } ");
style_rules.push("#" + "unbooped" + " { display:block; height: 400px; position: absolute; z-index: 1; left: -360px;  top: -120px;  } ");

//appendage to DOM
var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
$("head").append(style);

// ¯\(°_o)/¯ 
$(document).ready(() => {

  $('#unchecked').show();
  $('#checked').hide();

  $('#unchecked').on('click', () => {
    $('#unchecked').hide();
    $('#checked').show();
  })
  $('#checked').on('click', () => {
    $('#checked').hide();
    $('#unchecked').show();
  })


  $('#unbooped').show();
  $('#booped').hide();

  $('#unbooped').on('click', () => {
    $('#unbooped').hide();
    $('#booped').show();
  })
  $('#booped').on('click', () => {
    $('#booped').hide();
    $('#unbooped').show();
  })

})