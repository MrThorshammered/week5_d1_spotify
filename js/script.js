$(document).ready(function() {
	console.log("knock knock mofo");

	var selectOptions = $('#options')
	var inputOption = $('#search-music')
	var results = $('#results')

	var searchInput;
	var searchResults;

	selectOptions.on('change', getSearchType);
	inputOption.on('change', getSearchInput);

	function getSearchInput(e) {
		searchInput = inputOption.val().toLowerCase();
		console.log(searchInput);
	}


	function getSearchType(e) {
  	$('#results').html(' ')

		var searchType = $(this).val();
		console.log(searchType);

		$.get('https://api.spotify.com/v1/search?q=' + searchInput + '&type=' + searchType, function(response){
			
			var items = response[searchType + 's']['items']

			$.each(items, function(index, item){
				searchResults = items[index]['name']

				$('#results').append("<p>" + items[index]['name'] + "</p>")
			})


		})
	}


})