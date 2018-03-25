//credit goes to Steven of Cloud to Butt, who put his work under the DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE! Check his work out here: https://github.com/panicsteve/cloud-to-butt/

walk(document.body);

function walk(node)  
{
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
// list of 'to be corrected phrases' and matching "corrected phrases"
	v = v.replace(/\bStudenten\b/g, "Studierende");
	v = v.replace(/\bdie Lehrer\b/g, "die Lehrenden");
	v = v.replace(/\bDie Lehrer\b/g, "Die Lehrkräfte");
	v = v.replace(/\bdie Teilnehmer\b/g, "die Teilnehmenden");
	v = v.replace(/\bdie Besitzer\b/g, "die Besitzenden");
	v = v.replace(/\bdie Unterzeichner\b/g, "die Unterzeichnenden");
	v = v.replace(/\bDie Mitarbeiter\b/g, "Die Mitarbeitenden");
	v = v.replace(/\bdie Mitarbeiter\b/g, "die Mitarbeitenden");
	v = v.replace(/\bdie Leser\b/g, "die Lesenden");
	v = v.replace(/\bden Leser\b/g, "den Lesenden");
	v = v.replace(/\bpoliceman\b/g, "police officer");
	v = v.replace(/\bDie Mörder\b/g, "Die Mordenden");
	v = v.replace(/\bdie Mörder\b/g, "die Mordenden");
	v = v.replace(/\bDie Feuerwehrmänner\b/g, "Die Feuerwehrleute");
	v = v.replace(/\bdie Feuerwehrmänner\b/g, "die Feuerwehrleute");
	v = v.replace(/\bDer Feuerwehrmänner\b/g, "Der Feuerwehrleute");
	v = v.replace(/\bder Feuerwehrmänner\b/g, "der Feuerwehrleute");
	v = v.replace(/\bDen Feuerwehrmännern\b/g, "Den Feuerwehrleuten");
	v = v.replace(/\bden Feuerwehrmännern\b/g, "den Feuerwehrleuten");
	v = v.replace(/\bDie Gründer\b/g, "Die Gründenden");
	v = v.replace(/\bdie Gründer\b/g, "die Gründenden");
	v = v.replace(/\bDie Radfahrer\b/g, "Die Radfahrenden");
	v = v.replace(/\bdie Radfahrer\b/g, "die Radfahrenden");

	textNode.nodeValue = v;
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelection")
      sendResponse({data: window.getSelection().toString()});
    else
      sendResponse({});
});