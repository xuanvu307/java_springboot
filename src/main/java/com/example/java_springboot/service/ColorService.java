package com.example.java_springboot.service;

import com.example.java_springboot.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ColorService {
    List<String> colors = Arrays.asList("black", "green", "blue", "red", "yellow");

    public String getColor(int type) {
        if (type == 1) {
            int randomIndex = (int) (Math.random() * colors.size());
            return colors.get(randomIndex);
        } else if (type == 2) {
            List<String> lists = Arrays.asList("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "a", "b", "c", "d", "e", "f");
            StringBuilder str = new StringBuilder();
            str.append("#");
            for (int i = 0; i < 6; i++) {
                int getRandomIndex = (int) (Math.random() * 16);
                str.append(lists.get(getRandomIndex));
            }
            return String.valueOf(str);
        } else if (type == 3) {
            int rgbRed = (int) (Math.random() * 256);
            int rgbGreen = (int) (Math.random() * 256);
            int rgbBlue = (int) (Math.random() * 256);
            return String.format("rgb(%d,%d,%d)", rgbRed, rgbGreen, rgbBlue);
        }

        throw new NotFoundException("Type không hợp lệ");
    }
}
