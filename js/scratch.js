$('#example2').cascadingDropdown({
    selectBoxes: [
        {
            selector: '.step1',
            source: [
                { label: '4.0"', value: 4 },
                { label: '4.3"', value: 4.3 },
                { label: '4.7"', value: 4.7 },
                { label: '5.0"', value: 5 }
            ]
        },
        {
            selector: '.step2',
            requires: ['.step1'],
            source: function(request, response) {
                $.getJSON('/api/resolutions', request, function(data) {
                    var selectOnlyOption = data.length <= 1;
                    response($.map(data, function(item, index) {
                        return {
                            label: item + 'p',
                            value: item,
                            selected: selectOnlyOption // Select if only option
                        };
                    }));
                });
            }
        },
        {
            selector: '.step3',
            requires: ['.step1', '.step2'],
            requireAll: true,
            source: function(request, response) {
                $.getJSON('/api/storages', request, function(data) {
                    response($.map(data, function(item, index) {
                        return {
                            label: item + ' GB',
                            value: item,
                            selected: index == 0 // Select first available option
                        };
                    }));
                });
            },
            onChange: function(event, value, requiredValues){
                // do stuff
            }
        }
    ]
});