//your JS code here. If required.
function changeTag()
	{
		let tag=document.getElementById("status");
		tag.remove();
		let ele=document.createElement("h1");
		ele.innerText="Enter Metaverse";
		ele.id="status";
		enterBtn.before(ele);
		
	}