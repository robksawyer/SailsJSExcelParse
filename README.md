# SailsJS: Excel Parse 

This is a [Sails](http://sailsjs.org) application that shows how to parse an Excel file. If you are looking for guidance on basic file uploading, check out <https://github.com/sails101/file-uploads>. The project uses the builtin [Skipper](https://www.npmjs.org/package/skipper) file upload component and a few modules that are listed below. 

## Goals

Learn how to use an Excel parsing library with SailsJS. Measurements of success would include:

- Uploading a file and then dynamically adding a new column to the file with some content in it. 
- It'd also be nice to figure out how to remove columns and rows from the Excel document.
- Ability to download the file after it has been manipulated.


## Dependencies

### File manipulation:
- [npm-file](https://www.npmjs.org/package/file)

### Excel document manipulation:
- [xlsx](https://www.npmjs.org/package/xlsx) - Which is built on [js-xlsx](https://github.com/SheetJS/js-xlsx).


## Start it up

1. `npm install` 

2. `sails lift`

3. I've updated config/routes.js so that the `api/controllers/CampaignController` runs. Actually, this is Sails [Blueprint](http://sailsjs.org/#/documentation/reference/blueprint-api) doing it's magic. You'll notice that I have a folder in views named `campaign/upload` which is auto routing based on the name.