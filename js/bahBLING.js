'use strict'

var style_rules = [];

style_rules.push("*" + " { font-family: 'Lato', sans-serif; color: darkgrey;} ");
style_rules.push("body" + " { background-color: #7F7979;} ");
style_rules.push("#" + "pageSheet" + " { width:600px; margin: 0 auto; font-size: 1.5em; background-color: white; padding-top: 10px; padding-left: 30px; padding-right: 30px; padding-bottom: 30px;} ");
style_rules.push("." + "text" + " { color:#403C3D; font-size: 1.5em; } ");
style_rules.push("." + "textLabel" + " { height: 40px; } ");






var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
$("head").append(style);