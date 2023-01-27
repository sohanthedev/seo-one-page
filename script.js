// Vanilla Javascript
function uploadAttachments() {

    // Get the attachments

    var attachments = document.getElementById("fileInput").files;
    if(attachments.length>0){

        document.getElementById('openmodal').click()
    }
  
    // Clear the attachment list
    document.getElementById("attachmentList").innerHTML = "";
    const count = document.getElementById('count')
    // Add each attachment to the attachment list
    for (var i = 0; i < attachments.length; i++) {
      var attachment = attachments[i];
      var attachmentName = attachment.name;
      var attachmentExt = attachmentName.split(".").pop();
      var div = document.createElement('div')
      div.innerHTML =  `
      <div class="flex my-2"><div class="bg-red-600 rounded-l-xl w-14  h-14 flex items-center justify-center text-white font-bold">
      ${attachmentExt.toUpperCase()}
    </div>
    <div class="border-2 w-full px-5 overflow-hidden rounded-r-xl w-full h-14 flex items-center px-3 text-black font-bold">
     <h1> ${attachmentName}</h1>
    </div></div>
      `
      document.getElementById("attachmentList").appendChild(div);
    }
    count.innerText=attachments.length
  }
 
 