(function ($) {

    this.Select = Class({

        init: function (elements) {
            this.elements = $(elements || '.select');
            this.elements.each($.proxy(this.transform, this));
            $(document).on('click', function (e) {
                $('div.select-options').each(function (index, element) {
                    if (element.style.display === 'block') {
                        element = $(element);
                        element.hide();
                        element.parents('.select').find('i').removeClass('ico-arrow-up').addClass('ico-arrow-down');
                    }
                });
            });
        },

        refactor: function (elements) {
            var self  =this;
            $(elements).each(function (index, element) {
                self.makeInput($(element), $(element).find('select'));
            });
        },

        makeInput: function (element, input) {
            var html = '';
            element.find('li').each(function (index, option) {
                option = $(option);
                if (option.attr('data-value') === null) {option.attr('data-value', option.html())}
                html += '<option value="'+option.attr('data-value')+'">'+option.html()+'</option>';
                if (option.hasClass('active')) {
                    input.val(option.attr('data-value'));
                }
            });
            input.html(html);
        },

        transform: function (index, element) {
            element = $(element);
            var input = $('<select name="'+element.attr('data-name')+'" style="left:-999999px;position:absolute;"></select>');
            element.append(input);

            this.makeInput(element, input);

            /*var s = new scrollbar.Scrollbar({
                element: element.find('div.select-options')
            });*/

            element.on('click', function (e) {
                var target = $(e.target), selectOpt = element.find('div.select-options');
                $('div.select-options').each(function (index, element) {
                    if (element !== selectOpt[0]) {
                        element = $(element);
                        element.hide();
                        element.parents('.select').find('i').removeClass('ico-arrow-up').addClass('ico-arrow-down');
                    }
                });
                if (target[0].nodeName === 'LI') {
                    input.val(target.attr('data-value'));
                    element.find('span').html(target.html());
                    target.siblings('.active').removeClass('active');
                    target.addClass('active');
                }

                if (selectOpt.css('display') !== 'none') {
                    selectOpt.css('display', 'none');
                    element.find('i').removeClass('ico-arrow-up').addClass('ico-arrow-down');
                }
                else {
                    selectOpt.css('display', 'block');
                    element.find('i').removeClass('ico-arrow-down').addClass('ico-arrow-up');
                    var w1 = element.width() + parseInt(element.css('padding-left')) + parseInt(element.css('padding-right')), w2 = selectOpt.width();
                    selectOpt.width(Math.max(w1, w2));
                    selectOpt.height(Math.min(223, selectOpt[0].scrollHeight));
                }
                e.stopPropagation();
            });
        }

    });

}).call(window, jQuery);
