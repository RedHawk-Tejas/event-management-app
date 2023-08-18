package com.example.demo.optimizationServices;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;

import javax.naming.NameNotFoundException;

import java.awt.*;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.sym.Name;

@Service
public class PdfService {

    public byte[] getTicket(String name, String amount, String location, String event_ID, String event_Name,
            String order_Id, String count) throws IOException, NameNotFoundException {

        try (PDDocument document = new PDDocument()) {
            if (event_ID.length() > 0) {
                PDPage page = new PDPage();
                document.addPage(page);

                PDPageContentStream contentStream = new PDPageContentStream(document, page);

                // Set font and font size
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

                // Set text color
                contentStream.setNonStrokingColor(Color.BLUE);

                // // Draw a rectangle as a background
                // contentStream.setNonStrokingColor(new Color(0.8f, 0.8f, 0.8f));
                // contentStream.fillRect(50, 650, 500, 100);

                // Draw text
                contentStream.beginText();
                contentStream.newLineAtOffset(60, 680);
                contentStream.showText("Personal Details");
                contentStream.endText();

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 12);
                contentStream.newLineAtOffset(60, 630);
                contentStream.showText("Name: " + name);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Address: " + location);
                contentStream.endText();

                ///// For Amount deatils

                // Set font and font size
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

                // Set text color
                contentStream.setNonStrokingColor(Color.BLUE);
                contentStream.beginText();
                contentStream.newLineAtOffset(60, 500);
                contentStream.showText("Ticket Details");
                contentStream.endText();

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 12);
                contentStream.newLineAtOffset(60, 450);
                contentStream.showText("Order ID: " + order_Id);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Amount: " + amount);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Number of Tickets: " + count);
                contentStream.endText();

                ///// For Event details

                // Set font and font size
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

                // Set text color
                contentStream.setNonStrokingColor(Color.BLUE);
                contentStream.beginText();
                contentStream.newLineAtOffset(60, 300);
                contentStream.showText("Event Information");
                contentStream.endText();

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 12);
                contentStream.newLineAtOffset(60, 250);
                contentStream.showText("Event Id: " + event_ID);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Event Name: " + event_Name);
                contentStream.endText();

                contentStream.close();

                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                document.save(outputStream);
                document.close();

                return outputStream.toByteArray();
            	} else {
                PDPage page = new PDPage();
                document.addPage(page);

                PDPageContentStream contentStream = new PDPageContentStream(document, page);

                // Set font and font size
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

                // Set text color
                contentStream.setNonStrokingColor(Color.BLUE);

                // // Draw a rectangle as a background
                // contentStream.setNonStrokingColor(new Color(0.8f, 0.8f, 0.8f));
                // contentStream.fillRect(50, 650, 500, 100);

                // Draw text
                contentStream.beginText();
                contentStream.newLineAtOffset(180, 680);
                contentStream.showText("Event No More Exists");
                contentStream.endText();

                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                document.save(outputStream);
                document.close();

                return outputStream.toByteArray();

            }
        }

    }

}
