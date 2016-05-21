// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };



// var wordForRegex = "the",
// 		re = new RegExp(wordForRegex, "g");

var sonDiv = document.getElementById("sonnet").innerHTML,
	  outputList = document.getElementById("jsOutput"),
	  sonLength = sonDiv.length,
	  indexOfOrphans = sonDiv.indexOf("orphans"),
	  sonWinterReplace = sonDiv.replace("winter", "yueltide"),
	  sonTheReplace = sonDiv.replace(/the\b/g, "a large");
											//  .replaceAll("the", "a large");


outputList.innerHTML += '<li>The length of the sonnet is <strong>' + sonLength + '</strong> characters long (including spaces).</li>';
outputList.innerHTML += '<li>The word "orphans" begins at index <strong>[' + indexOfOrphans + ']</strong></li>';
outputList.innerHTML += '<li>Here we replace the first occurence of "winter" with "yueltide". <p>' + sonWinterReplace + '</p></li>';
outputList.innerHTML += '<li>Now we replace every occurence of "the" with "a large". (now with more precise RegEx!) <p>' + sonTheReplace + '</p></li>';
// outputList.innerHTML
// outputList.innerHTML
// outputList.innerHTML


