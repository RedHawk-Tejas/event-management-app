package com.example.demo.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.example.demo.dao.EventData;
import com.example.demo.model.Eventdetail;

@Service
public class DateExpiryService {

    @Autowired
    private EventData eventData;

    @Bean
    public void CheckExpiryDate() {
        List<Eventdetail> listdata = eventData.findAll();

        for (int i = 0; i < listdata.size(); i++) {
            String dateOfEvent = listdata.get(i).getEventDateTime();
            String[] sp = dateOfEvent.split("T");
            long dateOfEventact = Date.parse(sp[0]);
            Date CurrentDate = new Date();
            String datecurrent = CurrentDate.toString();
            String sp2[] = datecurrent.split("T");
            long dateOFCurrent = Date.parse(sp2[0]);
            if (dateOfEventact < dateOFCurrent) {

                eventData.deleteById(listdata.get(i).getEventId());
            } else {
                continue;
            }
        }
    }

}
