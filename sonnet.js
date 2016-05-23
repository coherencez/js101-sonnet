// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };



// var wordForRegex = "the",
// 		re = new RegExp(wordForRegex, "g");

var sonnetDiv = document.getElementById("sonnet").innerHTML,
	  outputList = document.getElementById("jsOutput"),
	  sonnetLength = sonnetDiv.length,
	  indexOfOrphans = sonnetDiv.indexOf("orphans"),
	  sonnetWinterReplace = sonnetDiv.replace("winter", "yueltide"),
	  sonnetTheReplace = sonnetDiv.replace(/(the\b)/g, "a large");
											//  .replaceAll("the", "a large");


outputList.innerHTML += '<li>The length of the sonnet is <strong>' + sonnetLength + '</strong> characters long (including spaces).</li>';
outputList.innerHTML += '<li>The word "orphans" begins at index <strong>[' + indexOfOrphans + ']</strong></li>';
outputList.innerHTML += '<li>Here we replace the first occurence of "winter" with "yueltide". <p>' + sonnetWinterReplace + '</p></li>';
outputList.innerHTML += '<li>Now we replace every occurence of "the" with "a large". (now with more precise RegEx!) <p>' + sonnetTheReplace + '</p></li>';
// outputList.innerHTML
// outputList.innerHTML
// outputList.innerHTML


