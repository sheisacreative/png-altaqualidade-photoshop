// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------- DEVELOPED BY MAIANE ARAUJO | GRAPHIC DESIGNER ----------------------------------------- //
// ------------------------------------------------------------  :)      www.maiane.com.br    :)  ------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

#target photoshop
app.bringToFront();

function savePNG (fileName){
        
        var myFile = new File(doc.path + "/" + fileName + ".png")
                
        var pngOptions = new ExportOptionsSaveForWeb()
        
	
        // -------------------------------------------- PNG-24 | CHANGE YOUR SETTINGS HERE -------------------------------------------- //
        
        //This defines that you're saving a PNG. You can try to change "PNG" for: JPEG, COMPUTERSERVEGIF or BMP.
        pngOptions.format = SaveDocumentType.PNG;
        
        //The number of bits. true = PNG-8 and false = PNG-24
        pngOptions.PNG8 = false;
        
        //Defines if transparent areas of the image should be included. Options: true or false.
        pngOptions.transparency = true;
        
        //Include the document's embedded color profile
        pngOptions.includeProfile = false;
        
        
        // ----- PNG-8 | THE OPTIONS DOWN HERE WILL ONLY WORK IF "png.Options.PNG8" WERE SET AS TRUE ----- //
        
        //You can try to change "SELECTIVE" for: ADAPTATIVE, BLACKWHITE, CUSTOM, GRAYSCALE, MACINTOSH, PERCEPTUAL, RESTRICTIVE, SELECTIVE or WINDOWS.
        pngOptions.colorReduction = ColorReductionType.SELECTIVE;
        
        //The number of colors in the palette. From: 0 to 256.
        pngOptions.colors = 256;
        
        //You can try to change "DIFFUSION" for: NOISE, NONE or PATTERN. 
        pngOptions.dither = Dither.DIFFUSION;
        
        //This option is valid just when dither is set to "DIFFUSION". From: 0 to 100.
        pngOptions.ditherAmount = 100;
        
        //True to download in multiple passes; progressive. Options: true or false.
        pngOptions.interlaced = false;
                
        //The transparency dither algorithm. You can try to change "NONE" for: NOISE, DIFFUSION or PATTERN. 
        pngOptions.transparencyDither = Dither.NONE;

        //The amount of transparency dither. From: 0 to 100.
        pngOptions.transparencyAmount = 100;
        
        //The tolerance amount whithin which to snap close colors to web palette colors. From: 0 to 100.
        pngOptions.webSnap = 0;
        
        // -------------------------------------------------------------------------------------------- //

        doc.exportDocument(myFile, ExportType.SAVEFORWEB, pngOptions);
    
    }

if (documents.length > 0) {
    
    var doc = activeDocument;
    var fileName = doc.name.replace(/.\w+$/,"");
    savePNG(fileName);
    alert("A happy potato says:" + "\n" + "Your PNG file is saved. Have a nice day! :D\n\nDeveloped by: www.maiane.com.br", "Woooow");

} else {
    
    alert ("I was thinking...\n\nMaybe you should open a document before you try to save a PNG. Why don't you give a try? s2", "Are you ok??");
    
}