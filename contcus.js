function postForm() {
        
        var field1 = $("#matchname1").val();
        var field2 = $("#contestcode1").val();
        var field3 = $("#prizepool1").val();
        var field4 = $("#entryfee1").val();
        var field5 = $("#contestsize1").val();
        var field6 = $("#winner1").val();
        var field7 = $("#email1").val();
        var field8 = $("#multientry1").val();
        
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSc1riBsmJ6KVkPpiX9c7YpMU2ALqw5ectdQ8h0aHTGzRzWvSQ/formResponse",
			data: {
				"entry.1997518946": field1,
				"entry.1799278287": field2,
				"entry.504100556": field3,
				"entry.1988504757": field4,
				"entry.754838729": field5,
				"entry.378989266": field6,
				"entry.5153382": field7,
				"entry.1055593588": field8
			},
              type: "POST",
              dataType: "xml",
              
              		success: function(d)
				    {
				    },
				    error: function(x, y, z)
				    {
						$('.formDiv').hide();
						// alert("Form Successfully Submitted.");
						// document.getElementById("form").reset();
						$('#submitFormMsg').show();
				    }
        });
				return false;
	}


	// url add formresponse





// =======================================
function countMe() {
        
        var field1 = 1;
        
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfiVdBlxKWkTLNj7nmYgigFbXDWJ6TkQb5KVMtPiFCiNx9bFA/formResponse",
			data: {
				"entry.511239071": field1,
			},
              type: "POST",
              dataType: "xml",
              
              		success: function(d)
				    {
				    },
				    error: function(x, y, z)
				    {
				    }
        });
				return false;
	}