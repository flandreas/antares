source "https://rubygems.org"
ruby '3.0.3'

gem "minimal-mistakes-jekyll"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins

gem "rake"
# gem "jekyll", "~> 4.2.0"

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
  gem "jekyll-compose"
  gem "jekyll-redirect-from"
  gem 'jekyll-asciidoc', "~> 3.0.0"
  gem 'jemoji'
  gem "jekyll-analytics", "~> 0.1", git: 'https://github.com/hendrikschneider/jekyll-analytics', ref: '40e09570dea80e3a9ecb0ad796aad1c434ff067c'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

gem "webrick", "~> 1.7"
