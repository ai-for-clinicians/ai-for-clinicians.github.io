#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from datetime import date

AUTHOR = 'Klaus-Michael Lux'
SITENAME = 'AI for Clinical Search'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# specify the theme
THEME = 'themes/pelican-hyde-custom'
PROFILE_IMAGE = 'health-book-fill_inv.png'
# displayed in the footer
CURRENTYEAR = date.today().year
# Blogroll
LINKS = ()

# Social widget
SOCIAL = ()
# don't display all pages, just the specified ones
DISPLAY_PAGES_ON_MENU = False

def format_to_url(elem):
    return elem.lower().replace(' ', '-') + '.html'

sidebar_pages = ['Clinical questions', 'A plethora of tools','A common infrastructure',
                'A vision for the future', 'About the project']
MENUITEMS = [(x, format_to_url(x)) for x in sidebar_pages]

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = False

STATIC_PATHS = ['images', 'extra']
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'},
    'extra/robots.txt': {'path': 'robots.txt'},
}
PLUGINS = ['references']