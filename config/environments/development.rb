Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.
  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  config.action_mailer.raise_delivery_errors = false

  config.active_support.deprecation = :log

  config.active_record.migration_error = :page_load

  config.assets.debug = true
  config.assets.digest = true
  config.assets.raise_runtime_errors = true

  config.action_mailer.default_url_options = {
    host: 'localhost'
  }
  config.action_mailer.perform_deliveries = true
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    :port =>           '587',
    :address =>        'smtp.mandrillapp.com',
    :user_name =>      ENV['MANDRILL_USERNAME'],
    :password =>       ENV['MANDRILL_APIKEY'],
    :domain =>         'localhost',
    :authentication => :plain,
    :enable_starttls_auto => true
  }

end