source 'https://rubygems.org'

ruby '2.0.0'

gem 'rails', '4.2.0'
# Use postgresql
gem 'pg', '~> 0.18.1'

# Server
gem 'puma'

gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails', '~> 4.0.3'
gem 'bootstrap-sass', '~> 3.3.3'
gem 'sass-rails', '~> 5.0'
gem 'sprockets-rails', :require => 'sprockets/railtie'
gem 'bootstrap-social-rails'
# Add vendor prefixes to CSS rules
gem 'autoprefixer-rails', '~> 5.1.7'
gem 'font-awesome-rails', '~> 4.3.0.0'
# Modernizr.js
gem 'modernizr-rails', '~> 2.7.1'
gem 'simple_form', '~> 3.1.0.rc1'

group :development, :test do
  # Handle events on file changes
  gem 'guard', '~> 2.12.5'
  # Reload browser when 'view' files are modified
  gem 'guard-livereload', '~> 2.4.0'
  # Automatically run specs
  gem 'guard-rspec', '~> 4.5.0'
  gem 'rspec-rails', '~> 3.0'
  # Integration tests
  gem 'capybara', '~> 2.4.4'
  gem 'factory_girl_rails', '~> 4.5.0'
  # Ensure a clean state for testing.
  gem 'database_cleaner', '~> 1.4.1'
  gem 'shoulda-matchers', '~> 2.8.0'
  # Open mail in the browser instead of sending
  gem 'letter_opener', '~> 1.3.0'
  # Logs information about the browser used to make a request
  gem 'browser_details', '~> 0.0.6'
  # Code metric tool
  gem 'rails_best_practices', '~> 1.15.7'
  # Code metrics
  gem 'metric_fu', '~> 4.11.4'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end

group :production do
  # required for heroku
  gem 'rails_12factor'
end