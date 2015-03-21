module ApplicationHelper

	# PARAMS:
	# page_title e.g. "Home Page"
	def title(page_title)
		content_for :title, page_title.to_s
	end
	
end
