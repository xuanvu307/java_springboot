package com.example.buoi10_quanlyuser.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailService {
    private final JavaMailSender javaMailSender;


    public void sendEmail(String sendTo, String set, String text) {
        // Create a Simple MailMessage.
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(sendTo);
        message.setSubject(set);
        message.setText(text);

        // Send Message!
        javaMailSender.send(message);

    }
}
