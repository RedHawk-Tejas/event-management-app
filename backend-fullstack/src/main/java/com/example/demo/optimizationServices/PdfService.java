package com.example.demo.optimizationServices;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.awt.*;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.stereotype.Service;

@Service
public class PdfService {

    public byte[] getTicket(String UserID, String transaction_id) throws IOException {

        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Set font and font size
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

            // Set text color
            contentStream.setNonStrokingColor(Color.BLACK);

            // Draw a rectangle as a background
            contentStream.setNonStrokingColor(new Color(0.8f, 0.8f, 0.8f));
            contentStream.fillRect(50, 650, 500, 100);

            // Draw text
            contentStream.beginText();
            contentStream.newLineAtOffset(60, 680);
            contentStream.showText("Personal Details");
            contentStream.endText();

            contentStream.beginText();
            contentStream.setFont(PDType1Font.HELVETICA, 12);
            contentStream.newLineAtOffset(60, 630);
            contentStream.showText("Name: " + "Tejas");
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Address: " + "Pune");
            contentStream.endText();

            contentStream.close();

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            document.close();

            return outputStream.toByteArray();
        }

    }

}
