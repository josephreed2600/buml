# Goals of this project

	- Create UML documents from scratch
	- Export UML in a JSON-based format to be re-opened by this application. Keep the format simple and understandable to a human reader.
	- Import UML from the above format, and possibly from other formats like UXF used by UMLet
	- Export UML in formats for presentation:
		- SVG
		- HTML
		- PNG
		- PDF would be a really good idea but I swear it's cursed
	- Provide an API for plugins that do either of these:
		- Export a UML diagram (or subsection) as code in a specific language
		- Import a code base in a specific language and generate UML from it
		- Allow users to create permanent links to view or edit diagrams
		- Allow multiple users to edit a diagram simultaneously

## Features for the future

	- Auto-arrangement of diagram
