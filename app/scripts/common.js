/*====================================
 =            ON DOM READY            =
 ====================================*/
$(document).on('ready page:load', function() {
    musicurie.init();
});


/*========================================
 =            CUSTOM FUNCTIONS            =
 ========================================*/
if ( typeof (musicurie) == typeof (undefined)) {
    musicurie = {};
}

musicurie = {
    _cacheElement : {
        offcanvasToggleBtn : $('[data-event-toggle-offcanvas]'),
        navbarSearchboxBtn : $('[data-event-toggle-searchbox]'),
        navbarToggleContent: $('[data-view-toggle-navbar-content]'),
        mainContentViewWrapper: $('[data-view-main-content]'),
        siteWrapper: $('#site-wrapper'),
        offcanvasToggleClassName: 'show-nav'
    },

    init : function() {
        this.addEventListener();
    },

    addEventListener : function() {
        this.actionOffCanvas();
        this.actionSearchboxBtn();
        this.isActiveDimClass();
    },

    actionOffCanvas : function() {
        var self = this;
        this._cacheElement.offcanvasToggleBtn.on('click', function() {
            self.toggleOffCanvasClass();
        });
    },

    toggleOffCanvasClass : function() {
        var self = this;
        self._cacheElement.siteWrapper.toggleClass(self._cacheElement.offcanvasToggleClassName);
    },

    actionSearchboxBtn : function() {
        $('body').on('click', '[data-event-toggle-searchbox]', function() {
            musicurie.toggleNavbarContent();
        });
    },

    toggleNavbarContent : function() {
        var toggleTarget = this._cacheElement.navbarToggleContent;
        var currentType = toggleTarget.attr('data-view-toggle-navbar-content');

        var searchContent = '<input type="text" class="form-control curie-navbar-search-inputbox" placeholder="제목, 가수로 검색해보세요.">';
        var brandContent = '<a class="navbar-brand">Musicurie</a>';

        var searchBoxBtn = '<a class="toggle-nav curie-navbar-search" data-event-toggle-searchbox><i class="glyphicon glyphicon-search"></i></a>';

        if(currentType == 'brand') {
            toggleTarget.empty();
            toggleTarget.append(searchContent);
            this._cacheElement.navbarSearchboxBtn.remove();
            this.toggleMainViewDimClass();
            toggleTarget.attr('data-view-toggle-navbar-content', 'searchbox');

        } else {
            toggleTarget.empty();
            toggleTarget.append(brandContent);
            toggleTarget.append(searchBoxBtn);
            this.toggleMainViewDimClass();
            toggleTarget.attr('data-view-toggle-navbar-content', 'brand');

        }
    },

    toggleMainViewDimClass: function() {
        this._cacheElement.mainContentViewWrapper.toggleClass('dim-effect')
    },

    isActiveDimClass: function() {
        musicurie._cacheElement.mainContentViewWrapper.on('click', function() {
            if(musicurie._cacheElement.mainContentViewWrapper.hasClass('dim-effect')) {
                musicurie.toggleNavbarContent();
            }
        });
    }
}

