require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DigitisedLipstick
    class Application < Rails::Application
        config.active_record.raise_in_transactional_callbacks = true

        config.assets.configure do |env|
            if Rails.env.development? || Rails.env.test?
                env.cache = ActiveSupport::Cache.lookup_store(:memory_store)
            end
        end
    end
end
