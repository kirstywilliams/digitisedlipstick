module DependencyHelper

	# PARAMS:
	# controller e.g. "home"
	def head_controller_js(controller)
		script = get_dependency_script(controller, "head")
		content_for(:head_controller_js, javascript_tag(script))
	end

	# PARAMS:
	# controller e.g. "home"
	def foot_controller_js(controller)
		script = get_dependency_script(controller, "foot")
		content_for(:foot_controller_js, javascript_tag(script))
	end

	# PARAMS:
	# controller e.g. "home"
	# location e.g. "head" or "foot"
	def get_dependency_script(controller, location)
		script = "$(function(){
			AppController.config.#{controller}.#{location}();
		});"
	end

end