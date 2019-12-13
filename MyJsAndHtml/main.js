$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(chart) {
        $.each(chart, function(property, index) {
            $('#top-spots').append(`<tr><td style='background-color: gray'>${index.name}</td>
				<td>${index.description}</td>
				<td style='background-color: gray; border: none; color: black;'>
					<a href="https://www.google.com/maps?q=${index.location}">Google Maps</a>
				</td></tr>`)
        });
    });
});
