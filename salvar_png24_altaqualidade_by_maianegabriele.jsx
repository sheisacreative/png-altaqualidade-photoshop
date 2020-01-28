// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------- DEVELOPED BY MAIANE ARAUJO | GRAPHIC DESIGNER ----------------------------------------- //
// ------------------------------------------------------------  :)      www.maiane.com.br    :)  ------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

#target photoshop
app.bringToFront();

function savePNG (fileName){
        
        var myFile = new File(doc.path + "/" + fileName + ".png")
                
        var pngOptions = new ExportOptionsSaveForWeb()
        
	
        // -------------------------------------------- PNG-24 | MUDE AS CONFIGURAÇÕES AQUI -------------------------------------------- //
        
        //Define que você está salvando um PNG. Para outros formatos é possível substituir "PNG" por: JPEG, COMPUTERSERVEGIF ou BMP.
        pngOptions.format = SaveDocumentType.PNG;
        
        //Define o número de bits. true = PNG-8 e false = PNG-24
        pngOptions.PNG8 = false;
        
        //Define se o arquivo será salvo com transparência. Opções: "true" (verdadeiro - com transparência) ou "false" (falso - sem transparência).
        pngOptions.transparency = true;
        
        //Define se o perfil de cores do documento será incluído. Opções: "true" ou "false"
        pngOptions.includeProfile = true;
        
        
        // ----- PNG-8 | AS OPÇÕES ABAIXO SOMENTE FUNCIONARÃO SE "png.Options.PNG8" ESTIVER MARCADO COMO "true" ----- //
        
        //Define o algoritmo de redução de cor. Para outros formatos é possível substituir "SELECTIVE" por: ADAPTATIVE, BLACKWHITE, CUSTOM, GRAYSCALE, MACINTOSH, PERCEPTUAL, RESTRICTIVE, SELECTIVE ou WINDOWS.
        pngOptions.colorReduction = ColorReductionType.SELECTIVE;
        
        //Define o número de cores. De 0 a 256.
        pngOptions.colors = 256;
        
        //Define o tipo de pontilhamento (dither). Para outros formatos é possível substituir "DIFFUSION" por: NOISE, NONE ou PATTERN. 
        pngOptions.dither = Dither.DIFFUSION;
        
        //Opção válida apenas quando a opção acima (dither) está como "DIFFUSION". Define a quantidade de pontilhamento. De 0 a 100.
        pngOptions.ditherAmount = 100;
        
        //Define o download progressivo. Se "true" está ativado, "false" é desativado.
        pngOptions.interlaced = false;
                
        //Define o algoritmo de transparência do pontilhamento. Para outros formatos é possível substituir "NONE" por: NOISE, DIFFUSION ou PATTERN. 
        pngOptions.transparencyDither = Dither.NONE;

        //Define a quantidade de transparência do pontilhamento. De 0 a 100.
        pngOptions.transparencyAmount = 100;
        
        //Define a quantidade de tolerância para ajustar as cores da imagem o mais próximo às cores web. De 0 a 100.
        pngOptions.webSnap = 0;
        
        // -------------------------------------------------------------------------------------------- //

        doc.exportDocument(myFile, ExportType.SAVEFORWEB, pngOptions);
    
    }

if (documents.length > 0) {
    
    var doc = activeDocument;
    var fileName = doc.name.replace(/.\w+$/,"");
    savePNG(fileName);
    alert("Uma batata feliz diz:" + "\n" + "Seu PNG está salvo. Tenha um bom dia! :D\n\nDesenvolvido por: www.maiane.com.br", "Woooow");

} else {
    
    alert ("Eu estava pensando...\n\nSerá que não seria melhor você abrir um arquivo antes de tentar salvar um PNG? Tenta a sorte aí. s2", "Oiiii??");
    
}